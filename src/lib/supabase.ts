
import { createClient } from '@supabase/supabase-js';
import type { Database } from './database.types';

// Use environment variables for Supabase connection
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://iiaedttaeytavfdejrgi.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlpYWVkdHRhZXl0YXZmZGVqcmdpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ0ODMwODYsImV4cCI6MjA2MDA1OTA4Nn0.aCizmBR88bYvtKMPcZcceWthOXNiPuUk8ykF28SoyEI';

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  }
});

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
