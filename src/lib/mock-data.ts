
import { User, Task, Video, Note, SavedVideo, RoadmapSection, Badge } from './types';

export const currentUser: User = {
  id: '1',
  name: 'Jane Smith',
  email: 'jane@example.com',
  avatarUrl: '/placeholder.svg',
  joinedAt: new Date('2023-12-01'),
  streak: 7,
  lastActive: new Date(),
  isPremium: false,
};

export const mockVideos: Video[] = [
  {
    id: '1',
    title: 'HTML Fundamentals - Building Your First Webpage',
    youtubeId: 'kUMe1FH4CHE',
    duration: 3600,
    category: 'HTML',
    language: 'english',
    difficulty: 'beginner',
    watched: true,
    watchedDuration: 3600,
  },
  {
    id: '2',
    title: 'CSS Crash Course For Absolute Beginners',
    youtubeId: 'yfoY53QXEnI',
    duration: 5400,
    category: 'CSS',
    language: 'english',
    difficulty: 'beginner',
    watched: true,
    watchedDuration: 5400,
  },
  {
    id: '3',
    title: 'JavaScript Basics for Beginners',
    youtubeId: 'W6NZfCO5SIk',
    duration: 2700,
    category: 'JavaScript',
    language: 'english',
    difficulty: 'beginner',
    watched: false,
    watchedDuration: 1200,
  },
  {
    id: '4',
    title: 'HTML और CSS की पूरी जानकारी हिंदी में',
    youtubeId: 'BsDoLVMnmZs',
    duration: 4800,
    category: 'HTML',
    language: 'hindi',
    difficulty: 'beginner',
    watched: false,
    watchedDuration: 0,
  },
  {
    id: '5',
    title: 'Learn React JS for Beginners',
    youtubeId: 'bMknfKXIFA8',
    duration: 7200,
    category: 'React',
    language: 'english',
    difficulty: 'intermediate',
    watched: false,
    watchedDuration: 0,
  },
];

export const mockTasks: Task[] = [
  {
    id: '1',
    title: 'Learn HTML Basics',
    description: 'Understand HTML document structure, elements, and attributes',
    status: 'completed',
    dueDate: new Date('2024-01-15'),
    category: 'HTML',
    tags: ['beginner', 'frontend'],
    resources: {
      videos: [mockVideos[0]],
      readings: ['https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML'],
      exercises: ['Create a simple personal profile page using HTML only'],
    },
  },
  {
    id: '2',
    title: 'Master CSS Fundamentals',
    description: 'Learn CSS selectors, properties, and layout techniques',
    status: 'completed',
    dueDate: new Date('2024-02-01'),
    category: 'CSS',
    tags: ['beginner', 'frontend'],
    resources: {
      videos: [mockVideos[1]],
      readings: ['https://developer.mozilla.org/en-US/docs/Learn/CSS'],
      exercises: ['Style your personal profile page using CSS'],
    },
  },
  {
    id: '3',
    title: 'JavaScript Basics',
    description: 'Learn variables, data types, functions, and control flow',
    status: 'in-progress',
    dueDate: new Date('2024-02-15'),
    category: 'JavaScript',
    tags: ['beginner', 'frontend', 'programming'],
    resources: {
      videos: [mockVideos[2]],
      readings: ['https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps'],
      exercises: ['Create a simple calculator using JavaScript'],
    },
  },
  {
    id: '4',
    title: 'Introduction to React',
    description: 'Learn React components, props, and state management',
    status: 'not-started',
    dueDate: new Date('2024-03-01'),
    category: 'React',
    tags: ['intermediate', 'frontend', 'framework'],
    resources: {
      videos: [mockVideos[4]],
      readings: ['https://react.dev/learn'],
      exercises: ['Convert your personal profile to a React app'],
    },
  },
];

export const mockNotes: Note[] = [
  {
    id: '1',
    content: 'Remember to always include DOCTYPE declaration for HTML5',
    createdAt: new Date('2024-01-10'),
    updatedAt: new Date('2024-01-10'),
    taskId: '1',
  },
  {
    id: '2',
    content: 'CSS flexbox is great for responsive layouts',
    createdAt: new Date('2024-01-25'),
    updatedAt: new Date('2024-01-27'),
    taskId: '2',
  },
  {
    id: '3',
    content: 'JavaScript functions can be declared or expressed',
    createdAt: new Date('2024-02-05'),
    updatedAt: new Date('2024-02-05'),
    videoId: '3',
  },
];

export const mockSavedVideos: SavedVideo[] = [
  {
    id: '1',
    videoId: '3',
    savedAt: new Date('2024-02-03'),
  },
  {
    id: '2',
    videoId: '5',
    savedAt: new Date('2024-02-10'),
  },
];

export const mockRoadmap: RoadmapSection[] = [
  {
    id: '1',
    title: 'HTML & CSS Fundamentals',
    description: 'Learn the basics of web structure and styling',
    weekNumber: 1,
    tasks: [mockTasks[0], mockTasks[1]],
    isCompleted: true,
  },
  {
    id: '2',
    title: 'JavaScript Essentials',
    description: 'Become familiar with the core programming language of the web',
    weekNumber: 3,
    tasks: [mockTasks[2]],
    isCompleted: false,
  },
  {
    id: '3',
    title: 'Frontend Frameworks',
    description: 'Master React.js for building modern web interfaces',
    weekNumber: 5,
    tasks: [mockTasks[3]],
    isCompleted: false,
  },
];

export const mockBadges: Badge[] = [
  {
    id: '1',
    name: 'HTML Master',
    description: 'Completed all HTML tasks',
    imageUrl: '/placeholder.svg',
    earnedAt: new Date('2024-01-20'),
  },
  {
    id: '2',
    name: 'CSS Wizard',
    description: 'Completed all CSS tasks',
    imageUrl: '/placeholder.svg',
    earnedAt: new Date('2024-02-05'),
  },
  {
    id: '3',
    name: 'JavaScript Explorer',
    description: 'Started learning JavaScript',
    imageUrl: '/placeholder.svg',
    earnedAt: new Date('2024-02-10'),
  },
];
