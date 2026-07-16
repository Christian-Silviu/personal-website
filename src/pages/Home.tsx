import { useState, useEffect } from "react";
import { aboutInfo } from "../data/about";
import { Cake, MapPin, School, BookOpen } from "lucide-react";

const languageIcons: Record<string, string> = {
  Python: "/icons/python.svg",
  "JavaScript/TypeScript": "/icons/typescript.svg",
  "C#": "/icons/csharp.svg",
};

const languageColours: Record<string, string> = {
  Python: "#eab308",
  "JavaScript/TypeScript": "#3b82f6",
  "C#": "#8b5cf6",
};

const infoIcons = [
  <Cake size={20} color="#8b5cf6" />,
  <MapPin size={20} color="#8b5cf6" />,
  <School size={20} color="#8b5cf6" />,
  <BookOpen size={20} color="#8b5cf6" />,
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [time, setTime] = useState(new Date());
  const torontoTime = time.toLocaleTimeString("en-US", {
    timeZone: "America/Toronto",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const exactTime = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(exactTime);
  }, []);

  return (
    <div>
      <div className="flex justify-center items-center min-h-[85vh] px-6 relative">
        <div className="flex flex-row items-center gap-84">
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
              alt="Me smiling at my college graduation"
              className="w-[clamp(175px,22.5vw,400px)] aspect-square rounded-full object-cover"
            />
            <p>(Me)</p>
          </div>
        </div>

        <div
          className={`fixed bottom-8 left-1/2 -translate-x-1/2 animate-bounce transition-opacity duration-300 ${
            scrolled ? "opacity-0" : "opacity-100"
          }`}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#8b5cf6"
            strokeWidth="2"
          >
            <path
              d="M6 9l6 6 6-6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      <section className="px-6 py-16 pb-[23vh] max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-[#2e2a3d] mb-4">
          Who am I?
        </h2>
        <p className="text-base text-[#2e2a3d] leading-relaxed">
          {aboutInfo.bio}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12 text-left">
          <div className="text-center md:pr-4">
            <h3 className="text-lg font-semibold text-[#8b5cf6] mb-3">
              Languages
            </h3>
            {aboutInfo.coding_languages.map((lang) => (
              <p
                key={lang}
                className="mb-2 flex items-center justify-center gap-2"
              >
                {languageIcons[lang] && (
                  <img
                    src={languageIcons[lang]}
                    alt={lang}
                    className="w-5 h-5"
                  />
                )}
                <span style={{ color: languageColours[lang] }}>{lang}</span>
              </p>
            ))}
          </div>
          <div className="text-center md:pl-4">
            <h3 className="text-lg font-semibold text-[#8b5cf6] mb-3">About</h3>
            {aboutInfo.info.map((about, i) => (
              <p
                key={about}
                className="mb-2 flex items-start justify-center gap-2"
              >
                {infoIcons[i]}
                {about}
              </p>
            ))}
          </div>
        </div>
        <div className="mt-8">
          <p className="text-base text-[#2e2a3d] leading-relaxed">
            {aboutInfo.sec_bio}
          </p>
        </div>
      </section>
      <div className="fixed bottom-8 left-8 bg-[#ede9fb] text-[#2e2a3d] px-4 py-2 rounded-full shadow-sm text-sm font-medium">
        Toronto - {torontoTime}
      </div>
    </div>
  );
}
