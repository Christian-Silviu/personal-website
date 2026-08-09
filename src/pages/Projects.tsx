import { useTorontoClock } from "../hooks/useTorontoClock";

export default function Projects() {
  const torontoTime = useTorontoClock();

  return (
    <section className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-5xl font-bold text-[#2e2a3d] mb-4">Projects Page</h1>
      <p className="text-lg text-[#2e2a3d]/70">
        This page is a work in progress.
      </p>
      <div className="fixed bottom-8 left-8 bg-[#ede9fb] text-[#2e2a3d] px-4 py-2 rounded-full shadow-sm text-sm font-medium">
        Toronto - {torontoTime}
      </div>
    </section>
  );
}
