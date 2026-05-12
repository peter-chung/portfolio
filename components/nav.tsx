"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Logo from "@/components/logo";
import { Menu, X } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useActiveSection } from "@/components/active-section-context";

const links = [
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const { active, setActive } = useActiveSection();
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!open) return;
    function handleClickOutside(e: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  function handleHomeClick() {
    window.scrollTo({ top: 0, behavior: "smooth" });
    history.pushState(null, "", "/");
    setActive(null);
    setOpen(false);
  }

  function handleSectionClick(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    history.pushState(null, "", `#${id}`);
    setActive(id);
    setOpen(false);
  }

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60"
    >
      <div className="mx-auto max-w-4xl px-6 flex h-14 items-center justify-between">
        <Link href="/" aria-label="Home">
          <Logo />
        </Link>
        <div className="flex items-center gap-6">
          <nav>
            <ul className="hidden sm:flex items-center gap-6">
              <li>
                <button
                  onClick={handleHomeClick}
                  className={cn(
                    "text-sm transition-colors cursor-pointer",
                    active === null
                      ? "text-primary font-medium"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  Home
                </button>
              </li>
              {links.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleSectionClick(link.id)}
                    className={cn(
                      "text-sm transition-colors cursor-pointer",
                      active === link.id
                        ? "text-primary font-medium"
                        : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center gap-2">
            <ModeToggle />
            <Button
              variant="ghost"
              size="icon-sm"
              className="sm:hidden"
              onClick={() => setOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              {open ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      {open && (
        <div className="sm:hidden border-t bg-background">
          <ul className="mx-auto max-w-4xl px-6 py-2 flex flex-col">
            <li>
              <button
                onClick={handleHomeClick}
                className={cn(
                  "w-full py-3 text-sm transition-colors text-left border-b border-border",
                  active === null
                    ? "text-primary font-medium"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                Home
              </button>
            </li>
            {links.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => handleSectionClick(link.id)}
                  className={cn(
                    "w-full py-3 text-sm transition-colors text-left border-b border-border last:border-0",
                    active === link.id
                      ? "text-primary font-medium"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
