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
      "A single-page portfolio built from scratch with React Router, Tailwind, and Vite. Content lives in typed data files so adding a project or editing a bio is a one-object change, and small touches like the typewriter intro and the live Toronto clock are hand-rolled rather than pulled from a library.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    repo: "https://github.com/Christian-Silviu/personal-website",
    status: "2026",
  },
];
