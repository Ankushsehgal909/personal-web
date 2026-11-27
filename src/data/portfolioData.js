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
    { label: "Mobile & Web Apps", value: "10+" },
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
      image: "/projects/safome.png",
      tags: ["React Native", "Socket.io", "Google Maps API", "Node.js", "FCM / APNs"],
      liveUrl: "",
      githubUrl: "https://github.com/Ankushsehgal909",
      npmUrl: "",
      featured: true,
      challenges: "Delivering sub-second live location updates and ensuring SOS emergency audio alerts sound continuously even when backgrounded or locked.",
      solutions: "Combined Socket.io WebSockets with native iOS/Android notification bridges and background tasks for zero-latency alert execution."
    },
    {
      id: "alusync",
      title: "AluSync — Smart Louver Control Mobile App",
      category: "Mobile Apps",
      summary: "Industrial IoT mobile app for Site Managers to monitor, schedule, and control smart louver systems in real time.",
      description: "Built with React Native 0.84 (New Architecture) and TypeScript for site managers (com.aludecor.alusync). Enables individual louver position control (0–100%), zone/group control, time-based and sunrise/sunset scheduling, maintenance ticketing with photo attachments, real-time Socket.IO dashboard stats, and a 5-second countdown site-wide Emergency Stop.",
      image: "/projects/alusync.png",
      tags: ["React Native", "TypeScript", "Redux Toolkit", "React Query", "Socket.IO"],
      liveUrl: "",
      githubUrl: "https://github.com/Ankushsehgal909",
      npmUrl: "",
      featured: true,
      challenges: "Synchronizing live louver states across multiple sites with strict role-gated access (site_manager) and safe emergency stop execution.",
      solutions: "Implemented JWT-authenticated Socket.IO room subscriptions (dashboard:stats, louver:update, alert:new), optimistic React Query mutations, and a dedicated 5-second EmergencyControl confirmation flow."
    },
    {
      id: "aludecor-technician",
      title: "Aludecor Technician — BLE Commissioning App",
      category: "Mobile Apps",
      summary: "Field technician React Native app for BLE smart louver discovery, Wi-Fi provisioning, and stepper motor calibration.",
      description: "Mission-critical React Native 0.85 + TypeScript mobile app engineered for field technicians and site integrators. Communicates with Aludecor Smart Louver hardware over Bluetooth Low Energy (BLE) GATT channels for RSSI-filtered node discovery, DHCP/Static IP Wi-Fi & LAN provisioning, 0–100% stepper motor actuator calibration, and localized fault diagnostics.",
      image: "/projects/aludecor-tech.png",
      tags: ["React Native", "TypeScript", "BLE (react-native-ble-plx)", "Redux Toolkit", "React Query"],
      liveUrl: "",
      githubUrl: "https://github.com/Ankushsehgal909",
      npmUrl: "",
      featured: true,
      challenges: "Maintaining reliable BLE GATT communication with louver hardware on-site while preserving physical actuator calibration limits.",
      solutions: "Engineered RSSI-filtered central manager scanning with react-native-ble-plx, Bluetooth adapter lifecycle monitoring, and deterministic Redux session restoration."
    },
    {
      id: "alubreeze-web",
      title: "Alubreeze — IoT Louver Control Platform",
      category: "Web Applications",
      summary: "Multi-tenant enterprise web dashboard for real-time smart louver monitoring, scheduling, and CCU inventory management.",
      description: "Full-featured React 19 + Vite + Material UI v7 web platform serving super_admin, org_admin, and site_manager roles. Supports live single and group louver control, CCU commissioning and firmware management, scheduling, waveform analytics, audit command logs, and real-time Socket.IO alerts.",
      image: "/projects/alubreeze.png",
      tags: ["React 19", "Vite", "Material UI v7", "Redux Toolkit", "Socket.IO"],
      liveUrl: "",
      githubUrl: "https://github.com/Ankushsehgal909",
      npmUrl: "",
      featured: true,
      challenges: "Supporting distinct workflows for super admins (organizations & CCU inventory) and site managers across multi-site IoT deployments.",
      solutions: "Implemented role-based ProtectedRoute guards, lazy-loaded route chunks, TanStack React Query caching, and automated GitHub Actions CI/CD."
    },
    {
      id: "dru-farm",
      title: "DRU Farm — Cattle Health & FPO IoT Platform",
      category: "Web Applications",
      summary: "Multi-role IoT cattle health monitoring and Farmer Producer Organisation (FPO) operations dashboard.",
      description: "Single-page React 19 + Vite 7 web application connecting FPO Admins, Field Officers, Farmers, and Veterinarians. Surfaces real-time cattle health telemetry from IoT collar sensors, severity-classified alert escalation, field visit ticketing, Artificial Insemination (AI) & pregnancy tracking, and a 6-step farm onboarding wizard.",
      image: "/projects/dru-farm.png",
      tags: ["React 19", "Vite", "Redux", "React Query", "Socket.IO"],
      liveUrl: "",
      githubUrl: "https://github.com/Ankushsehgal909",
      npmUrl: "",
      featured: true,
      challenges: "Coordinating real-time collar & gateway telemetry with multi-role workflows across FPO admins, vets, and field officers.",
      solutions: "Built live Socket.IO KPI streaming paired with role-scoped modules, collar inventory tracking, and automated alert-to-ticket escalation."
    },
    {
      id: "fakutori",
      title: "Fakutori — Factory Workforce & HR SaaS",
      category: "Web Applications",
      summary: "Multi-tenant cloud HR and workforce management platform built for manufacturing plants and industrial facilities.",
      description: "Multi-tenant SaaS platform tailored for factory floor operations. Features CSV bulk worker enrollment, hardware beacon and group face-recognition attendance tracking (Summary, Raw punch, and Manual Mark views), rotating shift & time planning, and automated hourly/piece-rate payroll alongside salaried staff.",
      image: "/projects/fakutori.png",
      tags: ["React.js", "Multi-Tenant SaaS", "Biometrics", "Shift Scheduling", "Payroll"],
      liveUrl: "",
      githubUrl: "https://github.com/Ankushsehgal909",
      npmUrl: "",
      featured: false,
      challenges: "Handling high-volume hourly factory shifts, biometric face-scan attendance auditing, and mixed piece-rate/hourly payroll rules across tenants.",
      solutions: "Designed tenant-isolated organization workspaces with Super Admin provisioning, shift-filtered attendance views, and flexible payroll calculation pipelines."
    },
    {
      id: "tracklone",
      title: "Tracklone — Lone Worker Safety & Patrol SOC",
      category: "Web Applications",
      summary: "Real-time lone worker safety and security guard patrol operations center with GPS geofencing and vitals telemetry.",
      description: "Enterprise React 19 + TypeScript + MUI v7 portal for Security Operations Centres (SOCs). Monitors lone workers and guards in real time on Google Maps with polygon/circle geofences, live heart rate & blood pressure vitals, SOS/Fall/No-Touch/Geofence alerts, dynamic RBAC permissions over Socket.IO, and on-demand device sync.",
      image: "/projects/tracklone.png",
      tags: ["React 19", "TypeScript", "Google Maps API", "Socket.IO", "Material UI v7"],
      liveUrl: "",
      githubUrl: "https://github.com/Ankushsehgal909",
      npmUrl: "",
      featured: true,
      challenges: "Delivering sub-second SOS/Fall alert routing, live RBAC permission updates, and 7-second hardware sync confirmation over WebSockets.",
      solutions: "Implemented a singleton Socket.IO client with device:{macId} sync handshakes, deep-compared permission:getAllPermission updates, and Google Maps polyline route trails."
    },
    {
      id: "lora-gps-tracker",
      title: "LoRa GPS Tracker — Fleet & Geo-Zone Dashboard",
      category: "Web Applications",
      summary: "LoRaWAN-based GPS fleet tracking command center with live truck clustering, polygon geo-zones, and gateway health.",
      description: "React 19 + Vite + MUI v7 command center for logistics and fleet managers. Plots trucks live on Google Maps with MarkerClusterer congestion views, custom polygon geo-zone compliance tracking, LoRa gateway health monitoring, Socket.IO KPI/position streaming, and CSV-exportable trip, standing-time, and zone activity reports.",
      image: "/projects/lora-gps.png",
      tags: ["React 19", "Google Maps", "Socket.IO", "Recharts", "LoRaWAN IoT"],
      liveUrl: "",
      githubUrl: "https://github.com/Ankushsehgal909",
      npmUrl: "",
      featured: true,
      challenges: "Rendering high-frequency LoRaWAN truck position updates and congestion clusters without unnecessary React re-renders.",
      solutions: "Used Lodash isEqual payload diffing on dashboard:trucks and dashboard:kpi Socket.IO events combined with @googlemaps/markerclusterer."
    },
    {
      id: "hospital-kiosk",
      title: "Smart Appointment Booking — Hospital Kiosk App",
      category: "Mobile Apps",
      summary: "Hospital kiosk app integrating BLE Quenix hardware for temperature, fingerprint scanning, and receipts.",
      description: "Built a hospital front-desk kiosk mobile app for iOS and Android with OTP-based login, doctor selection, and slot booking. Integrated Bluetooth Low Energy (BLE) with Quenix hardware using a custom UART protocol to perform live temperature reading, fingerprint scanning, and receipt printing over BLE. Features QR patient lookup, camera face recognition, and dual-context token/BLE state management.",
      image: "/projects/hospital-kiosk.png",
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
      image: "/projects/hrms-enterprise.png",
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
      image: "/projects/smart-journey.png",
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
      image: "/projects/npm-package.png",
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
