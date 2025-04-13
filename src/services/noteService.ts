
import { supabase, NoteRecord } from "@/lib/supabase";

// Get all notes for the current user
export const getUserNotes = async (userId: string) => {
  const { data, error } = await supabase
    .from("notes")
    .select("*")
    .eq("user_id", userId)
    .order("updated_at", { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return data || [];
};

// Get notes for a specific task
export const getTaskNotes = async (taskId: string, userId: string) => {
  const { data, error } = await supabase
    .from("notes")
    .select("*")
    .eq("task_id", taskId)
    .eq("user_id", userId)
    .order("created_at", { ascending: true });

  if (error) {
    throw new Error(error.message);
  }

  return data || [];
};

// Create a new note
export const createNote = async (
  note: Omit<NoteRecord, "id" | "createdAt" | "updatedAt">
) => {
  const now = new Date().toISOString();
  
  const { data, error } = await supabase.from("notes").insert([
    {
      content: note.content,
      user_id: note.userId,
      task_id: note.taskId || null,
      video_id: note.videoId || null,
      created_at: now,
      updated_at: now,
    },
  ]).select();

  if (error) {
    throw new Error(error.message);
  }

  return data?.[0];
};

// Update a note
export const updateNote = async (
  noteId: string,
  content: string,
  userId: string
) => {
  const now = new Date().toISOString();
  
  const { data, error } = await supabase
    .from("notes")
    .update({
      content,
      updated_at: now,
    })
    .eq("id", noteId)
    .eq("user_id", userId)
    .select();

  if (error) {
    throw new Error(error.message);
  }

  return data?.[0];
};

// Delete a note
export const deleteNote = async (noteId: string, userId: string) => {
  const { error } = await supabase
    .from("notes")
    .delete()
    .eq("id", noteId)
    .eq("user_id", userId);

  if (error) {
    throw new Error(error.message);
  }

  return true;
};
