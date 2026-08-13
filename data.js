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
  { value: "25+", label: "projects",      sub: "shipped to date" },
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
  },
  {
    id: "facenova",
    title: "FaceNova",
    category: "cv",
    type: "Computer Vision · Face AI",
    year: 2025,
    month: 7,
    status: "completed",
    featured: true,
    description: "Face analysis suite — detection, landmarks, attributes, and recognition — wrapped in a clean web UI for quick demos.",
    stack: ["Python", "OpenCV", "MediaPipe", "face_recognition", "Flask", "React"],
    deployment: "Local · Docker",
    thumb: "https://images.unsplash.com/photo-1507146426996-ef59306c858b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    repo: "https://github.com/BYTEZEN-11/FACENOVA", demo: null, caseStudy: null
  },
  {
    id: "expirylens",
    title: "ExpiryLens",
    category: "cv",
    type: "Computer Vision · OCR",
    year: 2025,
    month: 5,
    status: "completed",
    featured: false,
    description: "Snap a product label, get expiry-date reminders before the package goes stale. OCR + date parsing + notifications.",
    stack: ["Python", "OpenCV", "Tesseract OCR", "FastAPI", "SQLite"],
    deployment: "Local · Streamlit",
    thumb: "https://images.unsplash.com/photo-1601598851547-4302969d0614?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    repo: "https://github.com/BYTEZEN-11/EXPIRYLENS", demo: null, caseStudy: null
  },
  {
    id: "smart-maintenance",
    title: "SmartMaintenance",
    category: "ai",
    type: "Predictive ML · IoT-style",
    year: 2024,
    month: 10,
    status: "completed",
    featured: false,
    description: "Predictive-maintenance dashboard that flags equipment failure risk from sensor logs — Isolation Forest on rolling windows.",
    stack: ["Python", "Pandas", "scikit-learn", "Streamlit", "Plotly"],
    deployment: "Streamlit Cloud",
    thumb: "https://images.unsplash.com/photo-1581091870622-1c6a1f6b3f33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    repo: "https://github.com/BYTEZEN-11/SMART-MAINTAINANACES", demo: null, caseStudy: null
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
    description: "Lightweight page-performance monitor — Core Web Vitals, lighthouse-style audits, and a clean dashboard for multiple URLs.",
    stack: ["Node", "Express", "Lighthouse", "Puppeteer", "React", "Chart.js"],
    deployment: "Render + Vercel",
    thumb: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    repo: "https://github.com/BYTEZEN-11/PAGE-PLUSE-PRO", demo: null, caseStudy: null
  },
  {
    id: "task-management",
    title: "TaskDeck",
    category: "mern",
    type: "Productivity · MERN",
    year: 2025,
    month: 3,
    status: "completed",
    featured: true,
    description: "Kanban + list hybrid task manager with auth, drag-drop, priorities, and MongoDB-backed sync across devices.",
    stack: ["MongoDB", "Express", "React", "Node", "Redux Toolkit", "JWT"],
    deployment: "Vercel + Render",
    thumb: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    repo: "https://github.com/BYTEZEN-11/TASK-MANEGMENT", demo: null, caseStudy: null
  },
  {
    id: "notes-web",
    title: "NotesWeb",
    category: "web",
    type: "Notes · Markdown",
    year: 2024,
    month: 7,
    status: "completed",
    featured: false,
    description: "Browser-based notes app with Markdown rendering, tags, search, and local-first sync — write anything, find it fast.",
    stack: ["React", "Vite", "IndexedDB", "Tailwind CSS", "Marked"],
    deployment: "Vercel",
    thumb: "https://images.unsplash.com/photo-1517842645767-c639042777db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    repo: "https://github.com/BYTEZEN-11/NOTES-WEB", demo: null, caseStudy: null
  },
  {
    id: "ai-ml-universe",
    title: "AI-ML Universe",
    category: "ai",
    type: "AI / ML · Collection",
    year: 2025,
    month: 8,
    status: "in-progress",
    featured: true,
    description: "Curated playground of bite-size ML notebooks — classification, regression, NLP, CV — each runnable in a click.",
    stack: ["Python", "Jupyter", "scikit-learn", "TensorFlow", "Streamlit"],
    deployment: "Streamlit Cloud · Hugging Face",
    thumb: "https://images.unsplash.com/photo-1675557009875-436f7a6bd49e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    repo: "https://github.com/BYTEZEN-11/AI-ML-UNIVERSE", demo: null, caseStudy: null
  },
  {
    id: "algo-visualization",
    title: "AlgoViz",
    category: "dsa",
    type: "Algorithm Visualizer",
    year: 2024,
    month: 9,
    status: "completed",
    featured: true,
    description: "Interactive visualizer for sorting, searching, and graph algorithms — step-through controls, pseudocode, and live state.",
    stack: ["React", "D3.js", "Vite", "Tailwind CSS"],
    deployment: "Vercel",
    thumb: "https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    repo: "https://github.com/BYTEZEN-11/ALGO-VISUALIZATION", demo: null, caseStudy: null
  },
  {
    id: "food-delivery",
    title: "FoodDash",
    category: "full",
    type: "Food Delivery · Full Stack",
    year: 2024,
    month: 11,
    status: "completed",
    featured: false,
    description: "End-to-end food delivery platform — restaurant listings, cart, order tracking, and an admin panel for partners.",
    stack: ["React", "Node", "Express", "MongoDB", "Stripe", "Socket.IO"],
    deployment: "Vercel + Render + Atlas",
    thumb: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    repo: "https://github.com/BYTEZEN-11/FOOD-DELIVERY", demo: null, caseStudy: null
  },
  {
    id: "spam-email-classifier",
    title: "SpamSentinel",
    category: "ai",
    type: "NLP · Classifier",
    year: 2024,
    month: 6,
    status: "completed",
    featured: false,
    description: "Email spam/phishing classifier with TF-IDF features and a tuned ML head — evaluated on precision, recall, and F1.",
    stack: ["Python", "scikit-learn", "NLTK", "Pandas", "FastAPI"],
    deployment: "Hugging Face Spaces",
    thumb: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    repo: "https://github.com/BYTEZEN-11/SPAM-EMAIL-CLASSIFIERS", demo: null, caseStudy: null
  },
  {
    id: "gitpluse",
    title: "GitPluse",
    category: "web",
    type: "Developer Tool · CLI/Web",
    year: 2025,
    month: 2,
    status: "in-progress",
    featured: false,
    description: "Git workflow enhancer — commit hygiene checks, branch naming lints, and a small dashboard for repo health stats.",
    stack: ["Node", "TypeScript", "Express", "GitHub API", "React"],
    deployment: "npm + Vercel",
    thumb: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    repo: "https://github.com/BYTEZEN-11/GITPLUSE", demo: null, caseStudy: null
  },
  {
    id: "ai-chest-xray",
    title: "ChestScan AI",
    category: "ai",
    type: "Medical Imaging · Deep Learning",
    year: 2025,
    month: 4,
    status: "in-progress",
    featured: true,
    description: "Chest X-ray disease classifier — CNN backbone with transfer learning, calibrated outputs, and a clinician-friendly UI.",
    stack: ["Python", "TensorFlow", "Keras", "OpenCV", "Streamlit", "Grad-CAM"],
    deployment: "Hugging Face Spaces",
    thumb: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    repo: "https://github.com/BYTEZEN-11/AI-CHEST-DES-CLASSIFIERS", demo: null, caseStudy: null
  },
  {
    id: "dsa-visual",
    title: "DSA Visual",
    category: "dsa",
    type: "DSA Visualizer",
    year: 2025,
    month: 1,
    status: "completed",
    featured: false,
    description: "Step-through visualizer for data structures — arrays, linked lists, trees, heaps, graphs — with complexity hints.",
    stack: ["React", "TypeScript", "D3.js", "Vite"],
    deployment: "Vercel",
    thumb: "https://images.unsplash.com/photo-1517433670267-08bbbc4c5116?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    repo: "https://github.com/BYTEZEN-11/DSA-VISUAL", demo: null, caseStudy: null
  },
  {
    id: "panchayat",
    title: "Panchayat",
    category: "full",
    type: "Civic / Community · Web",
    year: 2024,
    month: 12,
    status: "completed",
    featured: false,
    description: "Local-governance portal — issue reporting, scheme info, and a public notice board for community engagement.",
    stack: ["React", "Node", "Express", "MongoDB", "Tailwind CSS", "JWT"],
    deployment: "Vercel + Render",
    thumb: "https://images.unsplash.com/photo-1593115057322-e94b77572f20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    repo: "https://github.com/BYTEZEN-11/PANCHAYAT", demo: null, caseStudy: null
  },
  {
    id: "ai-contract-platform",
    title: "ContractMind",
    category: "genai",
    type: "LegalTech · LLM",
    year: 2025,
    month: 7,
    status: "in-progress",
    featured: true,
    description: "AI contract platform — upload agreements, get clause summaries, risk flags, and plain-English explanations via LLM.",
    stack: ["FastAPI", "LangChain", "OpenAI API", "PostgreSQL", "React", "Tailwind CSS"],
    deployment: "Vercel + Render",
    thumb: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    repo: "https://github.com/BYTEZEN-11/AI-CONTRACT-PLATFORM", demo: null, caseStudy: null
  },
  {
    id: "finance-hub",
    title: "FinanceHub",
    category: "full",
    type: "FinTech · Full Stack",
    year: 2025,
    month: 6,
    status: "completed",
    featured: false,
    description: "Personal finance hub — expense tracking, budgets, category insights, and a clean dashboard with monthly reports.",
    stack: ["React", "Node", "Express", "MongoDB", "Chart.js", "JWT"],
    deployment: "Vercel + Render",
    thumb: "https://images.unsplash.com/photo-1554224155-1696413565d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    repo: "https://github.com/BYTEZEN-11/FINANCE-HUB", demo: null, caseStudy: null
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
  { src: "https://i.ibb.co/Zpw42B0y/PHOTO-2.jpg", alt: "NITESH Singh" },
  { src: "https://images.unsplash.com/photo-1608742213509-815b97c30b36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", alt: "Terminal session on a monitor" },
  { src: "https://images.unsplash.com/photo-1557701197-2f99da0922dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", alt: "Circuit board macro" },
  { src: "https://images.unsplash.com/photo-1683322499436-f4383dd59f5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", alt: "Network cabling" },
  { src: "https://images.unsplash.com/photo-1650661926447-9efb2610f64c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", alt: "Backlit mechanical keyboard" },
  { src: "https://images.unsplash.com/photo-1778259205831-cf8f8bfebc80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", alt: "Source code on a dark screen" }
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
