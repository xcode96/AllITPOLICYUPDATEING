export interface Category {
  id: string;
  name: string;
  icon?: string;
  group?: string; // High-level grouping (e.g. "IT Infrastructure")
}

export interface Policy {
  id: number;
  name: string;
  categoryId?: string;
  content?: string; // Making explicit
}

export type SyncStatus = 'not-connected' | 'connecting' | 'connected' | 'failed';
