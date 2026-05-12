import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const linkIcons: Record<string, React.ReactNode> = {
  Site: <ExternalLink className="size-3" />,
  GitHub: <FaGithub className="size-3" />,
};

const projects = [
  {
    title: "SwoleMate",
    description:
      "Workout tracking app with a shared public feed so users can view each other's sessions. Installable as a Progressive Web App for a native app experience on mobile, backed by Supabase for auth and real-time data.",
    stack: ["TypeScript", "Next.js", "PostgreSQL", "Supabase", "React"],
    links: [
      { label: "Site", href: "https://swole-mate-mu.vercel.app" },
      { label: "GitHub", href: "https://github.com/peter-chung/swole-mate" },
    ],
  },
  {
    title: "FollowFilter",
    description:
      "Chrome extension for Twitch that lets users filter and hide followed streamers by category. Works across the following page and sidebar. Pending publication on the Chrome Web Store.",
    stack: ["JavaScript", "Chrome Extension API", "Manifest V3", "HTML", "CSS"],
    links: [
      { label: "GitHub", href: "https://github.com/peter-chung/FollowFilter" },
    ],
  },
  {
    title: "Watchdog",
    description:
      "Web content monitor that uses CSS selectors to track specific page elements for changes. Sends email alerts when changes are detected, powered by a scheduled Python FastAPI backend and Resend for delivery.",
    stack: ["Python", "FastAPI", "TypeScript", "Next.js", "Supabase", "Resend"],
    links: [
      { label: "Site", href: "https://watch-dog-seven.vercel.app" },
      { label: "GitHub", href: "https://github.com/peter-chung/watch-dog" },
    ],
  },
  {
    title: "UFC Events Schedule & API",
    description:
      "No official public API exists for UFC event data, so I scraped and built one. Processes raw event schedules into a clean REST API with a React frontend for display.",
    stack: ["JavaScript", "Express", "MongoDB", "React", "Next.js", "Cheerio", "Mongoose"],
    links: [
      { label: "Site", href: "https://fyte-center.vercel.app" },
      { label: "GitHub", href: "https://github.com/peter-chung/fyte-center" },
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-4xl px-6 py-16">
      <h2 className="text-2xl font-bold tracking-tight mb-8">
        <span className="text-muted-foreground font-mono text-lg mr-2">
          01.
        </span>
        <span className="text-primary">Projects</span>
      </h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.title} className="flex flex-col">
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription className="flex-1">{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4 mt-auto">
              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="font-mono text-xs"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {project.links.map((link) => (
                  <Button
                    key={link.label}
                    variant={link.label === "Site" ? "default" : "outline"}
                    size="sm"
                    className="w-24"
                    asChild
                  >
                    <Link
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {linkIcons[link.label]}
                      {link.label}
                    </Link>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
