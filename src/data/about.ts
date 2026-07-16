export interface AboutInfo {
  name: string;
  title: string;
  bio: string;
  coding_languages: string[];
  info: string[];
  sec_bio: string;
}

export const aboutInfo: AboutInfo = {
  name: "Christian Caunei",
  title: "Software Engineer",
  bio: "Recent Math & CS grad who loves building things. I have experience building full-stack web applications, developing REST APIs, and working across the full development lifecycle. Always looking forward to future opportunities and improving my skills.",
  coding_languages: ["Python", "JavaScript/TypeScript", "C#", "SQL", "Java"],
  info: [
    "22 Years Old",
    "Toronto, Canada",
    "University of Toronto",
    "HBSc | Mathematics & CS",
  ],
  sec_bio:
    "Outside of coding, you'll usually find me on a tennis court or watching a good movie. I might even add a Letterboxd-esque page with my rankings in the future. If you're looking for someone who enjoys both building things and learning constantly, let's talk.",
};
