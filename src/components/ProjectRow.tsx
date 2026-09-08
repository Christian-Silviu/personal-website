import { ArrowUpRight, Code2 } from "lucide-react";
import type { Project } from "../data/projects";

interface ProjectRowProps {
  project: Project;
  index: number;
}

function ProjectRow({ project, index }: ProjectRowProps) {
  const imageRight = index % 2 === 1;

  return (
    <article className="grid grid-cols-1 gap-8 py-16 md:grid-cols-2 md:items-center md:gap-14">
      <div
        className={`overflow-hidden rounded-2xl border border-[#e6e1f5] bg-[#f9f9fb] ${
          imageRight ? "md:order-2" : ""
        }`}
      >
        {project.image ? (
          <img
            src={project.image}
            alt={project.imageAlt ?? `Screenshot of ${project.title}`}
            loading="lazy"
            className="aspect-[16/10] w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
          />
        ) : (
          <div className="flex aspect-[16/10] w-full items-center justify-center bg-[#ede9fb]">
            <Code2 size={40} color="#8b5cf6" strokeWidth={1.5} />
          </div>
        )}
      </div>

      <div className={imageRight ? "md:order-1" : ""}>
        <p className="text-xs tracking-widest text-[#8b5cf6]">
          ( {String(index + 1).padStart(2, "0")}
          {project.status ? ` — ${project.status.toUpperCase()}` : ""} )
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-[#2e2a3d]">
          {project.title}
        </h2>
        <p className="mt-1 text-base text-[#8b5cf6]">{project.tagline}</p>
        <p className="mt-4 text-base leading-relaxed text-[#2e2a3d]">
          {project.description}
        </p>

        <ul className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-full bg-[#ede9fb] px-3 py-1 text-sm font-medium text-[#2e2a3d]"
            >
              {tech}
            </li>
          ))}
        </ul>

        {(project.repo || project.live) && (
          <div className="mt-8 flex flex-wrap gap-4">
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 border-2 border-[#8b5cf6] px-4 py-1.5 text-[#8b5cf6] shadow-lg transition-colors duration-300 hover:bg-[#8b5cf6] hover:text-white active:scale-[0.98]"
              >
                Code
                <ArrowUpRight size={18} />
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 border-2 border-transparent px-4 py-1.5 text-[#2e2a3d] transition-colors duration-300 hover:border-[#8b5cf6] hover:text-[#8b5cf6] active:scale-[0.98]"
              >
                Live
                <ArrowUpRight size={18} />
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

export default ProjectRow;
