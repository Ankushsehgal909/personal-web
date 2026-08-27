export const portfolioData = {
  personal: {
    name: "Alex Vance",
    initials: "AV",
    title: "Senior Full Stack Engineer & UI Architect",
    tagline: "Crafting digital experiences with cinematic precision and high-performance engineering.",
    roles: [
      "Full Stack Engineer",
      "UI/UX Architect",
      "JavaScript Specialist",
      "Open Source Creator"
    ],
    status: "Available for Work & Collaborations",
    bio: "Passionate software engineer with 6+ years of experience building modern, responsive, and scalable web applications. Dedicated to clean architecture, intuitive user interfaces, and flawless user experiences.",
    location: "San Francisco, CA (Open to Remote)",
    email: "alex.vance.dev@example.com",
    phone: "+1 (555) 234-5678",
    resumeUrl: "#",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://x.com",
      facebook: "https://facebook.com",
      discord: "https://discord.gg"
    }
  },

  stats: [
    { label: "Years Experience", value: "6+" },
    { label: "Projects Completed", value: "35+" },
    { label: "Satisfied Clients", value: "20+" },
    { label: "Code Commits", value: "4.8k" }
  ],

  aboutPillars: [
    {
      title: "Clean Architecture",
      description: "Writing scalable, maintainable, and self-documenting code built for longevity and performance."
    },
    {
      title: "Cinematic UI/UX",
      description: "Combining high-contrast aesthetics, deliberate typography, and micro-interactions for memorable user journeys."
    },
    {
      title: "Full-Stack Mastery",
      description: "Seamlessly bridging pixel-perfect frontend interfaces with resilient backend API microservices."
    }
  ],

  skills: {
    categories: ["All", "Frontend", "Backend", "Tools & DevOps", "Design"],
    items: [
      { name: "React", category: "Frontend", level: "Expert", icon: "Code2" },
      { name: "TypeScript", category: "Frontend", level: "Expert", icon: "FileCode" },
      { name: "Next.js", category: "Frontend", level: "Advanced", icon: "Globe" },
      { name: "Tailwind CSS", category: "Frontend", level: "Expert", icon: "Palette" },
      { name: "Vue.js", category: "Frontend", level: "Intermediate", icon: "Layout" },
      { name: "Node.js", category: "Backend", level: "Expert", icon: "Server" },
      { name: "Express.js", category: "Backend", level: "Expert", icon: "Cpu" },
      { name: "Python / FastAPI", category: "Backend", level: "Advanced", icon: "Terminal" },
      { name: "PostgreSQL", category: "Backend", level: "Advanced", icon: "Database" },
      { name: "MongoDB", category: "Backend", level: "Advanced", icon: "Layers" },
      { name: "GraphQL", category: "Backend", level: "Intermediate", icon: "GitMerge" },
      { name: "Docker", category: "Tools & DevOps", level: "Advanced", icon: "Box" },
      { name: "Git / GitHub Actions", category: "Tools & DevOps", level: "Expert", icon: "GitBranch" },
      { name: "Vite / Webpack", category: "Tools & DevOps", level: "Expert", icon: "Zap" },
      { name: "Figma", category: "Design", level: "Advanced", icon: "Figma" },
      { name: "Framer Motion", category: "Design", level: "Expert", icon: "Sparkles" }
    ]
  },

  experience: [
    {
      role: "Lead Full Stack Engineer",
      company: "Nexus Tech Solutions",
      duration: "2023 - Present",
      location: "San Francisco, CA",
      description: "Architected enterprise web platforms serving 100k+ active users. Led frontend design system standardization and reduced initial bundle load times by 42%.",
      highlights: [
        "Migrated monolithic frontend to modular micro-frontend React setup.",
        "Mentored junior engineers and instituted automated CI/CD code quality pipelines."
      ],
      tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "Docker"]
    },
    {
      role: "Senior Frontend Developer",
      company: "Aetheria Studio",
      duration: "2021 - 2023",
      location: "Remote",
      description: "Designed and implemented interactive web applications, real-time dashboards, and custom component libraries.",
      highlights: [
        "Engineered real-time canvas data visualization tools using WebGL and Canvas API.",
        "Collaborated directly with product design team to build dark-themed cinematic UIs."
      ],
      tech: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "REST API"]
    },
    {
      role: "JavaScript Engineer",
      company: "Vanguard Systems",
      duration: "2019 - 2021",
      location: "Austin, TX",
      description: "Developed core UI modules, customer management portals, and RESTful API endpoints.",
      highlights: [
        "Built dynamic data table filtering engine handling over 50k rows in under 100ms.",
        "Refactored legacy jQuery application into modern ES6 React architecture."
      ],
      tech: ["JavaScript", "React", "Express", "MongoDB", "CSS Modules"]
    }
  ],

  projects: [
    {
      id: "project-1",
      title: "Pulse-Studio Dashboard",
      category: "Full Stack",
      summary: "Real-time analytics and workflow automation dashboard for creative studios.",
      description: "A high-performance SaaS analytics suite providing real-time data streaming, interactive charts, team collaboration boards, and automated report generation.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
      tags: ["React", "Node.js", "Tailwind CSS", "Socket.io", "Chart.js"],
      liveUrl: "https://example.com/demo1",
      githubUrl: "https://github.com/example/pulse-studio",
      featured: true,
      challenges: "Managing real-time WebSocket state synchronizations across multiple browser tabs without performance degradation.",
      solutions: "Implemented centralized optimistic state management and delta patching algorithms."
    },
    {
      id: "project-2",
      title: "Aura Cinematic Design System",
      category: "Frontend",
      summary: "A ultra-sleek, dark-mode component library inspired by film cinematography.",
      description: "Open-source React component UI kit with anamorphic lighting effects, backdrop glassmorphism, and accessible keyboard navigation.",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop",
      tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      liveUrl: "https://example.com/demo2",
      githubUrl: "https://github.com/example/aura-ui",
      featured: true,
      challenges: "Ensuring 60fps glassmorphism blur transitions across low-end mobile devices.",
      solutions: "Used CSS hardware acceleration and fallback solid opacity layers for low-power hardware."
    },
    {
      id: "project-3",
      title: "OmniForge Code Editor",
      category: "AI/Tools",
      summary: "Web-based collaborative code editor with integrated AI assistance.",
      description: "In-browser IDE featuring syntax highlighting, live multi-user cursor editing, terminal execution sandbox, and context-aware code completion.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop",
      tags: ["React", "Monaco Editor", "WebSockets", "Python", "Docker"],
      liveUrl: "https://example.com/demo3",
      githubUrl: "https://github.com/example/omniforge",
      featured: true,
      challenges: "Securely executing isolated dynamic user code in isolated sandboxes.",
      solutions: "Created ephemeral containerized runner instances with strict CPU/Memory quotas."
    },
    {
      id: "project-4",
      title: "CyberMarket E-Commerce Platform",
      category: "Full Stack",
      summary: "Modern e-commerce platform with headless CMS integration & instant search.",
      description: "Sleek storefront built for high conversion with instant fuzzy search, dynamic cart drawer, multi-currency checkout, and order tracking.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000&auto=format&fit=crop",
      tags: ["Next.js", "GraphQL", "Stripe API", "PostgreSQL", "Tailwind CSS"],
      liveUrl: "https://example.com/demo4",
      githubUrl: "https://github.com/example/cybermarket",
      featured: false,
      challenges: "Providing sub-50ms instant search across 20,000 product SKUs.",
      solutions: "Deployed edge-cached index structures and client-side web worker search."
    },
    {
      id: "project-5",
      title: "Neural Vision Studio",
      category: "UI/UX",
      summary: "Generative image canvas interface for digital artists and designers.",
      description: "Interactive visual workspace combining prompt builder controls, canvas mask editing, version history tree, and batch asset export.",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
      tags: ["React", "HTML5 Canvas", "REST API", "Tailwind CSS"],
      liveUrl: "https://example.com/demo5",
      githubUrl: "https://github.com/example/neural-vision",
      featured: false,
      challenges: "Managing undo/redo stack memory limits with high-resolution image layers.",
      solutions: "Designed compressed binary snapshot buffers and immutable state trees."
    }
  ],

  services: [
    {
      id: "web-dev",
      title: "Full Stack Web Development",
      description: "Building responsive, modern, scalable web applications from initial frontend design to secure backend database architecture.",
      icon: "Code",
      features: [
        "Custom Single Page & Multi-page Apps",
        "REST & GraphQL API Integration",
        "Performance & SEO Optimization",
        "Database Design & Cloud Deployment"
      ]
    },
    {
      id: "ui-ux",
      title: "Cinematic UI/UX Architecture",
      description: "Designing memorable user interfaces with dark-mode focus, high visual contrast, deliberate typography, and smooth micro-interactions.",
      icon: "Layout",
      features: [
        "Design System & Component Libraries",
        "Responsive Mobile-First Interfaces",
        "Interactive Prototypes & Animations",
        "Accessibility (WCAG) Compliance"
      ]
    },
    {
      id: "api-backend",
      title: "Backend Services & Microservices",
      description: "Engineering reliable server backend logic, authentication handlers, microservice integrations, and real-time WebSocket communication.",
      icon: "Server",
      features: [
        "Secure User Authentication & JWT",
        "Real-Time Data Streaming & WebSockets",
        "Third-Party API & Payment Gateways",
        "Database Indexing & Caching"
      ]
    },
    {
      id: "consulting",
      title: "Code Audit & Performance Tuning",
      description: "Reviewing existing web codebases to optimize bundle size, decrease render latency, fix security vulnerabilities, and enhance maintainability.",
      icon: "Zap",
      features: [
        "Core Web Vitals Audit",
        "React Component Re-render Profiling",
        "Refactoring Legacy Codebases",
        "Technical Architecture Consulting"
      ]
    }
  ]
};
