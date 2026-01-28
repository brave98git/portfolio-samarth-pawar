import {
  FaReact,
  FaNodeJs,
  FaGit,
  FaFigma,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNpm,
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
  SiGreensock,
  SiDaisyui ,
  SiShadcnui ,
  SiEjs ,
} from "react-icons/si";

import { BiLogoBlender } from "react-icons/bi";

import { TbBrandRadixUi,TbBrandFramerMotion  } from "react-icons/tb";
import { RiReactjsLine } from "react-icons/ri";
import {GiSteamLocomotive } from "react-icons/gi"

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
      { name: "Redux", icon: SiRedux },
    ],
  },

  backend: {
    title: "Backend",
    icon: FaNodeJs,
    items: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "MongoDB", icon: SiMongodb },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MySQL", icon: SiMysql },
      { name: "EJS", icon: SiEjs  },
    ],
  },

  libraries: {
    title: "Libraries & UI",
    icon: RiReactjsLine,
    items: [
      { name: "shadcn/ui", icon: SiShadcnui },
      { name: "Radix UI", icon: TbBrandRadixUi },
      { name: "DaisyUI", icon: SiDaisyui  },
      { name: "Zustand", icon: SiRedux },
      { name: "Framer Motion", icon: TbBrandFramerMotion  },
      { name: "GSAP", icon: SiGreensock },
      { name: "Locomotive Scroll", icon: GiSteamLocomotive  },
    ],
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
      { name: "Deno", icon: SiDeno },
      { name: "Blender", icon: BiLogoBlender },
    ],
  },
};
