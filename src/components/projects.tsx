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

const people = [
  {
    name: "Jane Cooper",
    title: "Kalido",
    role: "Admin",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  // More people...
];

export default function Projects() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {Array(6)
        .fill(people[0])
        .map((person, i) => (
          <Card key={i}>
            <CardHeader>
              <CardTitle>{person.title}</CardTitle>
              <CardDescription>{person.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <div>
                <Badge variant="outline">{person.role}</Badge>
              </div>
            </CardFooter>
          </Card>
        ))}
    </div>
  );
}
