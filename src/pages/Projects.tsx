import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import ProjectRow from "../components/ProjectRow";
import { useTorontoClock } from "../hooks/useTorontoClock";

export default function Projects() {
  const torontoTime = useTorontoClock();

  return (
    <section className="mx-auto max-w-5xl px-6 py-24">
      <h1 className="text-4xl font-bold text-[#2e2a3d] sm:text-6xl">
        Things I've Built.
      </h1>
      <p className="mt-6 max-w-xl text-base leading-relaxed text-[#2e2a3d]/70">
        A mix of coursework, side projects, and things I made because I wanted
        them to exist. Most of the code is on GitHub.
      </p>

      <div className="mt-16 divide-y divide-[#e6e1f5]">
        {projects.map((project, i) => (
          <ProjectRow key={project.slug} project={project} index={i} />
        ))}
      </div>

      <div className="mt-16 border-t border-[#e6e1f5] pt-16 text-center">
        <p className="text-base text-[#2e2a3d]">
          More on{" "}
          <a
            href="https://github.com/Christian-Silviu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8b5cf6] underline underline-offset-4"
          >
            GitHub
          </a>
          , or{" "}
          <Link
            to="/contact"
            className="text-[#8b5cf6] underline underline-offset-4"
          >
            get in touch
          </Link>
          .
        </p>
      </div>

      <div className="fixed bottom-8 left-8 rounded-full bg-[#ede9fb] px-4 py-2 text-sm font-medium text-[#2e2a3d] shadow-sm">
        Toronto - {torontoTime}
      </div>
    </section>
  );
}
