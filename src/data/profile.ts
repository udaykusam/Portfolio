// Single source of truth for all portfolio content.
// Edit this file to update the site; components read from here.

export type Project = {
  slug: string;
  title: string;
  kicker: string;
  summary: string;
  problem: string;
  highlights: string[];
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
};

export type SkillGroup = { name: string; skills: string[] };

export type Education = {
  degree: string;
  school: string;
  start: string;
  end: string;
};

export type CertGroup = { issuer: string; certs: string[] };

export const profile = {
  name: "Uday Tej Reddy Kusam",
  shortName: "Uday",
  role: "Software Engineer",
  location: "Placentia, CA",
  email: "udayreddy2003@gmail.com",
  githubUrl: "https://github.com/udaykusam",
  linkedinUrl: "https://www.linkedin.com/in/udaytejreddykusam",
  tagline:
    "Full-stack Software Engineer building fast, reliable web applications with React, Next.js, TypeScript, Node.js and Python, deployed on AWS and Google Cloud.",
  about: [
    "I'm a Software Engineer with an M.S. in Computer Science from California State University, Fullerton (May 2026), based in Orange County, California. I build full-stack web applications end to end, from React and Next.js frontends through Node.js and Python backends to SQL and NoSQL databases running on AWS and Google Cloud.",
    "I'm strong in data structures, algorithms, object-oriented design and API design. I like turning messy problems into clean, tested and well-documented systems, and I use AI tools, and build with them, to ship faster. Recent work includes an LLM-powered travel planner and a transformer-based NER system.",
  ],
  facts: [
    { label: "Location", value: "Placentia, CA · open to relocation" },
    { label: "Focus", value: "Full-stack · Backend · AI-powered apps" },
    { label: "Education", value: "M.S. Computer Science, CSUF" },
    { label: "Availability", value: "Can start immediately" },
  ],
};

export const skillGroups: SkillGroup[] = [
  { name: "Languages", skills: ["Python", "JavaScript", "TypeScript", "Java", "SQL"] },
  { name: "Frontend", skills: ["React.js", "Next.js", "HTML5", "CSS3", "TailwindCSS"] },
  { name: "Backend", skills: ["Node.js", "Express.js", "RESTful APIs", "JWT Authentication"] },
  { name: "Databases", skills: ["MySQL", "MongoDB", "Firestore", "Database Design"] },
  { name: "Cloud & DevOps", skills: ["AWS", "Google Cloud", "MongoDB Atlas", "Vercel", "CI/CD"] },
  {
    name: "AI / ML & Tools",
    skills: ["Gemini API", "SpaCy", "Transformers", "PyTest", "Postman", "Git", "JIRA", "Streamlit"],
  },
];

export const projects: Project[] = [
  {
    slug: "ai-travel-planner",
    title: "AI Travel Planner",
    kicker: "Full-stack · Generative AI",
    summary:
      "A full-stack AI travel planning app that generates day-by-day itineraries in under 10 seconds with Google Gemini, then lets users refine them by chatting with it.",
    problem:
      "Planning a trip means juggling flights, maps and dozens of tabs. I wanted one app that drafts a full itinerary instantly, shows it on a map and lets you reshape it by just asking. The hard part was getting reliable, structured output from an LLM.",
    highlights: [
      "Built a full-stack app with Next.js 14, TypeScript and Firebase that generates complete day-by-day itineraries in under 10 seconds using the Google Gemini API.",
      "Designed a structured JSON prompting system with a custom parser that reliably extracts nested data from LLM responses, eliminating malformed outputs.",
      "Built a conversational AI chatbot that updates itineraries on the fly and persists changes to Firestore in real time.",
      "Visualized routes with the Google Maps JavaScript API using geocoded markers and polylines.",
      "Integrated the Amadeus Flight Search API securely on the server for live airfare estimates.",
      "Deployed on Vercel with CI/CD from GitHub for automated builds and production releases.",
    ],
    tech: ["Next.js 14", "TypeScript", "Firebase", "Firestore", "Gemini API", "Google Maps API", "Amadeus API", "Vercel"],
  },
  {
    slug: "food-blog",
    title: "Food Blog & Recipe Platform",
    kicker: "Full-stack · MERN",
    summary:
      "A recipe management platform with authenticated user dashboards, full CRUD for recipes, and fast search and filtering for finding them.",
    problem:
      "Home cooks need a simple place to save, organize and find their recipes. I built a secure, multi-user platform with personal dashboards and fast search across ingredients and categories.",
    highlights: [
      "Built a full-stack recipe platform with React (Vite, TailwindCSS) and Node.js backed by MongoDB.",
      "Implemented JWT-based authentication with protected routes and personalized dashboards.",
      "Designed a CRUD system for recipes with ingredients, categories and cooking details.",
      "Built dynamic search and filtering to make recipes easy to discover.",
      "Created a responsive UI from reusable components (navbar, modals, forms) that works across devices.",
      "Used MongoDB Atlas for scalable cloud data, writing tested, documented and performance-minded code.",
    ],
    tech: ["React", "Vite", "TailwindCSS", "Node.js", "Express", "MongoDB Atlas", "JWT"],
  },
  {
    slug: "named-entity-recognition",
    title: "Named Entity Recognition System",
    kicker: "Machine Learning · NLP",
    summary:
      "An NER system that uses SpaCy and Transformer-based models to classify people, organizations and locations in text, deployed as an interactive web app.",
    problem:
      "Pulling structured information (who, what organization, where) out of unstructured text is a core NLP task. I built and deployed a model pipeline that does it accurately, along with the data tooling and tests to keep it reliable.",
    highlights: [
      "Built an NER system using SpaCy and Transformer-based models to classify persons, organizations and locations.",
      "Cleaned and transformed large-scale datasets to improve model performance.",
      "Used a MySQL database to store test data, log user interactions and track performance metrics.",
      "Deployed the model on Streamlit Cloud with version control on GitHub.",
      "Ran unit and API tests with PyTest and Postman to keep the system reliable.",
      "Worked in an Agile, cross-functional team with code reviews and documented development practices.",
    ],
    tech: ["Python", "SpaCy", "Transformers", "MySQL", "Streamlit", "PyTest", "Postman"],
  },
];

export const education: Education[] = [
  {
    degree: "Master of Science, Computer Science",
    school: "California State University, Fullerton",
    start: "Aug 2024",
    end: "May 2026",
  },
  {
    degree: "Bachelor of Technology, Computer Science & Engineering",
    school: "CVR College of Engineering",
    start: "Dec 2020",
    end: "Apr 2024",
  },
];

export const certGroups: CertGroup[] = [
  {
    issuer: "Google Cloud",
    certs: [
      "Cloud Computing Foundations: Cloud Computing Fundamentals",
      "Cloud Computing Foundations: Networking & Security in Google Cloud",
      "Cloud Computing Foundations: Data, ML, and AI in Google Cloud",
      "Implementing Cloud Load Balancing for Compute Engine",
      "Prepare Data for ML APIs on Google Cloud",
    ],
  },
  {
    issuer: "AWS Serverless",
    certs: [
      "Deploying Serverless Applications",
      "Scaling Serverless Applications",
      "Security and Observability for Serverless Applications",
      "API Gateway for Serverless Applications",
    ],
  },
];

export const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#skills", label: "Skills" },
  { href: "/#projects", label: "Projects" },
  { href: "/#education", label: "Education" },
  { href: "/#contact", label: "Contact" },
];

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");
