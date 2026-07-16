import { useForm, ValidationError } from "@formspree/react";
import { MailIcon } from "lucide-react";

export default function Contact() {
  const [state, handleSubmit] = useForm("xwvgpzoa");

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
          <div className="flex flex-col gap-3">
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
        </div>
      </div>
    </section>
  );
}
