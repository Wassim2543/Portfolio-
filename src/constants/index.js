import { audio } from "motion/react-client";

export const myProjects = [
  {
    id: 1,
title: "National Travel Booking System",
description:
  "A centralized platform that allows users to search, book, and manage national travel services, including transportation and trip reservations.",
subDescription: [
  "Developed a scalable travel booking system using ASP.NET Core MVC for managing trips, bookings, and users.",
  "Implemented secure authentication, role-based access, and data persistence with ASP.NET Core Identity and Entity Framework Core.",
  "Built a responsive and clean user interface using Tailwind CSS to ensure a smooth booking experience across devices.",
  "Integrated payment processing, location-based search, and booking management to enhance system functionality."
],
    href: "https://github.com/Wassim2543/Booking-sys",
    logo: "",
    image: "/assets/projects/Booking system.png",
    tags: [
      {
        id: 1,
        name: "NodeJS",
        path: "/assets/logos/nodejs.svg",
      },
      {
        id: 2,
        name: "html5",
        path: "/assets/logos/html5.svg",
      },
      {
        id: 3,
        name: "sql",
        path: "/assets/logos/sql.svg",
      },
      {
        id: 4,
        name: "css3",
        path: "/assets/logos/css3.svg",
      },
    ],
  },
  {
    id: 3,
title: "Music Production & Audio Processing",
description:
  "A personal project combining music production with basic audio processing and sound design.",
subDescription: [
  "Produced original music using digital audio workstations and sound design tools.",
  "Worked with audio effects such as EQ, compression, and mixing techniques.",
  "Explored basic audio processing concepts and file handling.",
  "Published and shared tracks online as part of a creative portfolio."
],

    href: "https://www.youtube.com/watch?v=PGhgSE421bE",
    logo: "",
    image: "/assets/projects/fl.png",
    audio: "/assets/Audio/vol1.mp3",
    tags: [
      {
        id: 1,
        name: "FlStudio",
        path: "/assets/logos/flstudio.svg",

      },
    ],
  },
  {
    id: 4,
title: "C++ Game",
description:
  "A C++ game project focused on building interactive gameplay and real-time graphics.",
subDescription: [
  "Developed game logic and rendering using C++ and SFML library.",
  "Implemented basic physics, collision detection, and player interactions.",
  "Added gameplay features such as movement, scoring, and simple effects.",
  "Optimized performance for smooth gameplay and responsive controls."
],
    href: "https://github.com/Wassim2543/FirstGamecpp.git",
    logo: "",
    image: "/assets/projects/game.png",
    tags: [
      {
        id: 1,
        name: "C++",
        path: "/assets/logos/cplusplus.svg",
      },
      {
        id: 4,
        name: "Microsoft",
        path: "/assets/logos/microsoft.svg",
      },
    ],
  },
  {
  id: 5,
title: "Web Application Penetration Testing",
description:
  "A hands-on cybersecurity project focused on identifying and mitigating vulnerabilities in web applications.",
subDescription: [
  "Performed security assessments on web applications to identify common vulnerabilities such as SQL injection, XSS, and CSRF.",
  "Used tools like Burp Suite, Nmap, and wireshark for vulnerability scanning and testing.",
  "Analyzed findings and provided actionable recommendations to improve application security.",
  "Documented the testing process and results to demonstrate security improvements and risk mitigation."
]
,
    href: "",
    logo: "",
    image: "/assets/projects/burp.png",
    tags: [
      {
        id: 1,
        name: "Burp Suite",
        path: "/assets/logos/burp.svg",
      },
      {
        id: 2,
        name: "nmap",
        path: "/assets/logos/nmap.svg",
      },
      {
        id: 3,
        name: "linux",
        path: "/assets/logos/linux.svg",
      },
      {        id: 4,
        name: "wireshark",
        path: "/assets/logos/wireshark.svg",
      },
    ],
  },
 {
    id: 6,
title: "Kanban Board Application",
description:
  "A desktop application to manage tasks visually using the Kanban methodology, improving productivity and workflow organization.",
subDescription: [
  "Developed a desktop web application with a user-friendly interface for creating, moving, and managing tasks.",
  "Implemented drag-and-drop functionality for task cards to reflect workflow stages.",
  "Added features like task priorities, deadlines, and status updates for effective project management.",
  "Optimized the application for smooth performance and responsive interactions."
],

    href: "https://github.com/Wassim2543/Kanban-board",
    logo: "",
    image: "/assets/projects/kanban.png",
    tags: [
      {
        id: 1,
        name: "react",
        path: "/assets/logos/react.svg",
      },
      {
        id: 4,
        name: "vite",
        path: "/assets/logos/vitejs.svg",
      },
    ],
  },
];

