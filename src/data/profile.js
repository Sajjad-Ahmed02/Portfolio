/**
 * PROFILE — all personal content lives here.
 */
import { asset } from "../lib/asset";

export const profile = {
  name: "Sajjad Ahmed",
  role: "Software Engineer",
  email: "sajjadahmed102005@gmail.com",

  location: "Karachi, Pakistan",
  timezone: "Asia/Karachi",
  tzShort: "PKT",

  intro:
    "I'm a software engineer based in Karachi. I build full-stack products end to end — Flask and Node backends, normalized PostgreSQL schemas, React front ends — and lately, RAG pipelines that put LLMs to work on real data.",

  availability: "Open to software engineering roles",
  currently: "BS CS · FAST University",
  based: "Karachi, PKT (UTC+5)",

  portrait: {
    src: asset("portrait.svg"),
    alt: "Portrait of Sajjad Ahmed",
    caption: "Karachi · 2026",
  },

  about: [
    "I'm a computer science student at FAST University in Karachi. Most of what I know comes from building things that had to work: a crowdfunding platform with three roles and an eight-table schema, an NGO platform serving 500+ users, and an AI code reviewer that reads repositories.",
    "I care about the parts of software that are easy to skip — authentication that holds up, database integrity, and services that tell you when something breaks. My internship building a monitoring and alerting platform taught me more about production than any tutorial could.",
  ],

  aside: [
    { label: "Based in", value: "Karachi, Pakistan — PKT (UTC+5)" },
    { label: "Focus", value: "Full-stack development, AI/LLM integration, backend systems" },
    { label: "Education", value: "BS Computer Science, FAST University — CGPA 3.77" },
  ],

  links: [
    {
      label: "GitHub",
      handle: "Sajjad-Ahmed02",
      url: "https://github.com/Sajjad-Ahmed02",
      icon: "github",
    },
    {
      label: "LinkedIn",
      handle: "sajjad-ahmed-7904952b0",
      url: "https://www.linkedin.com/in/sajjad-ahmed-7904952b0",
      icon: "linkedin",
    },
  ],
};
