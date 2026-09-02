export interface Project {
  title: string;
  description: string;
  tech: string[];
  year: string;
  link: string;
  tag?: string;
  isPrivate?: boolean;
  statusText?: string;
}

export const projects: Project[] = [
  {
    title: "Govlyx",
    description:
      "Co-Founder. A comprehensive full-stack platform designed for streamlined citizen & public service workflows with structured backend architecture, modern user experience, and digital governance tools.",
    tech: ["Next.js", "React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    year: "2026",
    link: "https://govlyx.com",
    tag: "Co-Founder • Live"
  },
  {
    title: "QueueSmart",
    description:
      "Co-Founder. A patented smart queue management and scheduling platform currently in active development. Engineered with high-concurrency architecture to optimize waiting times and flow management.",
    tech: ["React", "Node.js", "System Design", "Cloud Architecture", "Distributed Queues"],
    year: "2026",
    link: "#contact",
    tag: "Co-Founder • Patented",
    isPrivate: true,
    statusText: "Private Repo • Connect to know more"
  },
  {
    title: "Higgs (Higgsfield)",
    description:
      "An AI-powered image and video generation web platform leveraging the Pollinations API, real-time media generation pipelines, and responsive creative controls.",
    tech: ["TypeScript", "React", "Pollinations API", "AI Generation", "Tailwind CSS"],
    year: "2026",
    link: "https://github.com/brave98git/higgs",
    tag: "Generative AI"
  },
  {
    title: "JSFiddle-like Backend Engine",
    description:
      "A scalable code execution engine and playground backend built with Pub/Sub architectures, Redis queues, worker process spawning, and isolated runtime execution.",
    tech: ["Node.js", "Redis", "Pub/Sub", "Message Queues", "Process Spawning", "TypeScript"],
    year: "2026",
    link: "https://github.com/brave98git/js-fiddle-backend",
    tag: "Distributed Systems"
  },
  {
    title: "React Quill Notes App",
    description:
      "An advanced rich-text note-taking application built with React and React-Quill. Supports formatted content, controlled editor state, secure HTML rendering, and scalable state management.",
    tech: ["React", "React Quill", "JavaScript", "Tailwind CSS"],
    year: "2025",
    link: "https://github.com/brave98git/react-quill-app",
    tag: "Frontend"
  },
  {
    title: "Simplix Editor",
    description:
      "A lightweight browser-based image editor built with Vanilla JavaScript. Features real-time filters, pro presets, canvas-based editing, image upload/download, and responsive controls.",
    tech: ["HTML5", "CSS3", "JavaScript", "Canvas API"],
    year: "2025",
    link: "https://github.com/brave98git/Simplix-Editor-js",
    tag: "Browser APIs"
  },
  {
    title: "Kanban Flow",
    description:
      "A Kanban-style task management board with LocalStorage integration for persistent data storage. Built with clean, framework-free JavaScript and native browser APIs.",
    tech: ["HTML5", "CSS3", "JavaScript", "LocalStorage"],
    year: "2025",
    link: "https://github.com/brave98git/kanban-flow-js",
    tag: "JavaScript"
  },
  {
    title: "Simon Game",
    description:
      "A Simon memory game built using HTML, CSS, JavaScript, and jQuery. Test and improve memory skills by repeating algorithmic color sequences.",
    tech: ["HTML", "CSS", "JavaScript", "jQuery"],
    year: "2025",
    link: "https://github.com/brave98git/simon-game",
    tag: "Game Logic"
  },
  {
    title: "Snake Game (JavaScript)",
    description:
      "A classic Snake Game built using HTML, CSS, and Vanilla JavaScript to practice core web development concepts, state tracking, and grid math.",
    tech: ["HTML", "CSS", "JavaScript"],
    year: "2025",
    link: "https://github.com/brave98git/snakeeee-game-js",
    tag: "Game Logic"
  },
  {
    title: "More Projects on GitHub",
    description:
      "Explore more full-stack applications, developer utilities, UI experiments, and open-source contributions on my GitHub profile.",
    tech: ["Full-Stack", "JavaScript", "Open Source"],
    year: "Since 2023",
    link: "https://github.com/brave98git",
    tag: "GitHub"
  }
];
