export const portfolioData = {
  personal: {
    name: "Ced",
    fullName: "Ced",
    role: "Entry-Level Web Developer & IT Support Specialist",
    tagline: "Building responsive web applications & reliable technical solutions.",
    email: "ced@gmail.com",
    location: "Cavite, Philippines",
    availability: "Available for Entry-Level & Full-Time Opportunities",
    github: "https://github.com", // Can be updated with their GitHub handle
    linkedin: "https://linkedin.com",
    bio: "A motivated and responsible recent graduate seeking an entry-level position where I can apply my computer skills. I am eager to gain practical work experience, learn new skills, work well with others, and contribute to the team operations and deliver reliable technical solutions.",
    stats: [
      { label: "Systems Developed", value: "3+" },
      { label: "Internship Hours", value: "300+ hrs" },
      { label: "Core Competency", value: "React & IT Support" },
      { label: "Status", value: "Ready to Hire" },
    ],
  },

  aboutHighlights: [
    {
      title: "Full-Stack Fundamentals",
      description: "Hands-on experience developing frontends with React.js & Material UI (MUI), supported by Node.js and Fastify backend foundations.",
      icon: "Code",
    },
    {
      title: "Hardware & IT Support",
      description: "Skilled in diagnosing computer hardware, installing peripherals, and maintaining office workstations with minimal downtime.",
      icon: "Build",
    },
    {
      title: "Team Player & Fast Learner",
      description: "Eager to absorb modern industry workflows, collaborate across departments, and deliver dependable business results.",
      icon: "Group",
    },
    {
      title: "Operational Problem Solver",
      description: "Proven track record of digitizing manual workflows into streamlined web applications during academic and internship tenures.",
      icon: "Lightbulb",
    },
  ],

  skillCategories: [
    {
      id: "all",
      label: "All Skills",
    },
    {
      id: "frontend",
      label: "Frontend & UI",
    },
    {
      id: "backend",
      label: "Backend & Server",
    },
    {
      id: "it-hardware",
      label: "Hardware & Systems",
    },
    {
      id: "web-core",
      label: "Web Fundamentals",
    },
  ],

  skills: [
    {
      name: "React.js",
      category: "frontend",
      level: 85,
      levelLabel: "Intermediate",
      description: "Component architecture, hooks, state management, and modern SPA development.",
      featured: true,
    },
    {
      name: "Material UI (MUI)",
      category: "frontend",
      level: 88,
      levelLabel: "Proficient",
      description: "Theming, custom styled components, responsive grid layouts, and accessible UI kits.",
      featured: true,
    },
    {
      name: "Tailwind CSS",
      category: "frontend",
      level: 80,
      levelLabel: "Intermediate",
      description: "Utility-first styling, rapid prototyping, flexbox/grid layouts, and responsive design.",
      featured: true,
    },
    {
      name: "JavaScript (ES6+)",
      category: "web-core",
      level: 85,
      levelLabel: "Intermediate",
      description: "DOM manipulation, asynchronous programming (Promises/async-await), and modern syntax.",
      featured: true,
    },
    {
      name: "HTML5 & CSS3",
      category: "web-core",
      level: 90,
      levelLabel: "Advanced",
      description: "Semantic web structuring, CSS animations, responsive media queries, and flexbox/grid.",
      featured: false,
    },
    {
      name: "Node.js",
      category: "backend",
      level: 78,
      levelLabel: "Intermediate",
      description: "Server-side JavaScript environment, npm package orchestration, and RESTful routing.",
      featured: true,
    },
    {
      name: "Fastify",
      category: "backend",
      level: 75,
      levelLabel: "Intermediate",
      description: "High-performance low-overhead HTTP framework for building microservices & REST APIs.",
      featured: true,
    },
    {
      name: "Hardware & Software Troubleshooting",
      category: "it-hardware",
      level: 90,
      levelLabel: "Advanced",
      description: "Diagnosing PC hardware faults, OS issues, RAM/storage upgrades, driver fixes, and software configuration.",
      featured: true,
    },
    {
      name: "Peripheral Installation & Setup",
      category: "it-hardware",
      level: 92,
      levelLabel: "Advanced",
      description: "Network printers, POS barcode scanners, thermal receipt printers, dual monitors, and office peripherals.",
      featured: true,
    },
    {
      name: "Git & GitHub",
      category: "web-core",
      level: 80,
      levelLabel: "Intermediate",
      description: "Version control, commit branching, remote repositories, pull requests, and collaborative code management.",
      featured: false,
    },
    {
      name: "Vercel Deployment",
      category: "frontend",
      level: 82,
      levelLabel: "Proficient",
      description: "Automated Git CI/CD deployments, environment variables, preview branch testing, and custom domains.",
      featured: false,
    },
  ],

  projects: [
    {
      id: "quscina-pos-inventory",
      title: "Web-Based Point of Sales & Inventory System",
      client: "Quscina Restaurant — Kawit, Cavite",
      badge: "Featured Capstone",
      featured: true,
      summary:
        "The study focused on the development and implementation of a Web-Based Point of Sale, aimed at assisting in the daily operation of Quscina Restaurant. The system was created to make records and process different types of transaction and inventory information in an efficient manner through an integrated platform that enabled efficient management of business processes and operational records. The system had a number of modules, which aided in different processes used in restaurants.",
      role: "Lead Full-Stack Developer & Systems Designer",
      timeline: "Academic Capstone Project",
      technologies: ["React.js", "Material UI (MUI)", "Node.js", "Fastify", "REST API", "Responsive UI"],
      modules: [
        {
          title: "Point of Sale & Billing Module",
          detail: "Interactive order entry screen for dine-in and takeout, automatic calculation of taxes/discounts, split bills, and instant order ticket generation.",
        },
        {
          title: "Real-Time Inventory Tracking",
          detail: "Automated ingredient and stock deductions per order item, minimum reorder thresholds with visual alert tags, and stock waste tracking.",
        },
        {
          title: "Menu & Recipe Configuration",
          detail: "Intuitive interface for staff to add new food & beverage items, categorize by cuisine, upload pricing, and toggle out-of-stock items dynamically.",
        },
        {
          title: "Business Analytics & Sales Reports",
          detail: "Summary dashboard showing daily gross revenues, top-selling restaurant dishes, cashier shift reconciliation, and downloadable sales logs.",
        },
        {
          title: "User Role Management",
          detail: "Multi-level access authorization differentiating Cashier order terminals, Kitchen display, and Manager-level administrative analytics.",
        },
      ],
      highlights: [
        "Replaced prone-to-error manual receipt logbooks with synchronized digital receipts.",
        "Prevented stock shortages by introducing automated low-inventory warning triggers.",
        "Engineered with a responsive Material UI design accessible on tablet and desktop terminals.",
      ],
      metrics: [
        { label: "Operation Speed", value: "~60% Faster Checkout" },
        { label: "Inventory Accuracy", value: "Real-time sync" },
        { label: "Key Modules", value: "5 Integrated Modules" },
      ],
    },
    {
      id: "tesda-enrollment-system",
      title: "TESDA Automated Student Enrollment System",
      client: "Noveleta Training Center",
      badge: "Internship Project",
      featured: true,
      summary:
        "Developed and implemented a web-based TESDA enrollment system during internship, eliminating manual paper-based forms and drastically reducing registration turnaround times for trainees.",
      role: "Web Development Intern",
      timeline: "February 2026 – June 2026",
      technologies: ["React.js", "Material UI", "JavaScript", "HTML5", "CSS3"],
      modules: [
        {
          title: "Online Trainee Application Form",
          detail: "Multi-step registration with client-side form validation for personal data, educational attainment, and course selection.",
        },
        {
          title: "Administrative Review Portal",
          detail: "Allows registrar officers to view incoming student submissions, verify requirements, and mark approval status.",
        },
        {
          title: "Automated Registration Reports",
          detail: "Exports student batch rosters into structured lists for government submission compliance.",
        },
      ],
      highlights: [
        "Eliminated physical paper forms, saving office printing resources and shelf storage.",
        "Reduced student registration turnaround time by over 70%.",
        "Designed accessible, user-friendly forms for applicants of all technical levels.",
      ],
      metrics: [
        { label: "Turnaround Time", value: "-70% Reduction" },
        { label: "Paper Reduction", value: "100% Digital" },
      ],
    },
    {
      id: "venue-reservation-system",
      title: "Automated Venue & Facility Reservation System",
      client: "Noveleta Training Center",
      badge: "Internship Project",
      featured: true,
      summary:
        "Engineered a digital reservation platform to manage and automate the scheduling and booking of training facilities, halls, and multimedia equipment, preventing conflicting schedules.",
      role: "Web Development Intern",
      timeline: "February 2026 – June 2026",
      technologies: ["JavaScript", "HTML5", "CSS3", "Tailwind / MUI Principles"],
      modules: [
        {
          title: "Facility Calendar & Availability Viewer",
          detail: "Interactive calendar displaying booked, pending, and open dates for multiple training rooms.",
        },
        {
          title: "Automated Conflict Detection",
          detail: "Prevents double-booking by validating requested date and time blocks against approved slots.",
        },
        {
          title: "Resource & Equipment Checklist",
          detail: "Allows event organizers to bundle projectors, sound systems, and chairs with their room request.",
        },
      ],
      highlights: [
        "Completely eliminated double-booking conflicts across training center facilities.",
        "Provided administrative staff with immediate visibility into hall occupancy schedules.",
      ],
      metrics: [
        { label: "Booking Conflicts", value: "0 Double Bookings" },
        { label: "Staff Scheduling", value: "Automated" },
      ],
    },
  ],

  experience: [
    {
      id: "exp-noveleta",
      company: "Noveleta Training Center",
      location: "Noveleta, Cavite",
      position: "Web Development & IT Support Intern",
      period: "February 2026 – June 2026",
      type: "Internship",
      description:
        "Contributed to both software solutions and physical IT infrastructure, streamlining center operations through custom web applications and maintaining dependable hardware uptime.",
      duties: [
        "Developed and implemented a TESDA enrollment system, eliminating manual paperwork and reducing registration turnaround times.",
        "Developed a Venue Reservation System to manage and automate the scheduling and booking of training facilities.",
        "Performed basic hardware and software troubleshooting and maintenance on office computers and peripherals.",
        "Assisted administrative staff with computer setups, network printer installations, and operating system optimizations.",
        "Conducted preventive maintenance checks on computer lab workstations and multimedia projectors.",
      ],
      skillsUsed: [
        "React.js",
        "Material UI",
        "JavaScript",
        "Hardware Diagnostics",
        "Peripheral Setup",
        "Network Printers",
        "Workflow Automation",
      ],
    },
  ],

  contact: {
    email: "ced@gmail.com",
    responseTime: "Typically replies within 24 hours",
    preferredContact: "Email or LinkedIn",
    location: "Cavite, Philippines (Open to On-Site, Hybrid, and Remote)",
    note: "Feel free to reach out for entry-level developer roles, IT support positions, or freelance inquiries!",
  },
};

