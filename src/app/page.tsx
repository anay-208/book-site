import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Custom Notebooks Made Just For You
                </h1>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Premium stone paper notebooks with your custom design on the first page. Durable, non-tearable, and
                  uniquely yours.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/order">
                    <Button className="px-8">
                      Order Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/terms">
                    <Button variant="outline" className="px-8">
                      Learn More
                    </Button>
                  </Link>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <span className="font-medium">5 Notebooks</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="font-medium">₹500 Only</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="font-medium">Stone Paper</span>
                  </div>
                </div>
              </div>
              <div className="relative group">
                <div className="relative h-[350px] w-full overflow-hidden rounded-xl border bg-muted">
                  <div className="absolute inset-0 z-10 transition-opacity duration-1000 group-hover:opacity-0">
                    <Image
                      src="/placeholder.svg?height=350&width=500"
                      alt="Blank notebook"
                      className="object-cover"
                      fill
                    />
                  </div>
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-1000 group-hover:opacity-100">
                    <Image
                      src="/placeholder.svg?height=350&width=500&text=Your+Design+Here"
                      alt="Customized notebook"
                      className="object-cover"
                      fill
                    />
                  </div>
                </div>
                <div className="absolute -bottom-4 left-4 right-4 text-center text-sm text-muted-foreground">
                  Hover to see customization preview
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 text-center">
              <div className="space-y-3">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Why Choose Our Notebooks?</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our premium stone paper notebooks offer durability and personalization unlike any other.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
                <div className="flex flex-col items-center space-y-2">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
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
                      className="h-8 w-8 text-primary"
                    >
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                      <path d="m7 10 2 2 6-6" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Durable</h3>
                  <p className="text-gray-500">
                    Made from stone paper, our notebooks are tear-resistant and waterproof.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
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
                      className="h-8 w-8 text-primary"
                    >
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                      <path d="M8 12h8" />
                      <path d="M12 8v8" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Customizable</h3>
                  <p className="text-gray-500">Add your personal touch with a custom design on the first page.</p>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
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
                      className="h-8 w-8 text-primary"
                    >
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                      <line x1="9" x2="9.01" y1="9" y2="9" />
                      <line x1="15" x2="15.01" y1="9" y2="9" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Affordable</h3>
                  <p className="text-gray-500">
                    Get 5 premium notebooks for just ₹500, with a flat ₹50 delivery charge.
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <Link href="/order">
                  <Button size="lg" className="px-8">
                    Order Your Custom Notebooks
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
