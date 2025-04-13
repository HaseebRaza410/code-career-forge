
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      notes: {
        Row: {
          id: string
          content: string
          user_id: string
          task_id: string | null
          video_id: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          content: string
          user_id: string
          task_id?: string | null
          video_id?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          content?: string
          user_id?: string
          task_id?: string | null
          video_id?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      tasks: {
        Row: {
          id: string
          title: string
          description: string
          status: "not-started" | "in-progress" | "completed"
          due_date: string
          category: string
          tags: string[]
          user_id: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          description: string
          status?: "not-started" | "in-progress" | "completed"
          due_date: string
          category: string
          tags?: string[]
          user_id: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string
          status?: "not-started" | "in-progress" | "completed"
          due_date?: string
          category?: string
          tags?: string[]
          user_id?: string
          created_at?: string
          updated_at?: string
        }
      }
      users: {
        Row: {
          id: string
          email: string
          full_name: string | null
          avatar_url: string | null
          last_active: string | null
          streak: number
          is_premium: boolean
        }
        Insert: {
          id: string
          email: string
          full_name?: string | null
          avatar_url?: string | null
          last_active?: string | null
          streak?: number
          is_premium?: boolean
        }
        Update: {
          id?: string
          email?: string
          full_name?: string | null
          avatar_url?: string | null
          last_active?: string | null
          streak?: number
          is_premium?: boolean
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
