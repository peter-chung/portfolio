import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
<h1 className="text-8xl sm:text-9xl font-black tracking-tight mb-4 font-(family-name:--font-brand)">
        4<span className="text-primary">0</span>4
      </h1>
      <p className="text-lg font-semibold mb-2">Page not found</p>
      <p className="text-sm text-muted-foreground mb-8 max-w-sm">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Button asChild>
        <Link href="/">Go Home</Link>
      </Button>
    </div>
  )
}
