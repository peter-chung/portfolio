import { Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const work = [
  {
    title: "Retail Operations Manager",
    company: "GV Fashion",
    location: "Phoenix, AZ",
    period: "Oct 2018 – Present",
  },
  {
    title: "IT Auditor",
    company: "KPMG LLP",
    location: "Tempe, AZ",
    period: "Jun 2017 – Sep 2018",
  },
  {
    title: "IT Auditor Intern",
    company: "KPMG LLP",
    location: "Tempe, AZ",
    period: "Summer 2016",
  },
];

const education = [
  {
    degree: "B.S. Computer Information Systems",
    school: "Arizona State University",
    location: "Tempe, AZ",
    year: "May 2017",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-4xl px-6 py-16">
      <h2 className="text-2xl font-bold tracking-tight mb-8">
        <span className="text-muted-foreground font-mono text-lg mr-2">
          02.
        </span>
        <span className="text-primary">Experience</span>
      </h2>
      <div className="flex flex-col gap-12">
        <div>
          <h3 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6">
            <Briefcase className="size-4 text-primary" />
            Work Experience
            <div className="flex-1 h-px bg-border" />
            <span className="font-normal normal-case tracking-normal">
              {work.length} roles
            </span>
          </h3>
          <div className="flex flex-col">
            {work.map((job, i) => (
              <div key={i}>
                <div className="py-4">
                  <div className="flex items-start justify-between gap-4">
                    <p className="font-medium text-sm">{job.title}</p>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground shrink-0">
                      <Calendar className="size-3" />
                      {job.period}
                    </span>
                  </div>
                  <div className="flex items-start justify-between gap-4 mt-0.5">
                    <p className="text-sm text-primary">{job.company}</p>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground shrink-0">
                      <MapPin className="size-3" />
                      {job.location}
                    </span>
                  </div>
                </div>
                {i < work.length - 1 && <Separator />}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6">
            <GraduationCap className="size-4 text-primary" />
            Education
            <div className="flex-1 h-px bg-border" />
            <span className="font-normal normal-case tracking-normal">
              {education.length} institution
            </span>
          </h3>
          <div className="flex flex-col">
            {education.map((edu, i) => (
              <div key={i} className="py-4">
                <div className="flex items-start justify-between gap-4">
                  <p className="font-medium text-sm">{edu.degree}</p>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground shrink-0">
                    <Calendar className="size-3" />
                    {edu.year}
                  </span>
                </div>
                <div className="flex items-start justify-between gap-4 mt-0.5">
                  <p className="text-sm text-primary">{edu.school}</p>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground shrink-0">
                    <MapPin className="size-3" />
                    {edu.location}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
