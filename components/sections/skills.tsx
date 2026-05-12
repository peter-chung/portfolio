import { Code2, Monitor, Server, Database, Wrench } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { LucideIcon } from "lucide-react";

const skills: { category: string; icon: LucideIcon; items: string[] }[] = [
  {
    category: "Languages",
    icon: Code2,
    items: ["Python", "JavaScript", "TypeScript", "SQL"],
  },
  {
    category: "Frontend",
    icon: Monitor,
    items: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    category: "Backend",
    icon: Server,
    items: ["Node.js", "Express", "FastAPI", "Cheerio", "REST API"],
  },
  {
    category: "Data",
    icon: Database,
    items: ["PostgreSQL", "MongoDB", "Mongoose", "Supabase"],
  },
  {
    category: "Tools",
    icon: Wrench,
    items: ["Git", "GitHub", "Vercel", "Render", "Postman"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-4xl px-6 py-16">
      <h2 className="text-2xl font-bold tracking-tight mb-8">
        <span className="text-muted-foreground font-mono text-lg mr-2">
          03.
        </span>
        <span className="text-primary">Skills</span>
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group) => (
          <Card key={group.category} size="sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                <group.icon className="size-3.5" />
                {group.category}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Badge key={item} variant="outline" className="font-mono">
                    {item}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
