export interface PetType {
  id: string;
  nameRu: string;
  color: string;
  accentColor: string;
  traitRu: string;
  growthStages: {
    baby: string;
    kid: string;
    teen: string;
    adult: string;
    legend: string;
  };
}

export type PetMood = 'happy' | 'focused' | 'sleepy' | 'playful' | 'reflecting';
export type PetPersonality = 'cute' | 'bro' | 'calm' | 'serious';
export type GrowthStage = 'baby' | 'kid' | 'teen' | 'adult' | 'legend';

export interface LeadSubmission {
  id: string;
  name: string;
  contact: string;
  role: 'investor' | 'jury' | 'school' | 'partner' | 'user';
  interest: 'other' | 'investment' | 'beta' | 'partnership';
  message: string;
  createdAt: string;
  syncedToFirebase?: boolean;
}
