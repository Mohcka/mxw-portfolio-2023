import {
  CheckIcon,
  HandThumbUpIcon,
  UserIcon,
} from "@heroicons/react/20/solid";
import { Building, HeartPulse, Landmark, BarChart3 } from "lucide-react";

const timeline = [
  {
    id: 1,
    content: "",
    target: "Citi",
    href: "#",
    date: "2023",
    datetime: "2023-06-01",
    icon: Landmark,
    iconBackground: "bg-blue-700",
  },
  {
    id: 2,
    content: "",
    target: "CVS",
    href: "#",
    date: "2022",
    datetime: "2022-12-01",
    icon: HeartPulse,
    iconBackground: "bg-red-700",
  },
  {
    id: 3,
    content: "",
    target: "Revature",
    href: "#",
    date: "2020",
    datetime: "2020-04-01",
    icon: Building,
    iconBackground: "bg-orange-700",
  },
  {
    id: 4,
    content: "",
    target: "PageHub",
    href: "#",
    date: "2018",
    datetime: "2018-07-01",
    icon: BarChart3,
    iconBackground: "bg-cyan-700",
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Experience() {
  return (
    <div>
      <h2 className="text-center text-3xl font-bold mb-20 mt-5">My Journey So Far...</h2>
      <div className="flex justify-center">
        <ul role="list" className="-mb-8 w-full sm:w-96">
          {timeline.map((event, eventIdx) => (
            <li key={event.id}>
              <div className="relative pb-8">
                {eventIdx !== timeline.length - 1 ? (
                  <span
                    className="absolute left-6 top-6 -ml-px h-full w-0.5 bg-gray-400"
                    aria-hidden="true"
                  />
                ) : null}
                <div className="relative flex space-x-3">
                  <div>
                    <span
                      className={classNames(
                        event.iconBackground,
                        "h-12 w-12 rounded-full flex items-center justify-center ring-8 ring-white"
                      )}
                    >
                      <event.icon
                        className="h-8 w-8 text-white"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                  <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                    <div className="flex justify-center items-center">
                      <p className="text-lg text-gray-500">
                        {event.content}{" "}
                        <a
                          href={event.href}
                          className="font-medium text-gray-900"
                        >
                          {event.target}
                        </a>
                      </p>
                    </div>
                    <div className="whitespace-nowrap text-right text-md text-gray-500 flex items-center">
                      <time dateTime={event.datetime}>{event.date}</time>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
