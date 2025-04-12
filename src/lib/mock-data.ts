
import { User, Task, RoadmapSection, Video, Note, SavedVideo, Badge } from "./types";

export const currentUser: User = {
  id: "user-1",
  name: "Alex Johnson",
  email: "alex@example.com",
  avatarUrl: "https://i.pravatar.cc/300?u=user1",
  joinedAt: new Date("2023-11-15"),
  streak: 7,
  lastActive: new Date(),
  isPremium: false
};

export const mockBadges: Badge[] = [
  {
    id: "badge-1",
    name: "HTML Master",
    description: "Completed all HTML tasks",
    imageUrl: "/placeholder.svg",
    earnedAt: new Date("2023-12-01")
  },
  {
    id: "badge-2",
    name: "CSS Wizard",
    description: "Completed all CSS tasks",
    imageUrl: "/placeholder.svg",
    earnedAt: new Date("2023-12-15")
  },
  {
    id: "badge-3",
    name: "7 Day Streak",
    description: "Logged in for 7 consecutive days",
    imageUrl: "/placeholder.svg",
    earnedAt: new Date("2024-01-05")
  },
  {
    id: "badge-4",
    name: "JavaScript Ninja",
    description: "Completed all JavaScript fundamentals",
    imageUrl: "/placeholder.svg"
  },
  {
    id: "badge-5",
    name: "React Rookie",
    description: "Built your first React component",
    imageUrl: "/placeholder.svg"
  }
];

export const mockVideos: Video[] = [
  {
    id: "video-1",
    title: "HTML Fundamentals - Document Structure",
    youtubeId: "dQw4w9WgXcQ",
    duration: 853,
    category: "HTML",
    language: "english",
    difficulty: "beginner",
    watched: true,
    watchedDuration: 853
  },
  {
    id: "video-2",
    title: "CSS Flexbox Complete Guide",
    youtubeId: "JJSoEo8JSnc",
    duration: 1245,
    category: "CSS",
    language: "english",
    difficulty: "intermediate",
    watched: false,
    watchedDuration: 350
  },
  {
    id: "video-3",
    title: "JavaScript Variables and Data Types",
    youtubeId: "DHvZLI7Db8E",
    duration: 962,
    category: "JavaScript",
    language: "english",
    difficulty: "beginner",
    watched: false,
    watchedDuration: 0
  },
  {
    id: "video-4",
    title: "Introduction to React Hooks",
    youtubeId: "dpw9EHDh2bM",
    duration: 1578,
    category: "React",
    language: "english",
    difficulty: "intermediate",
    watched: false,
    watchedDuration: 0
  },
  {
    id: "video-5",
    title: "बुनियादी HTML सिखें (Learn Basic HTML in Hindi)",
    youtubeId: "BsDoLVMnmZs",
    duration: 785,
    category: "HTML",
    language: "hindi",
    difficulty: "beginner",
    watched: false,
    watchedDuration: 0
  },
  {
    id: "video-6",
    title: "انٹروڈکشن ٹو جاوا اسکرپٹ (Introduction to JavaScript in Urdu)",
    youtubeId: "hNWgHF8aNag",
    duration: 1100,
    category: "JavaScript",
    language: "urdu",
    difficulty: "beginner",
    watched: false,
    watchedDuration: 0
  }
];

export const mockSavedVideos: SavedVideo[] = [
  {
    id: "saved-1",
    videoId: "video-2",
    savedAt: new Date("2024-01-10")
  },
  {
    id: "saved-2",
    videoId: "video-4",
    savedAt: new Date("2024-01-15")
  }
];

