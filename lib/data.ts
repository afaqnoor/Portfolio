import {
  Smartphone,
  Server,
  Globe,
  Database,
  Wrench,
  Code2,
  Flame,
  ShieldCheck,
  Send,
  Bug,
  LayoutDashboard,
  Rocket,
} from "lucide-react";

export const siteConfig = {
  name: "Afaq Noor",
  title: "Software Engineer | Android & Full Stack Developer",
  email: "afaqnoor.dev@gmail.com",
  github: "https://github.com/afaqnoor",
  linkedin: "https://www.linkedin.com/in/afaq-noor-41680a245/",
  location: "Pakistan",
  company: "NineSol Technologies",
  university: "The University of Agriculture Peshawar",
  degree: "BS Computer Science",
  gradYear: "2023",
  yearsExperience: "3+",
  resumeUrl: "/resume/AfaqNoor.pdf",
  intro:
    "I build fast, reliable Android apps and full-stack web platforms that turn ambitious ideas into polished products — combining clean architecture, modern UI, and performance-first engineering to help businesses ship with confidence.",
  aboutParagraphs: [
    "I'm a Software Engineer with 3+ years of professional experience delivering production-grade Android applications and full-stack web platforms. Currently, I work at NineSol Technologies, where I design and build scalable mobile and web solutions used by real clients in production.",
    "My focus is simple: understand the business problem, then engineer a solution that is clean, maintainable, and fast. Whether it's a native Android app built with Kotlin & Jetpack Compose or a full-stack web app powered by Next.js and Node.js, I bring the same standard — thoughtful architecture, pixel-perfect UI, and reliable performance.",
    "I graduated with a BS in Computer Science from The University of Agriculture Peshawar in 2023, and since then I've shipped multiple apps and web products end-to-end — from database design to deployment — while collaborating closely with clients and cross-functional teams.",
  ],
};

export const stats = [
  { label: "Years of Experience", value: 3, suffix: "+" },
  { label: "Projects Completed", value: 20, suffix: "+" },
  { label: "Happy Clients", value: 15, suffix: "+" },
  { label: "Apps Shipped", value: 8, suffix: "+" },
];

export type SkillCategory = {
  title: string;
  icon: keyof typeof iconMap;
  skills: { name: string; level: number }[];
};

export const iconMap = {
  Smartphone,
  Server,
  Globe,
  Database,
  Wrench,
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Android",
    icon: "Smartphone",
    skills: [
      { name: "Kotlin", level: 95 },
      { name: "Java", level: 88 },
      { name: "Jetpack Compose", level: 92 },
      { name: "XML", level: 90 },
      { name: "MVVM", level: 93 },
      { name: "Room Database", level: 88 },
    ],
  },
  {
    title: "Backend",
    icon: "Server",
    skills: [
      { name: "Firebase", level: 95 },
      { name: "Firestore", level: 92 },
      { name: "Authentication", level: 90 },
      { name: "Cloud Messaging", level: 87 },
      { name: "REST APIs", level: 93 },
    ],
  },
  {
    title: "Web",
    icon: "Globe",
    skills: [
      { name: "React.js", level: 90 },
      { name: "Next.js", level: 88 },
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 84 },
      { name: "JavaScript", level: 92 },
      { name: "TypeScript", level: 86 },
    ],
  },
  {
    title: "Database",
    icon: "Database",
    skills: [
      { name: "MongoDB", level: 87 },
      { name: "SQLite", level: 90 },
      { name: "Firebase", level: 93 },
    ],
  },
  {
    title: "Tools",
    icon: "Wrench",
    skills: [
      { name: "Android Studio", level: 95 },
      { name: "VS Code", level: 93 },
      { name: "Git", level: 90 },
      { name: "GitHub", level: 90 },
      { name: "Postman", level: 88 },
      { name: "Figma", level: 80 },
    ],
  },
];

