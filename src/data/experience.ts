export interface ExperienceItem {
  role: string;
  company: string;
  location?: string;
  type: string;
  startDate?: string; // YYYY-MM format, e.g. "2026-06"
  endDate?: string;   // YYYY-MM format or undefined for Present
  isCurrent?: boolean;
  period?: string;    // Fallback or override
  description: string;
  highlights: string[];
  technologies: string[];
}

export const experiences: ExperienceItem[] = [
  {
    role: "Full Stack Engineer Intern",
    company: "Assertion Inc.",
    type: "Internship",
    startDate: "2026-06",
    isCurrent: true,
    description:
      "Developing production telephony systems, voice synthesis integrations, backend API pipelines, and Linux service infrastructure.",
    highlights: [
      "Integrated and configured Asterisk telephony services, SIP/FastAGI communication pipelines, and JSON-driven APIs.",
      "Implemented and optimized offline/local text-to-speech synthesis workflows using Piper TTS and espeak-ng engines.",
      "Managed Linux service environments, automated background daemons, and system deployment processes.",
      "Collaborated on debugging production services, improving API throughput, and ensuring high system availability."
    ],
    technologies: [
      "Node.js",
      "Asterisk",
      "Piper TTS",
      "espeak-ng",
      "Linux",
      "REST APIs",
      "JSON"
    ]
  }
];
