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
  resumeUrl: "https://drive.google.com/file/d/1JzBXAIM9DzFpTVdcSdIVM6zKGPOgcGwX/view?usp=sharing",
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
  { value: "18+", label: "projects",      sub: "shipped to date" },
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
  { key: "genai",  label: "GenAI",       full: "Generative AI Projects",      blurb: "LLM apps, RAG, agents, and prompt-engineered workflows." },
  { key: "cv",     label: "Computer Vision", full: "Computer Vision Projects", blurb: "Face, OCR, and image models — practical vision pipelines." },
  { key: "dsa",    label: "DSA / Algo",  full: "DSA & Algorithm Visualizers",  blurb: "Sorting, graphs, and classic CS — visualized, step by step." },
  { key: "web",    label: "Web Apps",    full: "Web Application Projects",     blurb: "Standalone web apps — productivity, utilities, and tools." }
];
export const projects = [
  {
    id: "ns-protfolio",
    title: "NS Portfolio",
    category: "web",
    type: "Portfolio Site · Design Reference",
    year: 2025,
    month: 7,
    status: "completed",
    featured: true,
    description: "Design analysis document for the 'ns.' (NITESH Singh) portfolio — paper/ink light theme reverse-engineered from a Figma Make reference, with full token and component breakdown.",
    stack: ["Figma Make", "React/Preact", "Tailwind v4", "Framer Motion"],
    deployment: "Static SPA · Figma Make",
    thumb: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    repo: "https://github.com/BYTEZEN-11/NS-PROTfolio",
    demo: null,
    caseStudy: null
  },
  {
    id: "healthcaresystem",
    title: "AI Healthcare System",
    category: "ai",
    type: "Clinical AI · EHR/CDSS",
    year: 2025,
    month: 8,
    status: "in-progress",
    featured: true,
    description: "Open-source HIPAA-compliant EHR & Clinical Decision Support platform — 5 XGBoost diagnostic classifiers with SHAP explainability, LangGraph multi-agent RAG chatbot, FHIR R4, and offline Ollama inference.",
    stack: ["Python", "FastAPI", "React 19", "XGBoost", "LangGraph", "Ollama", "FHIR R4", "Docker", "Kubernetes"],
    deployment: "Docker Compose · Kubernetes · AWS",
    thumb: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    repo: "https://github.com/BYTEZEN-11/HealthCareSystem",
    demo: null,
    caseStudy: null
  },
  {
    id: "farmgpt",
    title: "FarmGPT AI",
    category: "ai",
    type: "Multi-Agent GenAI · Agriculture",
    year: 2025,
    month: 7,
    status: "completed",
    featured: true,
    description: "AI-native farming co-pilot with multi-agent architecture — disease diagnosis from crop photos, weather advisories, market intelligence, fertilizer scheduling, and government scheme lookup.",
    stack: ["React 19", "TypeScript", "TanStack Start", "Supabase", "Computer Vision"],
    deployment: "Vercel · Supabase",
    thumb: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    repo: "https://github.com/BYTEZEN-11/FarmGpt",
    demo: null,
    caseStudy: null
  },
  {
    id: "ai-ml-visual",
    title: "AI Universe Platform",
    category: "ai",
    type: "Interactive ML Learning · Visualization",
    year: 2025,
    month: 8,
    status: "in-progress",
    featured: true,
    description: "Production-grade interactive learning ecosystem for ML/DL/AI — live parameter tuning, 2D/3D visualizations, LaTeX math rendering, code playgrounds, quizzes, and 3D gradient descent.",
    stack: ["Next.js 14", "FastAPI", "TypeScript", "Python 3.11", "Tailwind CSS"],
    deployment: "Vercel · Render",
    thumb: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    repo: "https://github.com/BYTEZEN-11/Ai-ml-visual",
    demo: null,
    caseStudy: null
  },
  {
    id: "algovisual",
    title: "AlgoVisual",
    category: "dsa",
    type: "Algorithm Visualizer · Learning Platform",
    year: 2025,
    month: 7,
    status: "completed",
    featured: true,
    description: "Visual CS learning platform — algorithms stepped through frame-by-frame with pointer animation, complexity badges, 18 DSA patterns, and an interview-prep planner.",
    stack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Prisma", "GSAP", "NextAuth"],
    deployment: "Vercel",
    thumb: "https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    repo: "https://github.com/BYTEZEN-11/Algovisual",
    demo: null,
    caseStudy: null
  },
  {
    id: "resumeai",
    title: "Resume AI Pro",
    category: "genai",
    type: "AI Resume Builder · Full-Stack",
    year: 2025,
    month: 7,
    status: "completed",
    featured: true,
    description: "AI-powered resume builder with ATS score optimization, real-time keyword matching, multi-template rendering, PDF export, and Stripe-powered subscription tiers.",
    stack: ["Next.js 15", "React 19", "TypeScript", "Prisma", "PostgreSQL", "OpenAI API", "Stripe"],
    deployment: "Vercel",
    thumb: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    repo: "https://github.com/BYTEZEN-11/ResumeAI",
    demo: null,
    caseStudy: null
  },
  {
    id: "spam-guard",
    title: "TruthGuard AI",
    category: "ai",
    type: "Deep Learning · Fake News Detection",
    year: 2025,
    month: 7,
    status: "completed",
    featured: true,
    description: "Enterprise-grade multi-modal misinformation detection platform — BERT/RoBERTa/DistilBERT transformer ensemble, claim extraction, clickbait scoring, URL credibility engine, and JWT-secured dashboard.",
    stack: ["React 18", "Express.js", "FastAPI", "PyTorch", "Transformers", "MongoDB", "Redis", "Docker"],
    deployment: "Docker Compose · Nginx",
    thumb: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    repo: "https://github.com/BYTEZEN-11/Spam-Guard",
    demo: null,
    caseStudy: null
  },
  {
    id: "gitpulse",
    title: "GitPulse",
    category: "full",
    type: "GitHub Analytics · Full-Stack",
    year: 2025,
    month: 7,
    status: "completed",
    featured: false,
    description: "Full-stack GitHub audience analytics platform — real-time follower tracking, interactive heatmaps, repository performance metrics, and a FastAPI backend with rate-limited REST API.",
    stack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Recharts", "FastAPI", "Python", "Docker"],
    deployment: "Vercel · GitHub Actions",
    thumb: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    repo: "https://github.com/BYTEZEN-11/gitpulse",
    demo: null,
    caseStudy: null
  },
  {
    id: "lungai",
    title: "LungAI · Chest Disease Classifier",
    category: "ai",
    type: "Medical Imaging · Deep Learning",
    year: 2025,
    month: 7,
    status: "completed",
    featured: true,
    description: "End-to-end AI-powered medical diagnostic assistant that analyzes chest X-ray images for disease classification (Adenocarcinoma vs Normal) using VGG16 transfer learning.",
    stack: ["Python", "Flask", "TensorFlow 2.12", "VGG16", "Docker"],
    deployment: "Docker · Local Flask",
    thumb: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    repo: "https://github.com/BYTEZEN-11/LungAI",
    demo: null,
    caseStudy: null
  },
  {
    id: "rentai",
    title: "Airbnb Price Predictor",
    category: "ai",
    type: "ML · Real Estate Pricing",
    year: 2025,
    month: 7,
    status: "completed",
    featured: false,
    description: "Machine learning system for predicting Airbnb listing prices with confidence intervals, SHAP explanations, REST API + Web UI, Prometheus metrics, and production-ready Docker support.",
    stack: ["Python", "Flask", "XGBoost", "CatBoost", "scikit-learn", "Optuna", "Docker"],
    deployment: "Docker · Local Flask",
    thumb: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    repo: "https://github.com/BYTEZEN-11/RentAI",
    demo: null,
    caseStudy: null
  },
  {
    id: "mealmate",
    title: "MyFoodApp (MealMate)",
    category: "full",
    type: "Food Delivery · Full-Stack",
    year: 2025,
    month: 7,
    status: "completed",
    featured: true,
    description: "Production-ready full-stack food delivery platform inspired by Swiggy/Zomato — 4 user roles (Customer/Owner/Delivery/Admin), real-time tracking, Razorpay payments, voice ordering via Whisper, and AI vision reordering.",
    stack: ["Node.js", "React Native (Expo)", "MongoDB", "Socket.io", "Razorpay", "OpenAI Whisper", "GPT-4o"],
    deployment: "Render · MongoDB Atlas",
    thumb: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    repo: "https://github.com/BYTEZEN-11/MealMate",
    demo: null,
    caseStudy: null
  },
  {
    id: "notes-web",
    title: "NotesWeb",
    category: "full",
    type: "Notes · Full-Stack MERN",
    year: 2025,
    month: 7,
    status: "completed",
    featured: false,
    description: "Production-grade full-stack notes app — secure register/login with JWT token rotation, pinning, color coding, tagging, full-text search, layered MVC architecture, and CI/CD via GitHub Actions.",
    stack: ["React 18", "Node.js 22", "Express.js", "MongoDB 7", "Vite", "Docker", "GitHub Actions"],
    deployment: "Docker · Render",
    thumb: "https://images.unsplash.com/photo-1517842645767-c639042777db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    repo: "https://github.com/BYTEZEN-11/NOTES-WEB",
    demo: null,
    caseStudy: null
  },
  {
    id: "task-manegment",
    title: "Enterprise Task Management",
    category: "mern",
    type: "Task Manager · MERN + Design Patterns",
    year: 2025,
    month: 7,
    status: "completed",
    featured: true,
    description: "Production-ready full-stack task management platform engineered with classic software design patterns — MVC, Repository, Service, Strategy, Factory, Observer, Singleton, DTO, and middleware chain.",
    stack: ["Node.js", "Express", "React 18", "Vite", "MongoDB", "Mongoose", "Tailwind CSS"],
    deployment: "Vercel · Render · Atlas",
    thumb: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    repo: "https://github.com/BYTEZEN-11/TASK-MANEGMENT",
    demo: null,
    caseStudy: null
  },
  {
    id: "portfolio",
    title: "Portfolio (Reference)",
    category: "web",
    type: "Portfolio · Reference Build",
    year: 2025,
    month: 7,
    status: "completed",
    featured: false,
    description: "Reference portfolio build using JavaScript, HTML, and CSS — a baseline static site template used as a starting point for the NS Portfolio design analysis.",
    stack: ["JavaScript", "HTML", "CSS"],
    deployment: "Static · GitHub Pages",
    thumb: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    repo: "https://github.com/BYTEZEN-11/PORTFOLIO",
    demo: null,
    caseStudy: null
  },
  {
    id: "page-pulse-pro",
    title: "Page Pulse Pro",
    category: "web",
    type: "Web Analytics · Tooling",
    year: 2025,
    month: 6,
    status: "completed",
    featured: false,
    description: "14-point SEO + Core Web Vitals + accessibility audit in under 3 seconds — paste a URL, get actionable recommendations wrapped in a dark-mode-ready UI. 87 tests passing.",
    stack: ["Node.js 18+", "Express", "Axios", "Cheerio", "React 18", "Vite", "Tailwind CSS", "Docker"],
    deployment: "Vercel · Render",
    thumb: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    repo: "https://github.com/BYTEZEN-11/PAGE-PLUSE-PRO",
    demo: null,
    caseStudy: null
  },
  {
    id: "smart-maintainanaces",
    title: "AI Home Maintenance Assistant",
    category: "full",
    type: "Multimodal AI · IoT · Mobile",
    year: 2025,
    month: 7,
    status: "completed",
    featured: true,
    description: "Full-stack home maintenance platform with multimodal AI diagnostics (image/video/audio/text), MQTT-based IoT telemetry, predictive component health scores, PDF reports, and a 40+ screen React Native mobile app.",
    stack: ["Node.js", "Express", "MongoDB", "React Native (Expo)", "Google Gemini", "MQTT", "pdfkit"],
    deployment: "Render · MongoDB Atlas",
    thumb: "https://images.unsplash.com/photo-1558002038-1055907df827?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    repo: "https://github.com/BYTEZEN-11/SMART-MAINTAINANACES",
    demo: null,
    caseStudy: null
  },
  {
    id: "expirylens",
    title: "ExpiryLens AI",
    category: "cv",
    type: "Computer Vision · Inventory · FEFO",
    year: 2025,
    month: 5,
    status: "completed",
    featured: false,
    description: "AI-powered expiry detection & FEFO inventory intelligence — YOLOv8 + OCR optical expiry scanner, smart FEFO dispatch, predictive analytics heatmaps, real-time WebSocket alerts, RBAC, and K8s deployment manifests.",
    stack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Express", "FastAPI", "YOLOv8", "OpenCV", "PostgreSQL", "MongoDB", "Redis"],
    deployment: "Docker · Kubernetes · Nginx",
    thumb: "https://images.unsplash.com/photo-1601598851547-4302969d0614?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    repo: "https://github.com/BYTEZEN-11/EXPIRYLENS",
    demo: null,
    caseStudy: null
  },
  {
    id: "facenova",
    title: "FaceNova",
    category: "cv",
    type: "Computer Vision · Face AI",
    year: 2025,
    month: 8,
    status: "completed",
    featured: false,
    description: "Face analysis suite — detection, landmarks, attributes, and recognition — wrapped in a clean web UI for quick demos.",
    stack: ["TypeScript", "JavaScript", "Python"],
    deployment: "Local · Docker",
    thumb: "https://images.unsplash.com/photo-1620421680010-0766ff230392?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    repo: "https://github.com/BYTEZEN-11/FACENOVA",
    demo: null,
    caseStudy: null
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
  { group: "Data & AI / ML",      items: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "sentence-transformers", "LLM Routing", "NVIDIA NIM", "DeepSeek", "Ollama", "FastMCP"] },
  { group: "OS & Tools",          items: ["Arch Linux", "macOS", "Git & GitHub", "Streamlit", "MCP (Model Context Protocol)", "Kernel concepts"] }
];
export const highlights = [
  "MERN stack apps — secure REST APIs, role-based auth, real deploys",
  "Mobile apps shipped on Play Store (Flutter / Kotlin)",
  "AI / ML & Computer Vision — classifiers, RAG prototypes, MCP servers",
  "DSA & Algorithm visualizers — interactive step-through learning tools",
  "Open-source contributions across multiple repos — add yours here"
];
export const focusAreas = [
  "Full-Stack Web Development",
  "MERN & Mobile Apps",
  "AI / ML & LLM Systems",
  "Cloud-Native & DevOps",
  "Open Source Culture",
  "Developer Experience"
];
export const freeTime = [
  "Side-project weekends (MERN, Flutter, AI tools)",
  "Reading other people's source code",
  "LeetCode & competitive practice",
  "Writing tech notes & tutorials",
  "Exploring LLM routing & model integrations"
];
export const osOfChoice = "Arch Linux 🐧";
export const goals = [
  { horizon: "Short term",  items: ["Land a tech internship (actively applying)", "Ship 2 more public projects", "Push weekly OSS contributions"] },
  { horizon: "Medium term", items: ["Full-time new-grad role at a product company", "Maintain a popular OSS library", "Speak at a meetup / write a long-form post"] },
  { horizon: "Long term",   items: ["Build tools developers love", "Run a small product / studio", "Keep learning in public"] }
];
export const marqueeDark = [
  "let's build",
  "open source",
  "ship code",
  "stay curious"
];
export const contactTopics = [
  "Internship",
  "Open Source",
  "Security Research",
  "Collaboration"
];
export const gallery = [
  {
    src: "https://images.unsplash.com/photo-1608742213509-815b97c30b36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    alt: "Terminal session on a monitor"
  },
  {
    src: "https://images.unsplash.com/photo-1557701197-2f99da0922dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    alt: "Circuit board macro"
  },
  {
    src: "https://images.unsplash.com/photo-1683322499436-f4383dd59f5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    alt: "Network cabling"
  },
  {
    src: "https://images.unsplash.com/photo-1650661926447-9efb2610f64c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    alt: "Backlit mechanical keyboard"
  },
  {
    src: "https://images.unsplash.com/photo-1778259205831-cf8f8bfebc80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    alt: "Source code on a dark screen"
  },
  {
    src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    alt: "Laptop on a wooden desk with code editor open"
  },
  {
    src: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    alt: "Code on multiple monitors"
  },
  {
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    alt: "Close-up of a circuit board"
  },
  {
    src: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    alt: "Code in an editor with syntax highlighting"
  },
  {
    src: "https://images.unsplash.com/photo-1633419461186-7d40a38105ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    alt: "Server rack with blinking LEDs"
  },
  {
    src: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    alt: "Laptop with a clean dark UI"
  },
  {
    src: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    alt: "Macbook on a desk next to a notebook"
  }
];
export const footerGiant = [
  { text: "ship things,", outline: true },
  { text: "ship fixes",  outline: false, dot: true }
];
export const aboutQuote = [
  { text: "student by day. " },
  { text: "builder",      accent: "amber" },
  { text: " by night. " },
  { text: " arch linux",  accent: "coral" },
  { text: ", always." }
];
export const sectionTitles = {
  about:        { eyebrow: "— ABOUT",         words: [{ text: "i'm" }, { text: "a" }, { text: "full-stack" }, { text: "developer" }], size: "lg" },
  demo:         { eyebrow: "01 / LIVE DEMO",  words: [{ text: "ship," }, { text: "on" }, { text: "purpose", accent: "amber" }, { text: "." }] },
  openSource:   { eyebrow: "02 / OPEN SOURCE", words: [{ text: "merged" }, { text: "upstream", accent: "amber" }] },
  projects:     { eyebrow: "03 / PROJECTS",   words: [{ text: "things" }, { text: "i've" }, { text: "built", accent: "amber" }] },
  skills:       { eyebrow: "04 / SKILLS",     words: [{ text: "the" }, { text: "toolbox", accent: "amber" }] },
  highlights:   { eyebrow: "— HIGHLIGHTS" },
  gallery:      { eyebrow: "— THE LAB",       words: [{ text: "the" }, { text: "lab" }] },
  interests:    { eyebrow: "05 / INTERESTS",  words: [{ text: "what" }, { text: "drives" }, { text: "me", accent: "amber" }] },
  goals:        { eyebrow: "06 / GOALS",      words: [{ text: "where" }, { text: "i'm" }, { text: "headed", accent: "amber" }] },
  contact:      { eyebrow: "07 / CONTACT",    words: [{ text: "let's" }, { text: "build" }, { text: "something", accent: "amber" }, { text: "." }] }
};
