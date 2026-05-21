"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useActiveSection } from "@/components/active-section-context";

export default function Hero() {
  const { setActive } = useActiveSection();

  function navigateTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    history.pushState(null, "", `#${id}`);
    setActive(id);
  }

  return (
    <section className="mx-auto max-w-4xl px-6 py-24 sm:py-32">
      <p className="text-2xl text-muted-foreground font-mono mb-4">
        👋 Hello, I&apos;m
      </p>
      <h1 className="text-6xl sm:text-8xl tracking-tight mb-4 font-(family-name:--font-brand)">
        Peter <span className="text-primary">Chung</span>
      </h1>
      <p className="text-2xl sm:text-4xl tracking-widest uppercase mb-6 font-(family-name:--font-brand)">
        Software <span className="text-primary">Engineer</span>
      </p>
      <p className="text-sm text-muted-foreground max-w-xl leading-relaxed mb-8">
        I build full-stack web applications and enjoy solving real-world problems
        through code. My background spans IT auditing at KPMG and business
        operations. I aim to build software that is simple, reliable, and leaves
        a lasting impression on the people using it. Currently open to new
        opportunities.
      </p>
      <div className="flex flex-wrap gap-3">
        <Button size="lg" onClick={() => navigateTo("projects")}>
          View Projects
        </Button>
<Button size="lg" variant="outline" asChild>
          <Link href="https://drive.google.com/file/d/14EYO-wzq2DGu6suK5HxOnSH_0Zumbdj3/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            Resume
          </Link>
        </Button>
      </div>
    </section>
  );
}
