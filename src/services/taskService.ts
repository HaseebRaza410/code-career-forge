
import { supabase, TaskRecord } from "@/lib/supabase";

// Get all tasks for the current user
export const getUserTasks = async (userId: string) => {
  const { data, error } = await supabase
    .from("tasks")
    .select("*")
    .eq("user_id", userId)
    .order("due_date", { ascending: true });

  if (error) {
    throw new Error(error.message);
  }

  return data || [];
};

// Get a single task by ID
export const getTaskById = async (taskId: string, userId: string) => {
  const { data, error } = await supabase
    .from("tasks")
    .select("*")
    .eq("id", taskId)
    .eq("user_id", userId)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

// Create a new task
export const createTask = async (task: Omit<TaskRecord, "id" | "createdAt" | "updatedAt">) => {
  const now = new Date().toISOString();
  
  const { data, error } = await supabase.from("tasks").insert([
    {
      title: task.title,
      description: task.description,
      status: task.status || "not-started",
      due_date: task.dueDate,
      category: task.category,
      tags: task.tags || [],
      user_id: task.userId,
      created_at: now,
      updated_at: now,
    },
  ]).select();

  if (error) {
    throw new Error(error.message);
  }

  return data?.[0];
};

// Update a task
export const updateTask = async (
  taskId: string,
  updates: Partial<Omit<TaskRecord, "id" | "userId" | "createdAt" | "updatedAt">>,
  userId: string
) => {
  const now = new Date().toISOString();
  
  const { data, error } = await supabase
    .from("tasks")
    .update({
      ...updates,
      updated_at: now,
    })
    .eq("id", taskId)
    .eq("user_id", userId)
    .select();

  if (error) {
    throw new Error(error.message);
  }

  return data?.[0];
};

// Update task status
export const updateTaskStatus = async (
  taskId: string,
  status: "not-started" | "in-progress" | "completed",
  userId: string
) => {
  return updateTask(taskId, { status }, userId);
};

// Delete a task
export const deleteTask = async (taskId: string, userId: string) => {
  const { error } = await supabase
    .from("tasks")
    .delete()
    .eq("id", taskId)
    .eq("user_id", userId);

  if (error) {
    throw new Error(error.message);
  }

  return true;
};
