// Edit this file to update the whole site.

export const profile = {
  name: "Mohit Rana",
  role: "Software Engineer",
  location: "Dehradun, India",
  tagline:
    "Backend engineer who builds scalable APIs, analytics pipelines and AI-integrated products.",
  intro: [
    "I work across the stack with Python, Go, TypeScript and SQL, and care most about systems that stay simple as they grow. At GobbleCube I cut two modules' code by 50% with a shared abstraction; at FOSSEE, IIT Bombay I rebuilt the Yaksh assessment platform's frontend as a React SPA.",
    "Outside of work I self-host and tinker with Linux(btw i use arch).",
  ],
  openTo: "Full-time roles, freelance and collaborations.",
  email: "mohitr8998@gmail.com",
  socials: [
    { label: "GitHub", href: "https://github.com/mohitranag18" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/mohitrana18" },
    { label: "Email", href: "mailto:mohitr8998@gmail.com" },
  ],
};

export const experience = [
  {
    company: "FOSSEE, IIT Bombay",
    role: "Python Developer",
    period: "Oct 2025 – Mar 2026",
    points: [
      "Redesigned the Yaksh online assessment platform in Figma, then built a production React SPA (React 19, Vite, Zustand, Tailwind) to replace the legacy Django templates.",
      "Added a REST layer with Django REST Framework to decouple the frontend from the evaluation engine.",
      "Built JWT-secured Axios interceptors, a live quiz monitor panel, and a three-phase data adapter to resolve legacy MCQ schema mismatches.",
    ],
  },
  {
    company: "GobbleCube",
    role: "Software Engineering Intern",
    period: "Dec 2025 – Feb 2026",
    points: [
      "Merged 60+ PRs across 4 projects spanning React/TypeScript, Python/FastAPI and CubeJS.",
      "Built reusable widgets and a performance marketing overview dashboard.",
      "Engineered a bulk-edit conflict resolution flow that checks campaign actions against rulesets and lets users exclude or override conflicts before execution.",
      "Reduced the QCOM modules (FKMinutes, BBNow) codebase by 50% by extracting shared logic into a reusable module.",
    ],
  },
  {
    company: "ZeroCode",
    role: "Full-Stack Developer Intern",
    period: "Jun 2025 – Jul 2025",
    points: [
      "Built React/TypeScript interfaces for a no-code platform, set up authentication and integrated APIs while working directly with the founders.",
    ],
  },
  {
    company: "FOSSEE, IIT Bombay",
    role: "Web Development Intern",
    period: "May 2025 – Jul 2025",
    points: [
      "Built the “Struts in Trusses” module for the Osdag structural steel design app from scratch with Django, DRF, React and Context API.",
      "Restructured the module's codebase into a cleaner, more maintainable architecture.",
    ],
  },
];

// Replace the links with your real repo / live URLs.
export const projects = [
  {
    title: "Drishti",
    description:
      "Mental wellness platform for Indian youth with mood tracking, an analytics dashboard, and weekly Gemini-written wellness summaries by email.",
    stack: ["Next.js", "Prisma", "PostgreSQL", "Clerk", "Gemini API"],
    links: [{ label: "Repo", href: "https://github.com/Mohitranag18/drishti-app" }],
  },
  {
    title: "PPT.fy",
    description:
      "Turns a text prompt into a structured slide deck, with Mermaid diagrams and Manim animations, themes and user accounts.",
    stack: ["React", "Django REST", "Manim", "Tailwind CSS"],
    links: [{ label: "Repo", href: "https://github.com/mohitranag18/ppt.fy" }],
  },
  {
    title: "Graphia",
    description:
      "Social platform with posts, comments, profiles, search and real-time private and group messaging with file sharing. Redis caching keeps it fast under load.",
    stack: ["Django", "React", "Redis", "WebSocket"],
    links: [{ label: "Repo", href: "https://github.com/mohitranag18/graphia" }],
  },
  {
    title: "ReCraft",
    description:
      "ReCraft is a decentralized platform connecting institutions (schools, colleges, offices) with NGOs and artisans to transform discarded materials into beautiful, sustainable home décor products.",
    stack: ["Blockchain", "web3"],
    links: [{ label: "Repo", href: "https://github.com/Mohitranag18/ReCraft" }],
  },
];

export const skills = [
  { group: "Languages", items: "Python, Go, Java, JavaScript, TypeScript, C/C++, Bash, SQL" },
  { group: "Frameworks", items: "FastAPI, Django, DRF, React, Next.js, net/http" },
  { group: "Data", items: "PostgreSQL, SQLite, MongoDB, Redis, Supabase, Cube.js, Alembic" },
  { group: "Infra", items: "Docker, Kubernetes, AWS EC2 / ECR, CI/CD, Linux" },
  { group: "AI", items: "Generative AI, Prompt Engineering, NumPy, Pandas" },
];

export const openSource = [
  "Ranked top 50 of 3,900+ contributors in GirlScript Summer of Code 2024 (Extended).",
  "Participated in 15+ hackathons including EthGlobal India, Google AI Exchange, etc.",
];

export const education = {
  school: "Graphic Era Hill University, Dehradun",
  degree: "BSc in Information Technology",
  period: "2023 – 2026",
};
