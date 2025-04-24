import Link from "next/link"
import { Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex flex-col gap-2">
            <Link href="/" className="text-lg font-bold">
              The Note Co.
            </Link>
            <p className="text-sm text-muted-foreground">Premium customized stone paper notebooks.</p>
          </div>

          <div className="flex flex-wrap gap-6 md:gap-8">
            <Link href="/order" className="text-sm hover:underline underline-offset-4">
              Order Now
            </Link>
            <Link href="/terms" className="text-sm hover:underline underline-offset-4">
              Terms & Conditions
            </Link>
            <Link href="/privacy" className="text-sm hover:underline underline-offset-4">
              Privacy Policy
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground mt-8 pt-6 border-t">
          Built with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> By Anay Paraswani
        </div>
      </div>
    </footer>
  )
}
