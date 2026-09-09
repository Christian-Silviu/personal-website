export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  stack: string[];
  image?: string;
  imageAlt?: string;
  repo?: string;
  live?: string;
  status?: string;
}

export const projects: Project[] = [
  {
    slug: "personal-website",
    title: "Personal Website",
    tagline: "The site you're on right now.",
    description:
      "A personal portfolio website built from scratch with React Router, Tailwind, and Vite.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    image: "/images/website_profile_img.png",
    repo: "https://github.com/Christian-Silviu/personal-website",
    live: "https://www.christiancaunei.com/",
    status: "2026",
  },
  {
    slug: "calendula",
    title: "Calendula",
    tagline: "Calendar scheduler.",
    description:
      "An AI-powered full-stack calendar assistant that schedules Google Calendar events from natural language.",
    stack: ["React", "JavaScript", "Vite", "Python", "Fast API"],
    image: "/images/calendula_image.png",
    repo: "https://github.com/Christian-Silviu/calendar-assistant",
    status: "2026",
  },
  {
    slug: "cinedle",
    title: "Cinedle",
    tagline: "Movie guessing game.",
    description: "An early project Wordle-esque movie guessing game I made.",
    stack: ["React", "JavaScript", "Vite", "Python"],
    image: "/images/cinedle_image.png",
    live: "https://www.cinedle.org/",
    status: "2026",
  },
];
