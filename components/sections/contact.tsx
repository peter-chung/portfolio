import Link from "next/link";
import { Mail, FileText } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IconType } from "react-icons";
import { LucideIcon } from "lucide-react";

const contacts: { label: string; href: string; icon: IconType | LucideIcon }[] =
  [
    { label: "Email", href: "mailto:pchung.dev@gmail.com", icon: Mail },
    { label: "Resume", href: "https://drive.google.com/file/d/14EYO-wzq2DGu6suK5HxOnSH_0Zumbdj3/view?usp=sharing", icon: FileText },
    { label: "GitHub", href: "https://github.com/peter-chung", icon: FaGithub },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/peter-chung-621610a6/",
      icon: FaLinkedin,
    },
  ];

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-4xl px-6 py-16">
      <h2 className="text-2xl font-bold tracking-tight mb-2">
        <span className="text-muted-foreground font-mono text-lg mr-2">
          04.
        </span>
        <span className="text-primary">Contact</span>
      </h2>
      <p className="text-muted-foreground mb-8">
        Open to new opportunities. Feel free to reach out.
      </p>
      <ul className="grid grid-cols-2 gap-x-10 gap-y-3 w-fit">
        {contacts.map((contact) => (
          <li key={contact.label}>
            <Link
              href={contact.href}
              target={contact.label !== "Email" ? "_blank" : undefined}
              rel={
                contact.label !== "Email" ? "noopener noreferrer" : undefined
              }
className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors w-fit"
            >
              <contact.icon className="size-4" />
              {contact.label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