export const experience = [
  {
    role: "Software Engineer",
    company: "NineSol Technologies",
    duration: "3+ Years",
    period: "2022 — Present",
    responsibilities: [
      "Android Development",
      "React Development",
      "Firebase Integration",
      "REST API Integration",
      "Performance Optimization",
      "UI/UX Implementation",
    ],
  },
];

export type Project = {
  id: string;
  name: string;
  category: "android" | "web";
  description: string;
  image: string;
  stack: string[];
  features: string[];
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    id: "gallery-locker",
    name: "Gallery Locker App",
    category: "android",
    description:
      "A secure Android vault app that hides and encrypts photos & videos behind biometric and PIN authentication.",
    image:
      "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=1200&auto=format&fit=crop",
    stack: ["Kotlin", "Room Database", "Biometric API", "MVVM"],
    features: [
      "Fingerprint & PIN lock",
      "Encrypted local storage",
      "Hide/unhide media instantly",
      "Break-in intruder detection",
    ],
    github: "https://github.com/afaqnoor",
  },
  {
    id: "screen-recorder",
    name: "Screen Recorder",
    category: "android",
    description:
      "A lightweight, high-performance screen recording app with overlay controls and internal audio capture.",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1200&auto=format&fit=crop",
    stack: ["Kotlin", "MediaProjection API", "Jetpack Compose"],
    features: [
      "HD screen + audio recording",
      "Floating control overlay",
      "Pause/resume recording",
      "Built-in video trimming",
    ],
    github: "https://github.com/afaqnoor",
  },
  {
    id: "step-by-step-salah",
    name: "Step By Step Salah",
    category: "android",
    description:
      "A prayer companion app guiding users through Salah step-by-step with accurate prayer times and Hijri calendar tools.",
    image:
      "https://images.unsplash.com/photo-1519817650390-64a93db51149?q=80&w=1200&auto=format&fit=crop",
    stack: ["Kotlin", "ThreeTenBP", "Room Database", "Navigation Component"],
    features: [
      "Accurate prayer time calculation",
      "Hijri calendar converter",
      "Step-by-step Salah guide",
      "Qibla direction finder",
    ],
    github: "https://github.com/afaqnoor",
  },
  {
    id: "sketch-and-trace",
    name: "Sketch & Trace",
    category: "android",
    description:
      "A drawing companion app that overlays reference images for artists to trace and practice sketching with adjustable opacity.",
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1200&auto=format&fit=crop",
    stack: ["Kotlin", "Canvas API", "Jetpack Compose"],
    features: [
      "Image overlay with opacity control",
      "Grid & mirror tracing modes",
      "Zoom & pan canvas",
      "Save & export sketches",
    ],
    github: "https://github.com/afaqnoor",
  },
  {
    id: "finly-app",
    name: "Finly App",
    category: "android",
    description:
      "A personal finance tracker that helps users manage income, expenses, and budgets with clean data visualizations.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop",
    stack: ["Kotlin", "Room Database", "MPAndroidChart", "MVVM"],
    features: [
      "Expense & income tracking",
      "Category-wise budgeting",
      "Visual spending charts",
      "Monthly financial reports",
    ],
    github: "https://github.com/afaqnoor",
  },
  {
    id: "education-service",
    name: "Education Service Website",
    category: "web",
    description:
      "A full-stack education platform connecting students with tutors, featuring course listings, booking, and dashboards.",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB"],
    features: [
      "Tutor & student dashboards",
      "Course booking system",
      "Secure authentication",
      "Admin management panel",
    ],
    github: "https://github.com/afaqnoor",
    demo: "https://github.com/afaqnoor",
  },
  {
    id: "movie-app",
    name: "Movie App",
    category: "web",
    description:
      "A sleek movie discovery web app with search, trending lists, and detailed info powered by a public movie API.",
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1200&auto=format&fit=crop",
    stack: ["React.js", "REST API", "TypeScript", "Tailwind CSS"],
    features: [
      "Trending & top-rated movies",
      "Instant search with debounce",
      "Detailed movie pages",
      "Responsive grid layouts",
    ],
    github: "https://github.com/afaqnoor",
    demo: "https://github.com/afaqnoor",
  },
  {
    id: "school-management",
    name: "School Management System",
    category: "web",
    description:
      "A complete school management platform for handling students, staff, attendance, results, and fee management.",
    image:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1200&auto=format&fit=crop",
    stack: ["Next.js", "Node.js", "Express.js", "MongoDB"],
    features: [
      "Student & staff management",
      "Attendance & result tracking",
      "Fee management module",
      "Role-based admin dashboard",
    ],
    github: "https://github.com/afaqnoor",
  },
];

