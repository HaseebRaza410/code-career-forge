
export type User = {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
  joinedAt: Date;
  streak: number;
  lastActive: Date;
  isPremium: boolean;
};

export type TaskStatus = "not-started" | "in-progress" | "completed";

export type Task = {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  dueDate: Date;
  category: string;
  tags: string[];
  resources: {
    videos: Video[];
    readings: string[];
    exercises: string[];
  };
};

export type Video = {
  id: string;
  title: string;
  youtubeId: string;
  duration: number;
  category: string;
  language: "english" | "hindi" | "urdu";
  difficulty: "beginner" | "intermediate" | "advanced";
  watched: boolean;
  watchedDuration: number;
};

export type Note = {
  id: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  taskId?: string;
  videoId?: string;
};

export type SavedVideo = {
  id: string;
  videoId: string;
  savedAt: Date;
};

export type RoadmapSection = {
  id: string;
  title: string;
  description: string;
  weekNumber: number;
  tasks: Task[];
  isCompleted: boolean;
};

export type Badge = {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  earnedAt?: Date;
};
