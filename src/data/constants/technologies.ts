export interface Technology {
  name: string;
  color: string;
  homePageUrl?: string;
}

export const technologies = {
  React: {
    name: "React",
    color: "#61DBFB",
    homePageUrl: "https://reactjs.org/",
  },
  Serverless: {
    name: "Serverless",
    color: "#FD5750",
    homePageUrl: "https://www.serverless.com/",
  },
  Nextjs: {
    name: "Next.js",
    color: "#000000",
    homePageUrl: "https://nextjs.org/",
  },
  AWS: {
    name: "AWS",
    color: "#FF9900",
    homePageUrl: "https://aws.amazon.com/",
  },
  MongoDB: {
    name: "MongoDB",
    color: "#47A248",
    homePageUrl: "https://www.mongodb.com/",
  },
  MySQL: {
    name: "MySQL",
    color: "#00718B",
    homePageUrl: "https://www.mysql.com/",
  },
  PostgreSQL: {
    name: "PostgreSQL",
    color: "#336791",
    homePageUrl: "https://www.postgresql.org/",
  },
  FullStack: { name: "Full Stack", color: "#FF6F61" },
  Authentication: {
    name: "Authentication",
    color: "#3A3A3A",
  },
  OAuth: {
    name: "OAuth",
    color: "#3C4A9F",
    homePageUrl: "https://oauth.net/2/",
  },
  Microservices: {
    name: "Microservices",
    color: "#2E83C6",
  },
  Angular: {
    name: "Angular",
    color: "#DD0031",
    homePageUrl: "https://angular.io/",
  },
  NET: {
    name: ".NET",
    color: "#512BD4",
    homePageUrl: "https://dotnet.microsoft.com/",
  },
  ResponsiveDesign: {
    name: "Responsive Design",
    color: "#2C3E50",
  },
  TypeScript: {
    name: "TypeScript",
    color: "#3178C6",
    homePageUrl: "https://www.typescriptlang.org/",
  },
  TailwindCSS: {
    name: "Tailwind CSS",
    color: "#38B2AC",
    homePageUrl: "https://tailwindcss.com/",
  },
  AI: { name: "AI", color: "#FF6F00" },
  ChatGPT: {
    name: "ChatGPT",
    color: "#5A67D8",
    homePageUrl: "https://openai.com/",
  },
  Replicate: {
    name: "Replicate",
    color: "#2D3748",
    homePageUrl: "https://replicate.com/",
  },
  Nodejs: {
    name: "Node.js",
    color: "#8CC84B",
    homePageUrl: "https://nodejs.org/",
  },
  Bulma: { name: "Bulma", color: "#00D1B2", homePageUrl: "https://bulma.io/" },
  EFCore: {
    name: "EF Core",
    color: "#8E2BA9",
    homePageUrl: "https://github.com/dotnet/efcore",
  },
  Prisma: {
    name: "Prisma",
    color: "#0C344B",
    homePageUrl: "https://www.prisma.io/",
  },
};

export type TechIcon = {
  name: string;
  iconUrl: string;
};

export const techIcons = [
  {
    name: "React",
    iconUrl: "/react.svg",
  },
  {
    name: "Next.js",
    iconUrl: "/nextjs.svg",
  },
  {
    name: "Tailwind CSS",
    iconUrl: "/tailwind.svg",
  },
  {
    name: "C Sharp",
    iconUrl: "/c-sharp.svg",
  },
  {
    name: "AWS",
    iconUrl: "/amazonaws.svg",
  },
  {
    name: "MySQL",
    iconUrl: "/mysql.svg",
  },
  {
    name: "MongoDB",
    iconUrl: "/mongodb.svg",
  },
  {
    name: "Prisma",
    iconUrl: "/prisma.svg",
  },
  {
    name: "GraphQL",
    iconUrl: "/graphql.svg",
  },
  {
    name: "TypeScript",
    iconUrl: "/typescript.svg",
  },
  {
    name: "API",
    iconUrl: "/api.svg",
  },
  {
    name: "Angular",
    iconUrl: "/angular.svg",
  },
  {
    name: "Azure",
    iconUrl: "/azure.svg",
  },
  {
    name: "CSS3",
    iconUrl: "/css3.svg",
  },
  {
    name: "Docker",
    iconUrl: "/docker.svg",
  },
  {
    name: "DotNet",
    iconUrl: "/dotnet.svg",
  },
  {
    name: "Gatsby",
    iconUrl: "/gatsby.svg",
  },
  {
    name: "HTML5",
    iconUrl: "/html5.svg",
  },
  {
    name: "JavaScript",
    iconUrl: "/javascript.svg",
  },
  {
    name: "NestJS",
    iconUrl: "/nestjs.svg",
  },
  {
    name: "NodeJS",
    iconUrl: "/nodejs.svg",
  },
  {
    name: "OpenAI",
    iconUrl: "/openai.svg",
  },
  {
    name: "Postgres",
    iconUrl: "/postgres.svg",
  },
  {
    name: "Serverless",
    iconUrl: "/serverless.svg",
  },
  {
    name: "Stripe",
    iconUrl: "/stripe.svg",
  },
  {
    name: "Unity",
    iconUrl: "/unity.svg",
  },
  {
    name: "Vercel",
    iconUrl: "/vercel.svg",
  },
];

