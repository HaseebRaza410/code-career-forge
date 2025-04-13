
import { createClient } from '@supabase/supabase-js';
import type { Database } from '@/lib/database.types';

// These environment variables should be set in production
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);

// Types for our user
export type UserDetails = {
  id: string;
  fullName: string | null;
  email: string | null;
  avatarUrl: string | null;
  lastActive: string | null;
  streak: number | null;
  isPremium: boolean | null;
};

// Type for our tasks
export type TaskRecord = {
  id: string;
  title: string;
  description: string;
  status: "not-started" | "in-progress" | "completed";
  dueDate: string;
  category: string;
  tags: string[];
  userId: string;
  createdAt: string;
  updatedAt: string;
};

// Type for our notes
export type NoteRecord = {
  id: string;
  content: string;
  userId: string;
  taskId: string | null;
  videoId: string | null;
  createdAt: string;
  updatedAt: string;
};
