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
import { ProjectsArray } from "@/data/constants/projects";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import Heading from "@/components/heading";

export default function Projects() {
  const projects = useMemo(() => ProjectsArray, []);

  return (
    <div>
      <Heading>Projects I Tinker With in my Spare Time</Heading>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Card className="transition hover:scale-110" key={i}>
            <CardHeader>
              <CardTitle className="hover:text-teal-700 transition cursor-pointer">
                {project.name}
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
                      <Link href={tech.homePageUrl} target="_blank">
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
