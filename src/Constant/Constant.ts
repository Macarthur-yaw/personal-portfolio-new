

type tools = {
  tool1: string;
  tool2?: string;
  tool3?: string;
  tool4?: string;
};

type Experience = {
  id: number;
  dateRange: string;
  title: string;
  description: string;
  tools: tools[];
};

type projects = {
  id: number;
  title: string;
  description: string;
  tools: tools[];
  link: string;
};

/* ===========================
        EXPERIENCE
=========================== */

export const Experience: Experience[] = [
  {
    id: 1,
    dateRange: "November 2024 – March 2025",
    title: "Backend Engineer – Property Management Console",
    description:
      "Architected and developed microservices using Spring Boot, improved modularity and reduced deployment time by 30%. Built RESTful APIs that increased data flow efficiency by 25%, and implemented unit/integration tests achieving 85% coverage. Diagnosed and resolved production issues, reducing downtime by 15%.",
    tools: [
      {
        tool1: "Spring Boot",
        tool2: "Java",
        tool3: "PostgreSQL",
        tool4: "Docker",
      },
    ],
  },
  {
    id: 2,
    dateRange: "October 2024 – November 2024",
    title: "Software Engineer Intern – AmaliTech",
    description:
      "Refactored and optimized React code for the company’s admin dashboard, improving performance and reusability by 30%. Participated in Agile sprints and collaborated cross-functionally. Built a responsive website for the intern community and presented project updates with a 95% approval rating.",
    tools: [
      {
        tool1: "React",
        tool2: "JavaScript",
        tool3: "Tailwind CSS",
      },
    ],
  },
];

/* ===========================
          PROJECTS
=========================== */

export const projects: projects[] = [
  {
    id: 1,
    title: "Hymnal Application",
    description:
      "A mobile app that makes accessing hymns simple and convenient. It includes an organized hymn library, user accounts, and a smooth, easy-to-use experience across devices.",
    tools: [
      {
        tool1: "React Native",
        tool2: "Express",
        tool3: "MongoDB",
      },
    ],
    link: "https://github.com/Macarthur-yaw",
  },
{
  id: 2,
  title: "Creatives Project Ghana",
  description:
    "A vibrant community platform that celebrates Ghana’s creative spirit. It connects poets, writers, visual artists, and photographers, giving them a space to showcase their work, discover new voices, and be part of a growing creative community.",
  tools: [
    {
      tool1: "Next js",
      tool2: "Sanity",
      tool3: "Tailwind Css",
    },
  ],
  link: "https://www.creativesprojectgh.com/",
}
,
  {
    id: 3,
    title: "AI-Powered University Timetable App",
    description:
      "A modern scheduling app that helps universities create organized, conflict-free timetables. It also includes an AI assistant that helps students quickly find information about their schedules.",
    tools: [
      {
        tool1: "Spring Boot",
        tool2: "React",
        tool3: "OpenAI API",
      },
    ],
    link: "https://github.com/Macarthur-yaw",
  },
];

