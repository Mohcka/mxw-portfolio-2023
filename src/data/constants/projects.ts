import { technologies, type Technology } from "./technologies";

export const projects = {
  Kalaido: {
    name: "Kalaido",
    subtitle: "SaaS AI content generation platform",
    description:
      "Kalaido is a SaaS platform that uses AI to generate content for your website. It's like having a team of writers at your disposal 24/7.",
    technologies: [
      technologies.AI,
      technologies.ChatGPT,
      technologies.Replicate,
      technologies.React,
      technologies.Serverless,
      technologies.Nextjs,
      technologies.TailwindCSS,
      technologies.Authentication,
      technologies.OAuth,
      technologies.FullStack,
      technologies.ResponsiveDesign,
    ] as Technology[],
    color: "#FF6F61",
  },
  Commersify: {
    name: "Commersify",
    subtitle: "An e-commerce platform for small businesses",
    description:
      "Commersify is an e-commerce platform that allows small businesses create their own online store in minutes.",
    technologies: [
      technologies.React,
      technologies.Serverless,
      technologies.Nextjs,
      technologies.TailwindCSS,
      technologies.Authentication,
      technologies.OAuth,
      technologies.FullStack,
      technologies.ResponsiveDesign,
    ] as Technology[],
    color: "#FF6F61",
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
      technologies.TailwindCSS,
      technologies.Authentication,
      technologies.OAuth,
      technologies.FullStack,
      technologies.ResponsiveDesign,
    ] as Technology[],
    color: "#FF6F61",
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
  },
};


export const ProjectsArray = Object.values(projects);

const obj1 = {
  name1: {
    name: "name1",
    id: "id1"
  },
  name2: {
    name: "name2",
  }
}


const obj = {
  thing1: [obj1.name1, obj1.name2]
}