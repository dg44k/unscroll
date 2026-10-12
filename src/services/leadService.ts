import { collection, doc, setDoc, getDocs } from 'firebase/firestore';
import { db, auth } from '../lib/firebase';
import { LeadSubmission } from '../types';

const STORAGE_KEY = 'unscroll_leads_cache_v1';

export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
    isAnonymous?: boolean | null;
    tenantId?: string | null;
    providerInfo?: {
      providerId?: string | null;
      email?: string | null;
    }[];
  };
}

export function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
      tenantId: auth.currentUser?.tenantId,
      providerInfo: auth.currentUser?.providerData?.map(provider => ({
        providerId: provider.providerId,
        email: provider.email,
      })) || []
    },
    operationType,
    path
  };
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  return errInfo;
}

const INITIAL_DEMO_LEADS: LeadSubmission[] = [
  {
    id: 'demo-lead-1',
    name: 'Елена В. (Инкубатор стартапов)',
    contact: 'elena@startup-hub.io',
    role: 'jury',
    interest: 'pilot',
    message: 'Отличная идея с заменой ленты и тамагочи. Хотим предложить включить Unscroll в осенний пилот для 3-х партнерских лицеев.',
    createdAt: '2026-10-11T12:00:00Z',
    syncedToFirebase: true
  },
  {
    id: 'demo-lead-2',
    name: 'Mark Ventures (Early Stage Angel)',
    contact: '@mark_angel_vc',
    role: 'investor',
    interest: 'investment',
    message: 'Заинтересовал запрос на пилот $131 336. Готовы обсудить SAFE и со-инвестирование с синдикатом.',
    createdAt: '2026-10-10T16:30:00Z',
    syncedToFirebase: true
  }
];

export const getLocalLeads = (): LeadSubmission[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_DEMO_LEADS));
      return INITIAL_DEMO_LEADS;
    }
    return JSON.parse(raw);
  } catch {
    return INITIAL_DEMO_LEADS;
  }
};

export const getLeads = async (): Promise<LeadSubmission[]> => {
  const local = getLocalLeads();
  try {
    const leadsRef = collection(db, 'leads');
    const snapshot = await getDocs(leadsRef);
    if (!snapshot.empty) {
      const fromFirestore: LeadSubmission[] = [];
      snapshot.forEach(docSnap => {
        const data = docSnap.data();
        fromFirestore.push({
          id: docSnap.id,
          name: data.name || '',
          contact: data.contact || '',
          role: data.role || 'jury',
          interest: data.interest || 'pilot',
          message: data.message || '',
          createdAt: data.createdAt || new Date().toISOString(),
          syncedToFirebase: true
        });
      });
      fromFirestore.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      
      const mergedMap = new Map<string, LeadSubmission>();
      fromFirestore.forEach(l => mergedMap.set(l.id, l));
      local.forEach(l => {
        if (!mergedMap.has(l.id)) mergedMap.set(l.id, l);
      });
      const combined = Array.from(mergedMap.values());
      localStorage.setItem(STORAGE_KEY, JSON.stringify(combined));
      return combined;
    }
  } catch (err) {
    handleFirestoreError(err, OperationType.LIST, 'leads');
  }
  return local;
};

export const saveLead = async (
  data: Omit<LeadSubmission, 'id' | 'createdAt' | 'syncedToFirebase'>
): Promise<LeadSubmission> => {
  const generatedId = 'lead-' + Date.now() + '-' + Math.random().toString(36).substring(2, 7);
  const now = new Date().toISOString();

  const newLead: LeadSubmission = {
    ...data,
    id: generatedId,
    createdAt: now,
    syncedToFirebase: false
  };

  try {
    const current = getLocalLeads();
    const updated = [newLead, ...current];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (err) {
    console.warn('LocalStorage save failed:', err);
  }

  try {
    const docRef = doc(db, 'leads', generatedId);
    await setDoc(docRef, {
      id: generatedId,
      name: data.name.trim().slice(0, 100),
      contact: data.contact.trim().slice(0, 100),
      role: data.role,
      interest: data.interest,
      message: (data.message || '').trim().slice(0, 1000),
      createdAt: now
    });
    newLead.syncedToFirebase = true;

    const current = getLocalLeads();
    const updated = current.map(item => item.id === generatedId ? { ...item, syncedToFirebase: true } : item);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (err) {
    handleFirestoreError(err, OperationType.CREATE, `leads/${generatedId}`);
  }

  return newLead;
};
