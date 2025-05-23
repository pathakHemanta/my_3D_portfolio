import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "ASP.NET Developer",
    icon: mobile,
  },
  {
    title: "Full Stack Developer",
    icon: backend,
  },
  {
    title: "Java Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Meyer Distributing",
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Present",
    points: [
      "Led migration of legacy ASP.NET Web Forms to ASP.NET Core microservices, ensuring seamless transition and improved performance.",
      "Architected and optimized microservices architecture using API Gateway & reverse proxy, enhancing system scalability.",
      "Designed and implemented a Ticket Management System & Code Release Manager using Angular and ASP.NET Core, improving site speed by 90% and developer productivity by 50%.",
      "Integrated and automated freight quoting and shipment APIs within Meyer’s business system in a TDD environment with NUnit Testing, improving logistics efficiency.",
      "Implemented SEO enhancements and optimized eCommerce sitemaps, improving search visibility and traffic.",
      "Managed database operations, optimizing stored procedures and data integrity in MS SQL Server & SSMS.",
      "Deployed microservices using Azure DevOps CI/CD pipelines, streamlining release management.",
      "Collaborated in an Agile team (5 developers) through an internal system, contributing to sprint planning, retrospectives, and backlog refinement.",
      "Resolved high-priority system issues (HDs) within Meyer’s ordering system, ensuring fixes within 24 hours.",
      "Engineered automated FTP file retrieval and data storage for vendor invoices, eliminating manual data entry.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Technova Global",
    iconBg: "#383E56",
    date: "May 2023 - Dec 2023",
    points: [
      "Developed a talent management platform with Spring and React that streamlined skill tracking and automated project-based talent selection, reducing manual effort by 40%.",
      "Engineered an availability tracking system that identified bench talent in real time, improving resource allocation efficiency by 30%.",
      "Optimized IT Ticketing functionalities and Code releasing platforms, resulting in a 50% increase in efficiency compared to the previous system, fostering rapid feature deployment.",
      "Automated talent-project matching using data-driven algorithms, accelerating the selection process by 50% and enhancing workforce utilization.",
      "Developed a Robust backend for Meyer Logistics using ASP.NET Razor Pages improving order tracking system by 20% and customer satisfaction by 50%.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Freelance",
    iconBg: "#E6DEDD",
    date: "Apr 2021 - Present",
    points: [
      "Demonstrated expertise in building over 25 dynamic websites as a freelancer, utilizing React, and WordPress.",
      "Designed visually appealing and user-friendly interface using Figma, translating client requirements into engaging digital experience.",
      "Successfully fixed bugs, optimized SEO, and improved performance enhancing functionality and user experience.",
      "Worked with diverse industries, spanning from medical to educational institutions, showcasing adaptability and proficiency in various domains.",
      "Maintained a high level of client satisfaction through open communication and proactive problem-solving.",
    ],
  },
  {
    title: "Full-Stack Developer Intern",
    company_name: "IBM Tech Grant",
    iconBg: "#383E56",
    date: "Jan 2022 - May 2023",
    points: [
      "Led a team of developers in desigining and building 20+ static and dynamic visually appealing websites, with a primary focus on back-end development using Spring Boot, Django, NodeJS and REST API.",
      "Utilized Spring Boot and Nodejs to create robust and efficient back-end solutions, handling data processing, user authentication, REST API integrations, and developing performant and scalable server-side applications.",
      "Leveraged GitHub as a central repository to store and manage code, facilitating version control, collaboration, and seamless integration with CI/CD pipelines for efficient development workflows.",
      "Consecutively awarded “Best Team Lead” for motivating teams to achieve project goals (Spring & Fall 2022).",
    ],
  },
  {
    title: "Application Developer Intern",
    company_name: "DXC Technology",
    iconBg: "#E6DEDD",
    date: "Jun 2022 - Aug 2022",
    points: [
      "Created a logging visualization dashboard in AWS CloudWatch for 10,000+ daily app events.",
      "Led OpenSearch log interface development via jira collaboration tool, boosting monitoring efficiency by 30%.",
      "Integrated 15 JavaScript and Python metrics classes for CloudWatch logs, elevating analytics by 20%.",
      "Automated deployment through Jenkins, slashing deployment time by 40%.",
      "Collaborated in Agile team of 52 interns, integrating logging into 4 apps effectively.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "biolinerx",
    description:
      "A visually appealing and user-friendly website for a biopharmaceutical company, built using React, SCSS, NodeJS, and MongoDB.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "CSS, SCSS",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
    ],
    image: "/biolinerx.png",
    source_code_link: "https://bioline-rx-website-785368.netlify.app/",
  },
  {
    name: "accent",
    description:
      "A visually appealing and user-friendly website for a biopharmaceutical company, built using wordpress, html, css, javascript and php",
    tags: [
      {
        name: "wordpress",
        color: "green-text-gradient",
      },
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: "/accent.png",
    source_code_link:
      "https://develop--accent-tx-long-scroll-tall-tower.netlify.app/",
  },
  {
    name: "artbio",
    description:
      "A visually appealing and user-friendly website for a biopharmaceutical company, built using wordpress, html, css, javascript and php",
    tags: [
      {
        name: "wordpress",
        color: "green-text-gradient",
      },
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: "/artbio.png",
    source_code_link: "https://develop--artbio-steel-swordfish.netlify.app/",
  },
  {
    name: "glossaPrep",
    description:
      "A visually appealing and user-friendly website educational consultancy of Nepal, built using React, Tailwind CSS, NodeJS, and MongoDB.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
    ],
    image: "/glossa.png",
    source_code_link: "https://develop--glossaprep.netlify.app/",
  },
  {
    name: "Dtx Pharma",
    description:
      "A visually appealing and user-friendly website for a biopharmaceutical company, built using React, SCSS, NodeJS, and MongoDB.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "CSS, SCSS",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
    ],
    image: "/dtx.png",
    source_code_link: "https://staging--dtxpharma-3224ad.netlify.app/",
  },
  {
    name: "Averitas Pharma",
    description:
      "A visually appealing and user-friendly website for a biopharmaceutical company, built using wordpress, html, css, javascript and php",
    tags: [
      {
        name: "wordpress",
        color: "green-text-gradient",
      },
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: "/averitas.png",
    source_code_link:
      "https://develop--loyal-neptune-unbranded-0f6861.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
