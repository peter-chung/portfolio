import { Copyright } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t py-6 mt-8">
      <div className="mx-auto max-w-4xl px-6 flex items-center justify-center gap-1 text-xs text-muted-foreground">
        <Copyright className="size-3" />
        <span>
          {new Date().getFullYear()}{" "}
          <span className="text-primary">Peter Chung</span>. All rights
          reserved.
        </span>
      </div>
    </footer>
  );
}