export const mySocials = [
  {
    name: "Telegram",
    href: "https://t.me/No1onehehe",
    icon: "/assets/socials/telegram.svg",
  },
  {
    name: "Discord",
    href: "https://discord.com/users/1022515289914621952",
    icon: "/assets/socials/discord.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/notmenomoor",
    icon: "/assets/socials/instagram.svg",
  },
];

export const experiences = [
  {
    title: "Software Developer",
    job: "Security & Defense Projects",
    date: "2021-2023",
    contents: [
      "Developed secure applications and features for defense projects, following best practices in cybersecurity.",
      "Built and integrated robotics control systems for industrial and defense applications.",
      "Designed interactive map interfaces with MapsUI for precise monitoring and real-time data visualization.",
      "Enhanced application responsiveness and usability using WPF and Windows Forms.",
      "Implemented dynamic data visualization using XML to SVG conversions with X-DOM.",
    ],
  },
  {
    title: "Back-End Developer",
    job: "Automotive Industry",
    date: "2023-2024",
    contents: [
      "Developed robust back-end systems for vehicle telemetry, diagnostics, and remote control.",
      "Engineered APIs and databases to handle large-scale vehicle and sensor data securely.",
      "✅ Ensured cybersecurity compliance for vehicle-to-cloud communication using industry protocols.",
      "✅ Delivered real-time features like over-the-air updates, telemetry monitoring, and remote operations.",
      "✅ Optimized system performance and scalability for automotive IoT applications.",
    ],
  },
  {
    title: "Freelance Developer",
    job: "Self-Employed",
    date: "2025-Present",
    contents: [
      "Built a personal portfolio showcasing backend projects, robotics experiments, and cybersecurity applications using Three.js, React, and Vite.",
      "Continuously learning and implementing advanced robotics control, secure system design, and scalable backend solutions.",
      "Exploring integration of IoT, robotics, and secure data pipelines for real-world applications.",
    ],
  },
];

export const reviews = [
  {
    name: "Liam",
    username: "@liam",
    body: "Absolutely amazing work! Learned a lot from your projects.",
    img: "https://robohash.org/liam",
  },
  {
    name: "Sofia",
    username: "@sofia",
    body: "Travail incroyable ! Les projets sont clairs et bien expliqués.",
    img: "https://robohash.org/sofia",
  },
  {
    name: "Hiro",
    username: "@hiro",
    body: "Your portfolio is inspiring. Great attention to detail!",
    img: "https://robohash.org/hiro",
  },
  {
    name: "Aisha",
    username: "@aisha",
    body: "عمل رائع! أحببت طريقة عرض المشاريع.",
    img: "https://robohash.org/aisha",
  },
  {
    name: "Carlos",
    username: "@carlos",
    body: "Excellent work! Very professional and well-organized.",
    img: "https://robohash.org/carlos",
  },
  {
    name: "Fatima",
    username: "@fatima",
    body: "مشاريع ممتازة وواضحة. استمتعت بمراجعتها.",
    img: "https://robohash.org/fatima",
  },
  {
    name: "Noah",
    username: "@noah",
    body: "Great portfolio! Very helpful for learning new skills.",
    img: "https://robohash.org/noah",
  },
  {
    name: "Elena",
    username: "@elena",
    body: "Portfolio impressionnant ! Continuez comme ça.",
    img: "https://robohash.org/elena",
  },
];