export const services = [
  {
    title: "Android App Development",
    icon: "Smartphone",
    description:
      "Native Android apps built with Kotlin, Jetpack Compose & modern MVVM architecture.",
  },
  {
    title: "Firebase Integration",
    icon: "Flame",
    description:
      "Authentication, Firestore, Cloud Messaging & real-time backend integration.",
  },
  {
    title: "REST API Integration",
    icon: "Send",
    description:
      "Robust, well-tested API integrations connecting your app to any backend service.",
  },
  {
    title: "Bug Fixing",
    icon: "Bug",
    description:
      "Fast diagnosis and resolution of crashes, performance issues, and UI bugs.",
  },
  {
    title: "React Development",
    icon: "Code2",
    description:
      "Interactive, high-performance web interfaces built with modern React patterns.",
  },
  {
    title: "Next.js Development",
    icon: "Globe",
    description:
      "SEO-friendly, blazing-fast web apps using the Next.js App Router.",
  },
  {
    title: "Full Stack Web Development",
    icon: "Server",
    description:
      "End-to-end web platforms — from database design to deployed production app.",
  },
  {
    title: "Admin Dashboard Development",
    icon: "LayoutDashboard",
    description:
      "Clean, role-based dashboards for managing data, users, and operations.",
  },
];

export const serviceIconMap = {
  Smartphone,
  Flame,
  Send,
  Bug,
  Code2,
  Globe,
  Server,
  LayoutDashboard,
  ShieldCheck,
  Rocket,
};

export const whyChooseMe = [
  {
    title: "Clean Code",
    description:
      "Readable, well-structured, and maintainable code following best practices.",
  },
  {
    title: "Modern UI",
    description:
      "Interfaces designed with today's aesthetic and UX standards in mind.",
  },
  {
    title: "Fast Delivery",
    description:
      "Efficient workflows that turn requirements into shipped features quickly.",
  },
  {
    title: "100% Client Satisfaction",
    description:
      "Clear communication and a relentless focus on getting it right.",
  },
  {
    title: "Scalable Architecture",
    description: "Systems built to grow with your business, not against it.",
  },
  {
    title: "Long-Term Support",
    description: "Ongoing maintenance and support well after project delivery.",
  },
];

export const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Founder, FitTrack Studio",
    avatar: "https://i.pravatar.cc/150?img=47",
    quote:
      "Afaq delivered our Android app ahead of schedule with incredible attention to detail. The Firebase integration was seamless and the UI feels premium. Best developer we've worked with.",
    rating: 5,
  },
  {
    name: "James Carter",
    role: "CTO, Bright Learning",
    avatar: "https://i.pravatar.cc/150?img=12",
    quote:
      "We hired Afaq to build our education platform end-to-end. His full-stack skills across React, Node.js, and MongoDB made the entire process smooth. Highly recommended.",
    rating: 5,
  },
  {
    name: "Amina Raza",
    role: "Product Manager, Nimbus Retail",
    avatar: "https://i.pravatar.cc/150?img=32",
    quote:
      "Professional, communicative, and technically excellent. Afaq rebuilt our admin dashboard and improved performance dramatically. We'll definitely work together again.",
    rating: 5,
  },
  {
    name: "David Okafor",
    role: "Founder, Salah Companion",
    avatar: "https://i.pravatar.cc/150?img=68",
    quote:
      "Afaq's work on our prayer times app was outstanding — clean architecture, zero crashes, and a beautiful UI. He clearly cares about quality.",
    rating: 5,
  },
];

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Work", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];
