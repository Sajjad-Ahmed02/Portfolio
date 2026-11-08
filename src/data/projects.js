/**
 * PROJECTS — selected work, newest first.
 * `image` points to a file in public/work/. Swap the placeholders for real
 * screenshots (1200×900 works best) and update `alt` accordingly.
 * `links` is an ordered list of { label, url }.
 */
export const projects = [
  {
    id: "crowdfunding",
    name: "Crowdfunding Platform",
    year: "2026",
    description:
      "A full-stack crowdfunding platform with creator, donor and admin roles. Flask REST APIs sit on a normalized eight-table PostgreSQL schema, and a RAG pipeline handles campaign discovery and contextual Q&A over live campaign data.",
    outcome: "JWT auth and role-based access control across three roles; containerized and deployed on Railway.",
    stack: ["Flask", "PostgreSQL", "React", "Docker", "RAG"],
    links: [{ label: "GitHub", url: "https://github.com/Sajjad-Ahmed02" }],
    image: "/work/crowdfunding.svg",
    alt: "Line drawing of a segmented funding bar with a dashed goal marker",
  },
  {
    id: "social-tribe",
    name: "Social Tribe",
    year: "2025",
    description:
      "An NGO and membership platform — events, ticketing, applications, and five levels of admin. Flask-RESTX provides 25+ endpoints, Celery handles scheduled billing and OTP cleanup, and Redis-backed workers send email asynchronously.",
    outcome: "Live at socialtribe100.com, serving 500+ users with automated monthly billing cycles.",
    stack: ["Flask", "PostgreSQL", "Celery", "Redis", "Docker"],
    links: [
      { label: "Live site", url: "https://www.socialtribe100.com" },
      { label: "GitHub", url: "https://github.com/Sajjad-Ahmed02" },
    ],
    image: "/work/socialtribe.svg",
    alt: "Network of connected circles, one highlighted in vermilion",
  },
  {
    id: "ai-code-reviewer",
    name: "AI Code Reviewer",
    year: "2025",
    description:
      "A tool that fetches source from any public GitHub repository and routes it through a Gemini-powered inference pipeline for structured, actionable review comments — no language-specific configuration required.",
    outcome: "Cut manual review time by an estimated 70% on repositories with 10+ source files.",
    stack: ["Python", "Gemini API", "LLM"],
    links: [{ label: "GitHub", url: "https://github.com/Sajjad-Ahmed02" }],
    image: "/work/codereview.svg",
    alt: "Code panel with a highlighted line and an attached review note",
  },
];
