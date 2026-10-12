import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../lib/firebase";
import { LeadSubmission } from "../types";

type NewLead = Omit<LeadSubmission, "id" | "createdAt" | "syncedToFirebase">;

export async function saveLead(data: NewLead): Promise<void> {
  await addDoc(collection(db, "leads"), {
    name: data.name.trim().slice(0, 100),
    contact: data.contact.trim().slice(0, 150),
    role: data.role,
    interest: data.interest,
    message: (data.message || "").trim().slice(0, 1000),
    createdAt: serverTimestamp(),
  });
}
