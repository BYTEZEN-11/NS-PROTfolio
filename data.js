export const profile = {
  wordmark: "ns.",
  name: "NITESH Singh",
  initials: "nitesh_singh",
  location: "INDIA",
  email: "shingh979875@gmail.com",
  phone: "",
  caption: "DEVELOPER · OPEN SOURCE — '26",
  madeInIndia: "MADE IN INDIA",
  bio: "Full-stack developer and open-source contributor focused on building reliable, secure, and well-designed web applications. Comfortable across the stack — from REST APIs and databases to responsive React frontends — with a growing interest in AI/ML integrations, cloud-native tooling, and developer experience.",
  education: "B.Tech CSE — [University / College TBD]",
  batch: "20XX – 20XX · [Year TBD]",
  resumeNote: "Resume link not yet supplied",
  heroWords: [
    { text: "ship" },
    { text: "&" },
    { text: "code", accent: "amber" }
  ],
};
export const roles = [
  "Full-Stack Developer",
  "MERN Stack Developer",
  "Open Source Contributor",
  "Mobile App Developer (Flutter / Kotlin)",
  "AI / ML Enthusiast",
  "GenAI Builder",
  "Bug Bounty / Security Curious"
];
export const navLinks = [
  { label: "Home",         href: "#home" },
  { label: "About",        href: "#about" },
  { label: "Demo",         href: "#demo" },
  { label: "Open Source",  href: "#open-source" },
  { label: "Projects",     href: "#projects" },
  { label: "Skills",       href: "#skills" },
  { label: "Contact",      href: "#contact" }
];
export const socials = [
  { label: "gh", aria: "GitHub — NETIZEN-11",            href: "https://github.com/NETIZEN-11" },
  { label: "in", aria: "LinkedIn — nitesh-singh",        href: "https://www.linkedin.com/in/nitesh-singh-52a167387/" },
  { label: "lc", aria: "LeetCode — unico_rni11",         href: "https://leetcode.com/u/unico_rni11/" },
  { label: "@",  aria: "Email",                          href: "mailto:shingh979875@gmail.com" }
];
export const stats = [
  { value: "10+", label: "projects",      sub: "shipped to date" },
  { value: "5+",  label: "oss prs",       sub: "merged upstream" },
  { value: "3",   label: "stacks",        sub: "web · mobile · ai" }
];
export const aboutMarquee = [
  "Python", "Go", "Rust", "Kubernetes", "Docker", "AWS",
  "Prometheus", "Grafana", "FastAPI", "React", "Arch Linux",
  "Bash", "Git", "MCP"
];
export const aboutHeadline = [
  { text: "i'm" },
  { text: "a" },
  { text: "full-stack" },
  { text: "developer" },
  { text: "who" },
  { text: "loves", accent: "amber" },
  { text: "to" },
  { text: "design," },
  { text: "ship," },
  { text: "and" },
  { text: "open", accent: "amber" },
  { text: "source" },
  { text: "—" },
  { text: "working" },
  { text: "across" },
  { text: "the" },
  { text: "mern" },
  { text: "stack," },
  { text: "mobile" },
  { text: "apps," },
  { text: "and" },
  { text: "build", accent: "coral" },
  { text: "things" },
  { text: "with" },
  { text: "ai." }
];
export const demoScript = [
  { p: "nitesh@arch", c: "~/work", cmd: "git clone https://github.com/NETIZEN-11/project && cd project" },
  { out: "[*] cloning repository ..." },
  { out: "[+] deps installed · 247 packages, 0 vulnerabilities" },
  { out: "[!] lint clean · type-check passed" },
  { p: "nitesh@arch", c: "~/work", cmd: "npm run dev -- --host" },
  { out: "[✓] ready on http://localhost:3000 · built in 1.4s" }
];
export const ossContribs = [
  {
    org: "your-org-here",
    project: "Open Source Project 1",
    context: "OSS",
    mergedLabel: "X+ merged PRs",
    prs: [
      { id: "#TBD-1", desc: "Add a short description of your contribution to this open source project.", category: "Bug Fix" },
      { id: "#TBD-2", desc: "Add a short description of your contribution to this open source project.", category: "Feature" },
      { id: "#TBD-3", desc: "Add a short description of your contribution to this open source project.", category: "Docs" }
    ]
  },
  {
    org: "your-org-here-2",
    project: "Open Source Project 2",
    context: "OSS",
    mergedLabel: "X+ merged PRs",
    prs: [
      { id: "#TBD-4", desc: "Add a short description of your contribution to this open source project.", category: "Bug Fix" },
      { id: "#TBD-5", desc: "Add a short description of your contribution to this open source project.", category: "Feature" }
    ]
  },
  {
    org: "your-org-here-3",
    project: "Open Source Project 3",
    context: "OSS",
    mergedLabel: "X+ merged PRs",
    prs: [
      { id: "#TBD-6", desc: "Add a short description of your contribution to this open source project.", category: "Feature" },
      { id: "#TBD-7", desc: "Add a short description of your contribution to this open source project.", category: "Docs" },
      { id: "#TBD-8", desc: "Add a short description of your contribution to this open source project.", category: "Bug Fix" }
    ]
  }
];
export const prCategoryColors = {
  Reliability:   "var(--coral)",
  Performance:   "var(--amber)",
  Security:      "var(--amber-deep)",
  "Bug Fix":     "var(--muted-2)",
  Quality:       "var(--muted-2)",
  "Input Safety":"var(--coral)",
  Networking:    "var(--coral)"
};
export const projectCategories = [
  { key: "mern",   label: "MERN Stack",  full: "MERN Stack Projects",         blurb: "MongoDB · Express · React · Node — full JS from DB to UI." },
  { key: "full",   label: "Full Stack",  full: "Full Stack Projects",         blurb: "Polyglot apps with a real backend, real auth, real deploys." },
  { key: "mobile", label: "Mobile Apps", full: "Mobile Application Projects", blurb: "Native-feel mobile apps, Android & cross-platform." },
  { key: "ai",     label: "AI / ML",     full: "AI / Machine Learning Projects", blurb: "Classical ML, LLM systems, and data pipelines that ship." },
  { key: "genai",  label: "GenAI",       full: "Generative AI Projects",      blurb: "LLM apps, RAG, agents, and prompt-engineered workflows." }
];
export const projects = [
  {
    id: "cloudvault",
    title: "CloudVault",
    category: "full",
    type: "Full-Stack Web App · OJT",
    year: 2025,
    month: 6,
    status: "in-progress",
    featured: true,
    description: "Secure file-storage platform with JWT auth, role-based access, AWS S3 integration, and a responsive React frontend with dark mode.",
    stack: ["FastAPI", "MongoDB Atlas", "React.js", "Tailwind CSS", "JWT", "AWS S3"],
    deployment: "Render (backend) + Vercel (frontend)",
    thumb: "https://i.ibb.co/Zpw42B0y/PHOTO-2.jpg",
    repo: null,
    demo: null,
    caseStudy: null
  },
  {
    id: "github-stats-api",
    title: "GitHub Stats API",
    category: "full",
    type: "Personal · API",
    year: 2024,
    month: 9,
    status: "completed",
    featured: false,
    description: "REST API that fetches and serves GitHub user statistics — repos, contributions, activity — in real time.",
    stack: ["Python", "GitHub API", "REST", "FastAPI"],
    deployment: "Local + Docker",
    thumb: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    repo: null,
    demo: null,
    caseStudy: null
  },
  {
    id: "dev-dash",
    title: "DevDash",
    category: "full",
    type: "Personal Dashboard",
    year: 2025,
    month: 3,
    status: "completed",
    featured: true,
    description: "A self-hosted developer dashboard — pinned repos, CI status, and a tiny kanban — wired together with webhooks.",
    stack: ["Next.js", "Postgres", "GitHub API", "Tailwind CSS"],
    deployment: "Vercel + Neon",
    thumb: "https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    repo: null, demo: null, caseStudy: null
  },
  {
    id: "mern-chat",
    title: "CipherChat",
    category: "mern",
    type: "Real-time Messaging · MERN",
    year: 2025,
    month: 1,
    status: "completed",
    featured: true,
    description: "End-to-end encrypted chat app with rooms, presence indicators, and MongoDB-backed message history.",
    stack: ["MongoDB", "Express", "React", "Node", "Socket.IO", "JWT"],
    deployment: "Vercel + Render",
    thumb: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    repo: null, demo: null, caseStudy: null
  },
  {
    id: "mern-shop",
    title: "CartKit",
    category: "mern",
    type: "E-commerce · MERN",
    year: 2024,
    month: 8,
    status: "completed",
    featured: false,
    description: "Headless e-commerce storefront with cart, Stripe checkout, and an admin dashboard for inventory.",
    stack: ["MongoDB", "Express", "React", "Node", "Stripe", "Redux"],
    deployment: "Vercel + Atlas",
    thumb: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    repo: null, demo: null, caseStudy: null
  },
  {
    id: "arch-fit",
    title: "ArchFit",
    category: "mobile",
    type: "Android · Kotlin",
    year: 2024,
    month: 11,
    status: "in-progress",
    featured: true,
    description: "Workout tracker with offline-first storage, Health Connect integration, and minimal Material You UI.",
    stack: ["Kotlin", "Jetpack Compose", "Room", "Health Connect"],
    deployment: "Play Store (internal track)",
    thumb: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    repo: null, demo: null, caseStudy: null
  },
  {
    id: "scan-todo",
    title: "ScanTodo",
    category: "mobile",
    type: "Flutter",
    year: 2024,
    month: 4,
    status: "completed",
    featured: false,
    description: "Camera-first todo app — point at a handwritten list and OCR turns it into structured tasks.",
    stack: ["Flutter", "Dart", "ML Kit", "SQLite"],
    deployment: "Play Store",
    thumb: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    repo: null, demo: null, caseStudy: null
  },
  {
    id: "phish-net",
    title: "PhishNet",
    category: "ai",
    type: "ML · Security",
    year: 2025,
    month: 2,
    status: "completed",
    featured: true,
    description: "Phishing URL classifier trained on 200k+ samples. DistilBERT features + XGBoost head, served via FastAPI.",
    stack: ["Python", "scikit-learn", "XGBoost", "FastAPI", "Docker"],
    deployment: "Hugging Face Spaces",
    thumb: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    repo: null, demo: null, caseStudy: null
  },
  {
    id: "log-anom",
    title: "LogAnom",
    category: "ai",
    type: "ML · Observability",
    year: 2024,
    month: 12,
    status: "completed",
    featured: false,
    description: "Unsupervised anomaly detection over Kubernetes audit logs — Isolation Forest + rolling-window features.",
    stack: ["Python", "NumPy", "Pandas", "scikit-learn", "Grafana"],
    deployment: "k8s sidecar",
    thumb: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    repo: null, demo: null, caseStudy: null
  },
  {
    id: "rag-notes",
    title: "NotesRAG",
    category: "genai",
    type: "RAG · LLM",
    year: 2025,
    month: 5,
    status: "completed",
    featured: true,
    description: "Drop your study notes, ask questions, get cited answers. Local embeddings + Ollama, no data leaves the box.",
    stack: ["FastAPI", "React", "sentence-transformers", "Ollama", "LanceDB"],
    deployment: "Self-host · Docker compose",
    thumb: "https://images.unsplash.com/photo-1677442136019-21780ecad995?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    repo: null, demo: null, caseStudy: null
  },
  {
    id: "mcp-cf",
    title: "MCP-CF",
    category: "genai",
    type: "MCP Server · Agents",
    year: 2025,
    month: 4,
    status: "in-progress",
    featured: false,
    description: "Model-Context-Protocol server that lets Claude query your Cloudflare account: zones, DNS, Workers, KV.",
    stack: ["Node", "TypeScript", "MCP", "Cloudflare API"],
    deployment: "npm",
    thumb: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    repo: null, demo: null, caseStudy: null
  }
];
export const projectSorts = [
  { key: "latest",   label: "Latest" },
  { key: "oldest",   label: "Oldest" },
  { key: "featured", label: "Featured" },
  { key: "alpha",    label: "A → Z" }
];
export const skillGroups = [
  { group: "Languages",           items: ["Python", "Go", "Rust", "C", "C++", "Java", "Bash", "SQL", "Assembly"] },
  { group: "Cloud Native & DevOps", items: ["Kubernetes", "Docker", "AWS", "Prometheus", "Grafana", "GitHub Actions", "CI/CD", "Vercel", "Render", "minikube", "YAML"] },
  { group: "Security",            items: ["Penetration Testing", "Vulnerability Analysis", "TOCTOU Hardening", "Script Injection Prevention", "GitHub Actions Hardening", "PromQL Injection", "Secure tempfile handling", "HackerOne", "OverTheWire", "Wireless Security"] },
  { group: "Web & Backend",       items: ["FastAPI", "React.js", "Tailwind CSS", "MongoDB Atlas", "AWS S3", "JWT Auth", "REST APIs", "Render", "Vercel"] },
