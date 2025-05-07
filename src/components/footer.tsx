import Link from "next/link"
import { Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="py-12 px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex flex-col gap-2 group">
            <Link href="/" className="text-lg font-bold relative inline-block">
              The Note Co.
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <p className="text-sm text-muted-foreground">Premium customized stone paper notebooks.</p>
          </div>

          <div className="flex flex-wrap gap-6 md:gap-8">
            <Link href="/order" className="text-sm hover:text-primary transition-colors duration-300 relative group">
              Order Now
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/terms" className="text-sm hover:text-primary transition-colors duration-300 relative group">
              Terms & Conditions
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/privacy" className="text-sm hover:text-primary transition-colors duration-300 relative group">
              Privacy Policy
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground mt-12 pt-6 border-t">
          Built with <Heart className="h-4 w-4 text-red-500 fill-red-500 animate-pulse" /> By Anay Paraswani
        </div>
      </div>
    </footer>
  )
}
