import { aboutInfo } from "../data/about";

export default function Home() {
  return (
    <div>
      <div className="flex justify-center items-center min-h-screen px-6">
        <div className="flex flex-row items-center gap-84 -mt-36">
          <div className="flex flex-col items-center text-center">
            <h1
              className="font-semibold text-6xl text-[#2e2a3d] overflow-hidden whitespace-nowrap border-r-[3px] border-[#8b5cf6] w-0"
              style={{
                animation:
                  "typing 1.5s steps(20, end) forwards, blink 0.75s step-end infinite",
              }}
            >
              {aboutInfo.name}
            </h1>
            <p className="text-base text-[#8b5cf6]">{aboutInfo.title}</p>
            <div className="flex gap-4 mt-4">
              <a
                href="https://github.com/Christian-Silviu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/icons/github_light.svg"
                  alt="GitHub"
                  className="w-6 h-6"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/christian-caunei-1878a1254/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/icons/linkedin.svg"
                  alt="LinkedIn"
                  className="w-6 h-6"
                />
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <img
              src="/images/zoomed_DSC_0597.JPG"
              alt="Raiden Cross smiling at his college graduation"
              className="w-[clamp(175px,22.5vw,400px)] aspect-square rounded-full object-cover"
            />
            <p>(Me)</p>
          </div>
        </div>
      </div>

      <section className="px-6 py-16 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-[#2e2a3d] mb-4">
          Who am I?
        </h2>
        <p className="text-base text-[#2e2a3d] leading-relaxed">About me.</p>
      </section>
    </div>
  );
}
