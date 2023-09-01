import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/shadcn/ui/card";
import { Badge } from "@/components/shadcn/ui/badge";
import { useMemo } from "react";
import { ProjectsArray, SourceStatus } from "@/data/constants/projects";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import Heading from "@/components/heading";
import { FaGithub } from "react-icons/fa";
import {
  Tooltip,
  TooltipTrigger,
  TooltipProvider,
  TooltipContent,
} from "./shadcn/ui/tooltip";
import { cn } from "@/lib/shadcn/utils";

export default function Projects() {
  const projects = useMemo(() => ProjectsArray, []);

  return (
    <div>
      <Heading>Projects</Heading>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Card className="transition hover:scale-110" key={i}>
            <CardHeader>
              <CardTitle className="  ">
                <div className="flex justify-between items-center">
                  {project.sourceStatus !== SourceStatus.CodeOnly ? (
                    <div className="flex">
                      <Link
                        href={project.projectLink ?? "#"}
                        className="text-teal-700 hover:text-primary cursor-pointer transition"
                      >
                        <h2>{project.name}</h2>
                      </Link>
                    </div>
                  ) : (
                    <div className="flex">
                      <h2>{project.name}</h2>
                    </div>
                  )}
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Link
                          href={project.githubLink}
                          className="text-teal-700 hover:text-primary cursor-pointer transition"
                          aria-label={project.name}
                        >
                          <FaGithub size={40} />
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Check out the Code</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                {project.sourceStatus && (
                  <div>
                    <Badge
                      className={cn("inline", {
                        "bg-red-900":
                          project.sourceStatus === SourceStatus.Live,
                      })}
                    >
                      {project.sourceStatus}
                    </Badge>
                  </div>
                )}
              </CardTitle>

              <CardDescription>{project.subtitle}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{project.description}</p>
            </CardContent>
            <CardFooter>
              <div>
                {project.technologies.map((tech, i) => (
                  <div className="inline-block mr" key={i}>
                    {tech.homePageUrl ? (
                      <Link
                        href={tech.homePageUrl}
                        target="_blank"
                        aria-label={project.name}
                      >
                        <Badge
                          className="h-7 mb-2 mr-2 text-sm transition hover:text-white hover:bg-gray-700 hover:border-slate-700"
                          variant="outline"
                          style={{ borderColor: tech.color }}
                        >
                          {tech.name}
                          <ExternalLink size={24} className="pl-2 py-0 m-0" />
                        </Badge>
                      </Link>
                    ) : (
                      <Badge
                        className="h-7 mb-2 mr-2 text-sm transition hover:text-white hover:bg-gray-700 hover:border-slate-700"
                        variant="outline"
                        style={{ borderColor: tech.color }}
                      >
                        {tech.name}
                      </Badge>
                    )}
                  </div>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
