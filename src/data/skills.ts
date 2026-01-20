import {
  FaReact,
  FaNodeJs,
  FaGit,
  FaFigma,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNpm
} from "react-icons/fa";

import {
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiVite,
  SiPostman,
  SiBun,
  SiDeno,
} from "react-icons/si";

export const skills = {
  frontend: {
    title: "Frontend",
    icon: FaReact,
    items: [
      { name: "React", icon: FaReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: FaJs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "Redux", icon: SiRedux }
    ]
  },

  backend: {
    title: "Backend",
    icon: FaNodeJs,
    items: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "MongoDB", icon: SiMongodb },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MySQL", icon: SiMysql }
    ]
  },

  tools: {
    title: "Tools & Others",
    icon: FaGit,
    items: [
      { name: "Git", icon: FaGit },
      { name: "Figma", icon: FaFigma },
      { name: "Vite", icon: SiVite },
      { name: "npm", icon: FaNpm },
      { name: "Postman", icon: SiPostman },
      { name: "Bun", icon: SiBun },
      { name: "Deno", icon: SiDeno }
    ]
  }
};
