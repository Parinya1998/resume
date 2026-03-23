import avatar from "../assets/avatar.jpg";

export const resume = {
  name: "ปริญญา เข็มทอง",
  nameEn: "Parinya Khemthong",
  position: "Full-Stack Developer",
  avatar: avatar,
  email: "parinya.earth98@gmail.com",
  phone: "0831598802",
  location: "Uttaradit, Thailand",
  github: "https://github.com/Parinya1998",
  linkedin: "https://www.linkedin.com/in/parinya-khemthong-7914a8341/",

  profile: `Full-Stack developer with 3 years of experience building web applications from requirements using modern frameworks. Strong in troubleshooting, debugging, and delivering reliable features on time. Currently seeking a Backend Developer role to focus on server-side development, APIs, and scalable systems.`,

  skills: [
    {
      category: "Frontend",
      icon: "🖥️",
      items: ["React", "Angular", "TypeScript", "TailwindCSS", "HTML / CSS"],
    },
    {
      category: "Backend",
      icon: "⚙️",
      items: ["Node.js", "Spring Boot", "Python", "REST API", "Batch Jobs"],
    },
    {
      category: "Database",
      icon: "🗄️",
      items: ["PostgreSQL", "Oracle", "MySQL", "MongoDB"],
    },
    {
      category: "DevOps & Cloud",
      icon: "☁️",
      items: ["Docker", "Linux"],
    },
  ],

  tools: [
    { name: "VS Code", icon: "💻" },
    { name: "IntelliJ IDEA", icon: "💻" },
    { name: "Git / SourceTree", icon: "🐙" },
    { name: "Dbeaver", icon: "🗄️" },
    { name: "FileZilla", icon: "📁" },
    { name: "Docker", icon: "🐳" },
    { name: "Postman", icon: "📬" },
    { name: "Linux", icon: "🐧" },
  ],

  experience: [
    {
      company: "GREEN MOUNT CO., LTD",
      position: "Full-Stack Developer",
      period: "Jun 2023 - Present",
      description: [
        "Developed and maintained web applications using React and Angular with TypeScript.",
        "Developed backend services using Node.js and Spring Boot, ensuring efficient data processing and API performance.",
        "Collaborated with cross-functional teams to design and implement new features.",
        "Identified and resolved issues to optimize system performance, and contributed to the development of RESTful APIs and batch jobs to support business requirements.",
        "Implemented database solutions using PostgreSQL and Oracle, ensuring data integrity and performance.",
        "Designed and implemented Stored Procedures and SQL queries for efficient data retrieval and manipulation.",
        "Deployed and managed applications using Docker for consistent and reliable environments.",
      ],
    },
    {
      company: "Faculty of Engineering, Naresuan University (Senior Project)",
      position: "Backend Developer",
      period: "Jan 2021 – May 2021",
      description: [
        "Detection system of motorcyclist without helmet (Program + Web Application) using Python, React and Node.js",
        "Designed and implemented a detection program using Python image processing. Additionally, designed and developed the preliminary database structure for the system",
      ],
    },
  ],

  education: [
    {
      institution: "Naresuan University",
      degree: "Bachelor of Engineering – Computer Engineering",
      period: "2017 – 2021",
      gpa: "2.68",
    },
    {
      institution: "Uttaradit School",
      degree: "High School",
      period: "2011 – 2017",
      gpa: "3.80",
    },
  ],
};
