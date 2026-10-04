import {
  FaReact,
  FaNodeJs,
  FaGit,
  FaFigma,
  FaHtml5,
  FaJs,
  FaNpm,
  FaLinux,
  FaDatabase,
  FaLayerGroup,
  FaServer,
  FaAsterisk,
  FaVolumeUp,
  FaBullhorn,
  FaBolt,
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
  SiGreensock,
  SiDaisyui,
  SiShadcnui,
  SiEjs,
  SiPython,
  SiCplusplus,
  SiExpress,
  SiGithub,
  SiNextdotjs,
  SiBun,
  SiJson,
  SiDocker,
  SiNginx,
  SiPm2,
  SiDigitalocean,
  SiAmazonec2,
} from "react-icons/si";

import { TbBrandRadixUi, TbBrandFramerMotion, TbContainer, TbShieldLock } from "react-icons/tb";
import { RiCodeSSlashLine, RiVoiceprintLine } from "react-icons/ri";

export const skills = {
  languages: {
    title: "Languages",
    icon: RiCodeSSlashLine,
    items: [
      { name: "JavaScript", icon: FaJs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Python", icon: SiPython },
      { name: "SQL", icon: FaDatabase },
      { name: "C / C++", icon: SiCplusplus },
    ],
  },

  frontend: {
    title: "Frontend",
    icon: FaReact,
    items: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React", icon: FaReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Redux", icon: SiRedux },
      { name: "Zustand", icon: FaLayerGroup },
      { name: "HTML / CSS", icon: FaHtml5 },
    ],
  },

  backend: {
    title: "Backend & Full-Stack",
    icon: FaNodeJs,
    items: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Bun", icon: SiBun },
      { name: "ElysiaJS", icon: FaBolt },
      { name: "Express.js", icon: SiExpress },
      { name: "NextAuth.js", icon: TbShieldLock },
      { name: "REST APIs", icon: FaServer },
      { name: "JSON", icon: SiJson },
      { name: "EJS", icon: SiEjs },
    ],
  },

  databases: {
    title: "Databases",
    icon: FaDatabase,
    items: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MySQL", icon: SiMysql },
    ],
  },

  telephonySpeech: {
    title: "Telephony & Speech Synthesis",
    icon: RiVoiceprintLine,
    items: [
      { name: "Asterisk", icon: FaAsterisk },
      { name: "Piper TTS", icon: FaVolumeUp },
      { name: "espeak-ng", icon: FaBullhorn },
    ],
  },

  libraries: {
    title: "UI & Animation Libraries",
    icon: TbBrandFramerMotion,
    items: [
      { name: "Framer Motion", icon: TbBrandFramerMotion },
      { name: "GSAP", icon: SiGreensock },
      { name: "shadcn/ui", icon: SiShadcnui },
      { name: "Radix UI", icon: TbBrandRadixUi },
      { name: "DaisyUI", icon: SiDaisyui },
    ],
  },

  devops: {
    title: "DevOps & Cloud",
    icon: FaServer,
    items: [
      { name: "Docker", icon: SiDocker },
      { name: "Containers", icon: TbContainer },
      { name: "Nginx", icon: SiNginx },
      { name: "PM2", icon: SiPm2 },
      { name: "DigitalOcean Droplets", icon: SiDigitalocean },
      { name: "AWS EC2", icon: SiAmazonec2 },
      { name: "Linux", icon: FaLinux },
    ],
  },

  tools: {
    title: "Tools & Workflow",
    icon: FaGit,
    items: [
      { name: "Git", icon: FaGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Vite", icon: SiVite },
      { name: "npm", icon: FaNpm },
      { name: "Postman", icon: SiPostman },
      { name: "Figma", icon: FaFigma },
    ],
  },
};
