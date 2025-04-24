import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
        <span className="text-xl font-bold">The Note Co.</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link href="/order" className="text-sm font-medium transition-colors hover:text-primary">
            Order Now
          </Link>
          <Link href="/terms" className="text-sm font-medium transition-colors hover:text-primary">
            T&C
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/order" className="hidden md:block mr-2">
            <Button>Order Now</Button>
          </Link>
          <nav className="md:hidden ml-2">
            <Button variant="ghost" size="icon" className="h-9 w-9 p-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}
