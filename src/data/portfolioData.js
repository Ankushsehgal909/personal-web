export const portfolioData = {
  personal: {
    name: "Ankush Sehgal",
    initials: "AS",
    title: "Software Development Engineer | Full Stack & React Native Specialist",
    tagline: "Building scalable cross-platform mobile apps, IoT systems, enterprise web platforms, and open-source NPM packages.",
    roles: [
      "Full Stack Developer",
      "React Native Engineer (iOS/Android)",
      "React.js & Next.js Specialist",
      "NPM Package Creator & IoT Engineer"
    ],
    status: "Available for High-Impact Opportunities",
    bio: "Results-driven Full Stack Developer with 2 years of professional experience building scalable web and mobile applications using React Native (iOS/Android), React.js, Next.js, and Node.js. Proven track record delivering production-grade IoT-integrated apps, enterprise HRMS platforms, and BLE-connected healthcare systems.",
    location: "India (Open to Remote & Onsite)",
    email: "ankushsehgal999@gmail.com",
    phone: "+91-9720121408",
    resumeUrl: "#",
    socials: {
      github: "https://github.com/Ankushsehgal909",
      linkedin: "https://linkedin.com/in/ankush-sehgal-dev",
      twitter: "",
      facebook: "",
      discord: ""
    }
  },

  stats: [
    { label: "Years Experience", value: "2" },
    { label: "Mobile & Web Apps", value: "4+" },
    { label: "Performance Gain", value: "+30%" },
    { label: "Platforms", value: "iOS / Android / Web" }
  ],

  aboutPillars: [
    {
      title: "Cross-Platform Mobile Apps",
      description: "Building production-grade iOS & Android applications with React Native, native bridges, push notifications (FCM/APNs), and BLE hardware communication."
    },
    {
      title: "Real-Time Web Architecture",
      description: "Architecting responsive web platforms and real-time dashboards using React.js, Next.js, Node.js, WebSockets, and MongoDB."
    },
    {
      title: "Open-Source NPM Libraries",
      description: "Designing reusable, highly optimized developer tools, component UI libraries, and utility npm packages for modern JavaScript runtimes."
    }
  ],

  skills: {
    categories: ["All", "Frontend & Mobile", "Backend & APIs", "IoT & BLE", "DevOps & State"],
    items: [
      { name: "React Native (iOS/Android)", category: "Frontend & Mobile", level: "Expert", icon: "Code2" },
      { name: "React.js", category: "Frontend & Mobile", level: "Expert", icon: "FileCode" },
      { name: "Next.js", category: "Frontend & Mobile", level: "Expert", icon: "Globe" },
      { name: "JavaScript (ES6+)", category: "Frontend & Mobile", level: "Expert", icon: "Terminal" },
      { name: "Tailwind CSS", category: "Frontend & Mobile", level: "Expert", icon: "Palette" },
      { name: "HTML5 / CSS3", category: "Frontend & Mobile", level: "Expert", icon: "Layout" },
      { name: "Node.js", category: "Backend & APIs", level: "Expert", icon: "Server" },
      { name: "Express.js", category: "Backend & APIs", level: "Expert", icon: "Cpu" },
      { name: "RESTful APIs", category: "Backend & APIs", level: "Expert", icon: "Zap" },
      { name: "WebSockets (Socket.io)", category: "Backend & APIs", level: "Expert", icon: "Layers" },
      { name: "MongoDB", category: "Backend & APIs", level: "Advanced", icon: "Database" },
      { name: "SQL", category: "Backend & APIs", level: "Advanced", icon: "Database" },
      { name: "Firebase", category: "Backend & APIs", level: "Advanced", icon: "Sparkles" },
      { name: "react-native-ble-plx (BLE)", category: "IoT & BLE", level: "Expert", icon: "Box" },
      { name: "UART Protocol / Hardware", category: "IoT & BLE", level: "Advanced", icon: "Cpu" },
      { name: "React Query", category: "DevOps & State", level: "Expert", icon: "GitMerge" },
      { name: "Context API / Redux", category: "DevOps & State", level: "Advanced", icon: "Layers" },
      { name: "React Hook Form", category: "DevOps & State", level: "Expert", icon: "FileCode" },
      { name: "Git & GitHub", category: "DevOps & State", level: "Expert", icon: "GitBranch" },
      { name: "Docker / Kubernetes (Basic)", category: "DevOps & State", level: "Intermediate", icon: "Box" }
    ]
  },

  experience: [
    {
      role: "Software Development Engineer I",
      company: "PSIBORG TECHNOLOGIES PVT. LTD.",
      duration: "Nov 2024 – Present",
      location: "India",
      description: "Leading end-to-end development of cross-platform IoT mobile applications (Safome & Agro) shipped to iOS and Android, alongside responsive web dashboards.",
      highlights: [
        "Led end-to-end development of Safome and Agro — two cross-platform IoT mobile apps built in React Native shipped to iOS and Android.",
        "Architected real-time WebSocket integrations with IoT hardware, enabling live device monitoring and analytics dashboards.",
        "Built and maintained responsive web dashboards using React.js and Next.js, improving SEO scores and reducing time-to-interactive by 30%.",
        "Implemented React Query for API state management — cutting redundant network calls via caching, auto-refetching, and background sync.",
        "Applied code-splitting and modular architecture across the codebase, improving load speed and long-term maintainability."
      ],
      tech: ["React Native", "React.js", "Next.js", "WebSockets", "React Query", "iOS / Android"]
    },
    {
      role: "React Native Developer Intern",
      company: "ROBUSTRESULTS PVT. LTD.",
      duration: "Jun 2022 – Aug 2022",
      location: "Remote",
      description: "Developed a fully functional cross-platform mobile app integrating RESTful APIs from scratch during a 3-month internship.",
      highlights: [
        "Developed a fully functional cross-platform mobile app integrating RESTful APIs from scratch.",
        "Added native modules and refactored codebase, achieving measurable performance gains on Android and iOS.",
        "Actively participated in Agile ceremonies — user story writing, backlog grooming, and sprint demos."
      ],
      tech: ["React Native", "JavaScript", "REST APIs", "Native Modules", "Agile"]
    }
  ],

  projects: [
    {
      id: "safome",
      title: "Safome — Real-Time Child Tracking App",
      category: "Mobile Apps",
      summary: "IoT parent-child safety mobile app providing sub-second live GPS tracking and emergency alerts.",
      description: "Built an IoT-based parent-child safety app deployed on both iOS and Android. Provides real-time GPS tracking, sub-second live location updates over Socket.io, Google Navigation API route rendering, SOS emergency alarms running in foreground & background via native bridges, push notifications (FCM / APNs), and live hardware sensor syncing.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1000&auto=format&fit=crop",
      tags: ["React Native", "Socket.io", "Google Maps API", "Node.js", "FCM / APNs"],
      liveUrl: "",
      githubUrl: "https://github.com/Ankushsehgal909",
      npmUrl: "",
      featured: true,
      challenges: "Delivering sub-second live location updates and ensuring SOS emergency audio alerts sound continuously even when backgrounded or locked.",
      solutions: "Combined Socket.io WebSockets with native iOS/Android notification bridges and background tasks for zero-latency alert execution."
    },
    {
      id: "hospital-kiosk",
      title: "Smart Appointment Booking — Hospital Kiosk App",
      category: "Mobile Apps",
      summary: "Hospital kiosk app integrating BLE Quenix hardware for temperature, fingerprint scanning, and receipts.",
      description: "Built a hospital front-desk kiosk mobile app for iOS and Android with OTP-based login, doctor selection, and slot booking. Integrated Bluetooth Low Energy (BLE) with Quenix hardware using a custom UART protocol to perform live temperature reading, fingerprint scanning, and receipt printing over BLE. Features QR patient lookup, camera face recognition, and dual-context token/BLE state management.",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1000&auto=format&fit=crop",
      tags: ["React Native", "BLE (react-native-ble-plx)", "React Query", "UART Protocol", "Axios"],
      liveUrl: "",
      githubUrl: "https://github.com/Ankushsehgal909",
      npmUrl: "",
      featured: true,
      challenges: "Reliably communicating with custom BLE medical devices over UART while retaining state during idle timeouts.",
      solutions: "Engineered a dual-context architecture (authContext + BLEContext) with auto-reconnection and 5-minute inactivity timeouts."
    },
    {
      id: "hrms-enterprise",
      title: "HRMS — Enterprise HR Management System",
      category: "Web Applications",
      summary: "Comprehensive workforce lifecycle management platform with payroll, attendance, shift scheduling & RBAC.",
      description: "Developed a full-stack HRMS platform featuring Employee Onboarding, automated Payroll calculation & tax payslip generation, Daily Check-in Attendance logs, Shift Management with rotational schedules, Performance Analysis KPI dashboards, Task Management, and Role-Based Access Control (RBAC) across Admin, HR Manager, and Employee tiers.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop",
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      liveUrl: "",
      githubUrl: "https://github.com/Ankushsehgal909",
      npmUrl: "",
      featured: true,
      challenges: "Enforcing complex granular permissions across multiple HR modules and calculating automated payroll cycles accurately.",
      solutions: "Implemented an RBAC middleware layer in Express.js combined with centralized MongoDB aggregation pipelines for payroll calculations."
    },
    {
      id: "smart-journey",
      title: "Smart Journey — AI Travel Itinerary App",
      category: "Mobile Apps",
      summary: "AI-driven travel planning app generating personalized itineraries based on budget, dates, and group size.",
      description: "Developed a cross-platform travel planning app built in React Native and Node.js that generates personalized AI itineraries. Provides smart recommendations for activities, accommodations, and daily schedules, significantly cutting down trip planning duration.",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1000&auto=format&fit=crop",
      tags: ["React Native", "AI Integration", "Node.js", "REST API"],
      liveUrl: "",
      githubUrl: "https://github.com/Ankushsehgal909",
      npmUrl: "",
      featured: false,
      challenges: "Synthesizing multi-variable user preferences into coherent daily schedule recommendations quickly.",
      solutions: "Structured prompt formatting interfaces and cached destination suggestion trees."
    },
    {
      id: "npm-package-placeholder",
      title: "Custom NPM Developer Package",
      category: "NPM Libraries",
      summary: "Open-source developer utility / UI component package published on NPM.",
      description: "Custom open-source JavaScript / React package designed to simplify state management, BLE communication, or UI component workflows across web & React Native applications.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop",
      tags: ["NPM", "JavaScript", "TypeScript", "React Native", "Open Source"],
      liveUrl: "",
      githubUrl: "https://github.com/Ankushsehgal909",
      npmUrl: "https://www.npmjs.com/",
      featured: true,
      challenges: "Optimizing package bundle size and providing zero-dependency tree-shakeable exports.",
      solutions: "Used Rollup / ESBuild bundler pipeline with clean TypeScript declaration definitions."
    }
  ],

  education: [
    {
      degree: "B.Tech — Computer Science & Engineering",
      institution: "Feroze Gandhi Institute of Engineering and Technology, Raebareli, UP",
      duration: "2020 – 2024"
    }
  ],

  services: [
    {
      id: "mobile-dev",
      title: "Cross-Platform Mobile Apps",
      description: "Building production-grade iOS & Android applications with React Native, native modules, push notifications, and offline caching.",
      icon: "Code",
      features: [
        "iOS & Android Single Codebase Apps",
        "Push Notifications (FCM / APNs)",
        "Background Tasks & Native Bridges",
        "React Query State & Offline Sync"
      ]
    },
    {
      id: "iot-ble",
      title: "IoT & BLE Hardware Integration",
      description: "Connecting mobile and web applications to IoT hardware sensors, Bluetooth Low Energy (BLE) devices, and real-time WebSockets.",
      icon: "Server",
      features: [
        "BLE Communication (react-native-ble-plx)",
        "UART Protocol & Hardware Syncing",
        "Socket.io Real-Time Data Streaming",
        "Live Device Dashboards & Analytics"
      ]
    },
    {
      id: "fullstack-web",
      title: "Full Stack Web Applications",
      description: "Engineering scalable web platforms, dashboards, and enterprise HRMS systems using React.js, Next.js, Node.js, and MongoDB.",
      icon: "Layout",
      features: [
        "React.js & Next.js SEO Dashboards",
        "Node.js & Express RESTful APIs",
        "Role-Based Access Control (RBAC)",
        "Database Design & Optimization"
      ]
    },
    {
      id: "performance",
      title: "NPM Libraries & Tools",
      description: "Creating open-source npm packages, component libraries, and utility toolkits for the developer community.",
      icon: "Zap",
      features: [
        "Tree-Shakeable NPM Package Bundling",
        "TypeScript Type Definitions",
        "Clean Developer APIs & Documentation",
        "Open-Source Library Publishing"
      ]
    }
  ]
};