export const mockTasks: Task[] = [
  {
    id: "task-1",
    title: "Build Your First HTML Page",
    description: "Create a simple HTML page with proper document structure, headings, paragraphs, links, and images.",
    status: "completed",
    dueDate: new Date("2024-01-10"),
    category: "HTML",
    tags: ["html", "basics", "web development"],
    resources: {
      videos: [mockVideos[0], mockVideos[4]],
      readings: [
        "https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML",
        "https://www.w3schools.com/html/html_intro.asp"
      ],
      exercises: [
        "Create a personal profile page with your name, bio, and interests",
        "Add navigation links between multiple pages",
        "Embed images and format text using basic HTML tags"
      ]
    }
  },
  {
    id: "task-2",
    title: "CSS Styling Basics",
    description: "Learn how to style HTML elements using CSS. Understand selectors, properties, and values.",
    status: "in-progress",
    dueDate: new Date("2024-01-25"),
    category: "CSS",
    tags: ["css", "styling", "selectors"],
    resources: {
      videos: [mockVideos[1]],
      readings: [
        "https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps",
        "https://css-tricks.com/snippets/css/a-guide-to-flexbox/"
      ],
      exercises: [
        "Style the personal profile page you created in the HTML task",
        "Create a responsive navigation menu",
        "Build a simple card component with CSS"
      ]
    }
  },
  {
    id: "task-3",
    title: "JavaScript Fundamentals",
    description: "Understand basic JavaScript concepts like variables, data types, functions, and control flow.",
    status: "not-started",
    dueDate: new Date("2024-02-15"),
    category: "JavaScript",
    tags: ["javascript", "programming", "basics"],
    resources: {
      videos: [mockVideos[2], mockVideos[5]],
      readings: [
        "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
        "https://javascript.info/first-steps"
      ],
      exercises: [
        "Create a calculator function that can perform basic arithmetic",
        "Build a form validation script",
        "Implement a simple to-do list with add/remove functionality"
      ]
    }
  },
  {
    id: "task-4",
    title: "Introduction to React",
    description: "Learn the basics of React including components, props, state, and hooks.",
    status: "not-started",
    dueDate: new Date("2024-03-10"),
    category: "React",
    tags: ["react", "frontend", "components"],
    resources: {
      videos: [mockVideos[3]],
      readings: [
        "https://reactjs.org/docs/getting-started.html",
        "https://beta.reactjs.org/learn"
      ],
      exercises: [
        "Create a simple counter component with useState",
        "Build a todo list application with React",
        "Implement a theme switcher using Context API"
      ]
    }
  },
  {
    id: "task-5",
    title: "Building a Responsive Portfolio",
    description: "Create a responsive portfolio website using HTML, CSS, and JavaScript to showcase your projects.",
    status: "not-started",
    dueDate: new Date("2024-04-05"),
    category: "Project",
    tags: ["portfolio", "responsive", "project"],
    resources: {
      videos: [],
      readings: [
        "https://www.freecodecamp.org/news/how-to-build-a-developer-portfolio-website/",
        "https://css-tricks.com/snippets/css/complete-guide-grid/"
      ],
      exercises: [
        "Design a wireframe for your portfolio",
        "Implement a responsive layout using CSS Grid or Flexbox",
        "Add JavaScript interactions and animations"
      ]
    }
  }
];

export const mockNotes: Note[] = [
  {
    id: "note-1",
    content: "Remember to use semantic HTML elements like <header>, <nav>, <main>, <section>, and <footer> instead of generic <div> elements for better accessibility and SEO.",
    createdAt: new Date("2024-01-05"),
    updatedAt: new Date("2024-01-05"),
    taskId: "task-1"
  },
  {
    id: "note-2",
    content: "Flexbox tips:\n- use 'display: flex' on parent\n- 'justify-content' for horizontal alignment\n- 'align-items' for vertical alignment\n- 'flex-direction: column' changes the main axis",
    createdAt: new Date("2024-01-15"),
    updatedAt: new Date("2024-01-16"),
    taskId: "task-2"
  },
  {
    id: "note-3",
    content: "The video explains React hooks really well, especially useEffect. Need to review the dependency array part again.",
    createdAt: new Date("2024-01-20"),
    updatedAt: new Date("2024-01-20"),
    videoId: "video-4"
  }
];

export const mockRoadmap: RoadmapSection[] = [
  {
    id: "section-1",
    title: "HTML Basics",
    description: "Learn the fundamentals of HTML5 and document structure",
    weekNumber: 1,
    tasks: [mockTasks[0]],
    isCompleted: true
  },
  {
    id: "section-2",
    title: "CSS Fundamentals",
    description: "Master CSS styling and layouts",
    weekNumber: 2,
    tasks: [mockTasks[1]],
    isCompleted: false
  },
  {
    id: "section-3",
    title: "JavaScript Essentials",
    description: "Learn core JavaScript concepts for web development",
    weekNumber: 3,
    tasks: [mockTasks[2]],
    isCompleted: false
  },
  {
    id: "section-4",
    title: "React Basics",
    description: "Build interactive UIs with React",
    weekNumber: 4,
    tasks: [mockTasks[3]],
    isCompleted: false
  },
  {
    id: "section-5",
    title: "Portfolio Project",
    description: "Create your developer portfolio",
    weekNumber: 5,
    tasks: [mockTasks[4]],
    isCompleted: false
  },
  {
    id: "section-6",
    title: "Node.js Fundamentals",
    description: "Server-side JavaScript with Node.js",
    weekNumber: 6,
    tasks: [],
    isCompleted: false
  },
  {
    id: "section-7",
    title: "Database Basics",
    description: "Working with MongoDB and SQL databases",
    weekNumber: 7,
    tasks: [],
    isCompleted: false
  },
  {
    id: "section-8",
    title: "Full-Stack Project",
    description: "Build a complete web application",
    weekNumber: 8,
    tasks: [],
    isCompleted: false
  }
];
