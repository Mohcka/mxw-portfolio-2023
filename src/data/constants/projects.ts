import { technologies, type Technology } from "./technologies";

export enum SourceStatus {
  CodeOnly = "Code-Only",
  Live = "Live",
  Concept = "Concept",
}

export const projects = {
  Kalaido: {
    name: "Kalaido",
    subtitle: "SaaS AI content generation platform",
    description:
      "Kalaido is a SaaS platform that uses AI to generate content for your project. It's like having a team of writers/designers at your disposal 24/7.",
    technologies: [
      technologies.AI,
      technologies.ChatGPT,
      technologies.Replicate,
      technologies.React,
      technologies.Serverless,
      technologies.Nextjs,
      technologies.PostgreSQL,
      technologies.TailwindCSS,
      technologies.Authentication,
      technologies.OAuth,
      technologies.FullStack,
      technologies.ResponsiveDesign,
    ] as Technology[],
    color: "#FF6F61",
    githubLink: "https://github.com/Mohcka/kalaido",
    roadmapLink: "",
    sourceStatus: SourceStatus.Live,
    projectLink: "",
  },
  Commersify: {
    name: "Commersify (Admin Portal)",
    subtitle: "An e-commerce platform for small businesses",
    description:
      "Commersify is an e-commerce platform that allows small businesses create their own online store in minutes.",
    technologies: [
      technologies.React,
      technologies.Serverless,
      technologies.Nextjs,
      technologies.PostgreSQL,
      technologies.Prisma,
      technologies.TailwindCSS,
      technologies.Authentication,
      technologies.OAuth,
      technologies.FullStack,
      technologies.ResponsiveDesign,
      technologies.PublicAPI,
      technologies.ContentUpload,
      technologies.DarkMode,
      technologies.Microservices,
    ] as Technology[],
    color: "#FF6F61",
    githubLink: "https://github.com/Mohcka/commersify-admin",
    roadmapLink: "",
    sourceStatus: SourceStatus.Concept,
    projectLink: "",
  },
  CommersifyShop: {
    name: "Commersify (Consumer Portal)",
    subtitle: "An e-commerce front-end for shoppers",
    description:
      "A consumer-facing portal, offering a seamless shopping experience for users. It integrates with the main platform, allowing shoppers to browse products, make purchases, and manage their orders with ease.",
    technologies: [
      technologies.React,
      technologies.Nextjs,
      technologies.TailwindCSS,
      technologies.ResponsiveDesign,
      technologies.Stripe,
    ] as Technology[],
    color: "#FF6F61",
    githubLink: "https://github.com/Mohcka/commersify-store-front",
    roadmapLink: "",
    sourceStatus: SourceStatus.Concept,
    projectLink: "",
  },
  EpicFlix: {
    name: "EpicFlix",
    subtitle: "Watch movies and TV shows online",
    description:
      "EpicFlix is a streaming service that allows you to watch movies and TV shows online.",
    technologies: [
      technologies.React,
      technologies.Serverless,
      technologies.Nextjs,
      technologies.PostgreSQL,
      technologies.Prisma,
      technologies.TailwindCSS,
      technologies.Authentication,
      technologies.OAuth,
      technologies.FullStack,
      technologies.ResponsiveDesign,
      technologies.ServerStateManagement,
    ] as Technology[],
    color: "#FF6F61",
    githubLink: "https://github.com/Mohcka/epic-flix",
    roadmapLink: "",
    sourceStatus: SourceStatus.Concept,
    projectLink: "",
  },
  CampSite: {
    name: "CampSite",
    subtitle: "A campground reservation app",
    description:
      "CampSite is a campground reservation app that allows you to book a campsite online.",
    technologies: [
      technologies.NET,
      technologies.Angular,
      technologies.PostgreSQL,
      technologies.Authentication,
      technologies.Bulma,
      technologies.FullStack,
      technologies.ResponsiveDesign,
      technologies.EFCore,
    ] as Technology[],
    color: "#FF6F61",
    githubLink:
      "https://github.com/revature042020-michwong98/rvtr-app-campsite",
    roadmapLink: "",
    sourceStatus: SourceStatus.CodeOnly,
    projectLink: "",
  },
};

export const ProjectsArray = Object.values(projects);

const obj1 = {
  name1: {
    name: "name1",
    id: "id1",
  },
  name2: {
    name: "name2",
  },
};

const obj = {
  thing1: [obj1.name1, obj1.name2],
};
