import { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { MailIcon } from "lucide-react";

export default function Contact() {
  const [state, handleSubmit] = useForm("xwvgpzoa");
  const [time, setTime] = useState(new Date());
  const torontoTime = time.toLocaleTimeString("en-US", {
    timeZone: "America/Toronto",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  useEffect(() => {
    const exactTime = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(exactTime);
  }, []);

  if (state.succeeded) {
    return <p>Thanks for reaching out!</p>;
  }

  return (
    <section className="px-6 py-24">
      <h1 className="text-6xl font-bold text-[#2e2a3d] mb-20">
        Let's Work Together.
      </h1>
      <div className="grid grid-cols-[1fr_2fr] gap-16 mb-20 mt-[10vh]">
        <div>
          <p className="text-xs tracking-widest text-[#8b5cf6] mb-4">
            ( CONTACT ME THROUGH )
          </p>
          <div className="flex flex-col gap-3 items-start">
            <a
              href="https://github.com/Christian-Silviu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/icons/github_light.svg"
                alt="GitHub"
                className="w-8 h-8"
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
                className="w-8 h-8"
              />
            </a>
            <a href="mailto:christiancaunei.dev@gmail.com">
              <MailIcon size={32} color="#8b5cf6" />
            </a>
          </div>
        </div>
        <div>
          <p className="text-xs tracking-widest text-[#8b5cf6]">
            ( OR VIA THIS CONTACT FORM )
          </p>
          <div className="max-w-xl pt-3">
            {/* Remember this div */}
            <form onSubmit={handleSubmit}>
              <div className="mb-8">
                <label
                  htmlFor="name"
                  className="text-xs tracking-widest text-[#8b5cf6]"
                >
                  「NAME」
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  className="w-full bg-transparent border-b border-[#2e2a3d]/30 py-2 text-[#2e2a3d] focus:outline-none focus:border-[#8b5cf6] transition-colors"
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />
              </div>
              <div className="mb-8">
                <label
                  htmlFor="email"
                  className="text-xs tracking-widest text-[#8b5cf6]"
                >
                  「EMAIL ADDRESS」
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  className="w-full bg-transparent border-b border-[#2e2a3d]/30 py-2 text-[#2e2a3d] focus:outline-none focus:border-[#8b5cf6] transition-colors"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
              <div className="mb-8">
                <label
                  htmlFor="message"
                  className="text-xs tracking-widest text-[#8b5cf6]"
                >
                  「MESSAGE」
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={1}
                  className="w-full bg-transparent border-b border-[#2e2a3d]/30 py-2 text-[#2e2a3d] resize-none focus:outline-none focus:border-[#8b5cf6] transition-colors"
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>
              <div className="max-w-28 bg-transparent items-center justify-center flex border-2 border-[#8b5cf6] shadow-lg hover:bg-[#8b5cf6] text-[#8b5cf6] hover:text-white duration-300 cursor-pointer active:scale-[0.98]">
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="px-4 py-1.5 w-full disabled:opacity-50"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="fixed bottom-8 left-8 bg-[#ede9fb] text-[#2e2a3d] px-4 py-2 rounded-full shadow-sm text-sm font-medium">
        Toronto - {torontoTime}
      </div>
    </section>
  );
}
