"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ParticleBackground from "@/components/particle-background"
import AnimatedCounter from "@/components/animated-counter"
import CursorFollower from "@/components/cursor-follower"
import FloatingBubbles from "@/components/floating-bubbles"
import MagneticButton from "@/components/magnetic-button"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const featuresRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsLoaded(true)

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    if (featuresRef.current) {
      observer.observe(featuresRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <CursorFollower />
      <Header />
      <main className="flex-1">
        {/* Loading animation */}
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-white transition-opacity duration-1000 ${
            isLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <div className="relative w-24 h-24">
            <div className="absolute inset-0 border-4 border-t-primary border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
            <div className="absolute inset-2 border-4 border-t-transparent border-r-primary border-b-transparent border-l-transparent rounded-full animate-spin animation-delay-300 animate-reverse"></div>
            <div className="absolute inset-4 border-4 border-t-transparent border-r-transparent border-b-primary border-l-transparent rounded-full animate-spin animation-delay-600"></div>
          </div>
        </div>

        <section className="py-12 md:py-24 lg:py-32 bg-white relative overflow-hidden">
          <ParticleBackground />
          <FloatingBubbles />

          {/* Background decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-blob"></div>
            <div className="absolute bottom-20 right-10 w-64 h-64 bg-secondary/5 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
          </div>

          <div className="container px-4 md:px-6 relative">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4 animate-fade-in">
                <div className="inline-block">
                  <span className="inline-block animate-slide-up opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards] bg-primary/10 text-primary px-3 py-1 text-sm rounded-full">
                    Premium Quality
                  </span>
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl fancy-text-animation">
                  <span className="fancy-letter">C</span>
                  <span className="fancy-letter">u</span>
                  <span className="fancy-letter">s</span>
                  <span className="fancy-letter">t</span>
                  <span className="fancy-letter">o</span>
                  <span className="fancy-letter">m</span>
                  <span className="fancy-letter"> </span>
                  <span className="fancy-letter">N</span>
                  <span className="fancy-letter">o</span>
                  <span className="fancy-letter">t</span>
                  <span className="fancy-letter">e</span>
                  <span className="fancy-letter">b</span>
                  <span className="fancy-letter">o</span>
                  <span className="fancy-letter">o</span>
                  <span className="fancy-letter">k</span>
                  <span className="fancy-letter">s</span>
                  <span className="fancy-letter"> </span>
                  <span className="fancy-letter">M</span>
                  <span className="fancy-letter">a</span>
                  <span className="fancy-letter">d</span>
                  <span className="fancy-letter">e</span>
                  <span className="fancy-letter"> </span>
                  <span className="fancy-letter">J</span>
                  <span className="fancy-letter">u</span>
                  <span className="fancy-letter">s</span>
                  <span className="fancy-letter">t</span>
                  <span className="fancy-letter"> </span>
                  <span className="fancy-letter">F</span>
                  <span className="fancy-letter">o</span>
                  <span className="fancy-letter">r</span>
                  <span className="fancy-letter"> </span>
                  <span className="fancy-letter">Y</span>
                  <span className="fancy-letter">o</span>
                  <span className="fancy-letter">u</span>
                </h1>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed animate-slide-up opacity-0 [animation-delay:600ms] [animation-fill-mode:forwards]">
                  Premium stone paper notebooks with your custom design on the first page. Durable, non-tearable, and
                  uniquely yours.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row animate-slide-up opacity-0 [animation-delay:800ms] [animation-fill-mode:forwards]">
                  <Link href="/order">
                    <MagneticButton className="px-8 group relative overflow-hidden animated-btn bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10">
                      <span className="relative z-10">Order Now</span>
                      <span className="absolute inset-0 bg-primary-foreground/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </MagneticButton>
                  </Link>
                  <Link href="/terms">
                    <MagneticButton className="px-8 group hover:border-primary/50 transition-colors duration-300 animated-btn bg-background text-foreground hover:bg-accent hover:text-accent-foreground inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 border border-input">
                      Learn More
                      <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </MagneticButton>
                  </Link>
                </div>
                <div className="flex items-center gap-4 text-sm animate-slide-up opacity-0 [animation-delay:1000ms] [animation-fill-mode:forwards]">
                  <div className="flex items-center gap-1 hover:text-primary transition-colors duration-300">
                    <span className="font-medium">5 Notebooks</span>
                  </div>
                  <div className="flex items-center gap-1 hover:text-primary transition-colors duration-300">
                    <span className="font-medium">₹500 Only</span>
                  </div>
                  <div className="flex items-center gap-1 hover:text-primary transition-colors duration-300">
                    <span className="font-medium">Stone Paper</span>
                  </div>
                </div>
              </div>
              <div className="relative group animate-fade-in animation-delay-500">
                <div className="relative h-[350px] w-full overflow-hidden rounded-xl border bg-muted perspective">
                  <div className="absolute inset-0 z-10 transition-all duration-1000 group-hover:opacity-0 group-hover:rotate-y-180 transform-preserve-3d notebook-cover">
                    <Image
                      src="/placeholder.svg?height=350&width=500"
                      alt="Blank notebook"
                      className="object-cover"
                      fill
                    />
                  </div>
                  <div className="absolute inset-0 opacity-0 transition-all duration-1000 group-hover:opacity-100 group-hover:rotate-y-0 rotate-y-180 transform-preserve-3d notebook-inside">
                    <Image
                      src="/placeholder.svg?height=350&width=500&text=Your+Design+Here"
                      alt="Customized notebook"
                      className="object-cover"
                      fill
                    />
                  </div>
                </div>
                <div className="absolute -bottom-4 left-4 right-4 text-center text-sm text-muted-foreground animate-pulse">
                  Hover to see customization preview
                </div>

                {/* Floating elements */}
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-primary/10 rounded-full animate-float"></div>
                <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-secondary/10 rounded-full animate-float animation-delay-1000"></div>

                {/* Animated sparkles */}
                <div className="sparkle-container">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="sparkle"
                      style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 5}s`,
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 bg-gray-50 relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5 pointer-events-none pattern-bg"></div>

          <div className="container px-4 md:px-6 relative">
            <div className="grid gap-10 text-center">
              <div className="space-y-3">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight animate-fade-in glowing-text">
                  Why Choose Our Notebooks?
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed animate-fade-in animation-delay-300">
                  Our premium stone paper notebooks offer durability and personalization unlike any other.
                </p>
              </div>

              {/* Stats counter section */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                  <div className="text-3xl font-bold text-primary mb-1">
                    <AnimatedCounter start={-999} end={1} duration={2} />+
                  </div>
                  <div className="text-sm text-gray-500">Happy Customers</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                  <div className="text-3xl font-bold text-primary mb-1">
                    <AnimatedCounter start={-500} end={1} duration={2} />
                  </div>
                  <div className="text-sm text-gray-500">Notebooks Sold</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                  <div className="text-3xl font-bold text-primary mb-1">
                    <AnimatedCounter start={0} end={100} duration={2} />%
                  </div>
                  <div className="text-sm text-gray-500">Satisfaction Rate</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                  <div className="text-3xl font-bold text-primary mb-1">
                    <AnimatedCounter start={100} end={48} duration={2} />h
                  </div>
                  <div className="text-sm text-gray-500">Fast Delivery</div>
                </div>
              </div>

              <div ref={featuresRef} className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
                <div
                  className={`flex flex-col items-center space-y-2 group transition-all duration-700 transform ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  } hover:translate-y-[-5px] feature-card`}
                  style={{ transitionDelay: "0ms" }}
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 icon-container">
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
                      className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300"
                    >
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                      <path d="m7 10 2 2 6-6" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">Durable</h3>
                  <p className="text-gray-500">
                    Made from stone paper, our notebooks are tear-resistant and waterproof.
                  </p>
                </div>
                <div
                  className={`flex flex-col items-center space-y-2 group transition-all duration-700 transform ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  } hover:translate-y-[-5px] feature-card`}
                  style={{ transitionDelay: "200ms" }}
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 icon-container">
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
                      className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300"
                    >
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                      <path d="M8 12h8" />
                      <path d="M12 8v8" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                    Customizable
                  </h3>
                  <p className="text-gray-500">Add your personal touch with a custom design on the first page.</p>
                </div>
                <div
                  className={`flex flex-col items-center space-y-2 group transition-all duration-700 transform ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  } hover:translate-y-[-5px] feature-card`}
                  style={{ transitionDelay: "400ms" }}
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 icon-container">
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
                      className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300"
                    >
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                      <line x1="9" x2="9.01" y1="9" y2="9" />
                      <line x1="15" x2="15.01" y1="9" y2="9" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                    Affordable
                  </h3>
                  <p className="text-gray-500">
                    Get 5 premium notebooks for just ₹500, with a flat ₹50 delivery charge.
                  </p>
                </div>
              </div>
              <div className="flex justify-center animate-fade-in animation-delay-1000">
                <Link href="/order">
                  <Button size="lg" className="px-8 group relative overflow-hidden animated-btn">
                    <span className="relative z-10">Order Your Custom Notebooks</span>
                    <span className="absolute inset-0 bg-primary-foreground/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
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
