"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { Upload, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ConfettiEffect from "@/components/confetti-effect"
import CursorFollower from "@/components/cursor-follower"

export default function OrderPage() {
  const [file, setFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [showSummary, setShowSummary] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const notebookRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!notebookRef.current) return

    const rect = notebookRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5

    setMousePosition({ x, y })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0]
      setFile(selectedFile)

      // Create preview
      const reader = new FileReader()
      reader.onload = (event) => {
        setPreview(event.target?.result as string)
      }
      reader.readAsDataURL(selectedFile)
    }
  }

  const handleProceed = () => {
    if (!file) {
      alert("Please upload a design first")
      return
    }
    setShowSummary(true)
  }

  const handlePlaceOrder = () => {
    setShowConfetti(true)
    setTimeout(() => {
      alert("This is a work in progress. Your order would be processed here in a real implementation.")
    }, 500)
  }

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <CursorFollower />
      <Header />
      {showConfetti && <ConfettiEffect />}
      <main className="flex-1 py-12 relative">
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

        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-blob"></div>
          <div className="absolute bottom-20 right-10 w-64 h-64 bg-secondary/5 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="container px-4 md:px-6 relative">
          <div className="mx-auto max-w-5xl">
            <div className="space-y-2 text-center mb-8 animate-fade-in">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl animate-slide-up opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards] text-3d">
                Order Your Custom Notebooks
              </h1>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed animate-slide-up opacity-0 [animation-delay:400ms] [animation-fill-mode:forwards] wave-text">
                <span style={{ animationDelay: "0s" }}>U</span>
                <span style={{ animationDelay: "0.1s" }}>p</span>
                <span style={{ animationDelay: "0.2s" }}>l</span>
                <span style={{ animationDelay: "0.3s" }}>o</span>
                <span style={{ animationDelay: "0.4s" }}>a</span>
                <span style={{ animationDelay: "0.5s" }}>d</span>
                <span style={{ animationDelay: "0.6s" }}> </span>
                <span style={{ animationDelay: "0.7s" }}>y</span>
                <span style={{ animationDelay: "0.8s" }}>o</span>
                <span style={{ animationDelay: "0.9s" }}>u</span>
                <span style={{ animationDelay: "1.0s" }}>r</span>
                <span style={{ animationDelay: "1.1s" }}> </span>
                <span style={{ animationDelay: "1.2s" }}>d</span>
                <span style={{ animationDelay: "1.3s" }}>e</span>
                <span style={{ animationDelay: "1.4s" }}>s</span>
                <span style={{ animationDelay: "1.5s" }}>i</span>
                <span style={{ animationDelay: "1.6s" }}>g</span>
                <span style={{ animationDelay: "1.7s" }}>n</span>
                <span style={{ animationDelay: "1.8s" }}> </span>
                <span style={{ animationDelay: "1.9s" }}>a</span>
                <span style={{ animationDelay: "2.0s" }}>n</span>
                <span style={{ animationDelay: "2.1s" }}>d</span>
                <span style={{ animationDelay: "2.2s" }}> </span>
                <span style={{ animationDelay: "2.3s" }}>w</span>
                <span style={{ animationDelay: "2.4s" }}>e</span>
                <span style={{ animationDelay: "2.5s" }}>&#39;</span>
                <span style={{ animationDelay: "2.6s" }}>l</span>
                <span style={{ animationDelay: "2.7s" }}>l</span>
                <span style={{ animationDelay: "2.8s" }}> </span>
                <span style={{ animationDelay: "2.9s" }}>p</span>
                <span style={{ animationDelay: "3.0s" }}>r</span>
                <span style={{ animationDelay: "3.1s" }}>i</span>
                <span style={{ animationDelay: "3.2s" }}>n</span>
                <span style={{ animationDelay: "3.3s" }}>t</span>
                <span style={{ animationDelay: "3.4s" }}> </span>
                <span style={{ animationDelay: "3.5s" }}>i</span>
                <span style={{ animationDelay: "3.6s" }}>t</span>
                <span style={{ animationDelay: "3.7s" }}> </span>
                <span style={{ animationDelay: "3.8s" }}>o</span>
                <span style={{ animationDelay: "3.9s" }}>n</span>
                <span style={{ animationDelay: "4.0s" }}> </span>
                <span style={{ animationDelay: "4.1s" }}>t</span>
                <span style={{ animationDelay: "4.2s" }}>h</span>
                <span style={{ animationDelay: "4.3s" }}>e</span>
                <span style={{ animationDelay: "4.4s" }}> </span>
                <span style={{ animationDelay: "4.5s" }}>f</span>
                <span style={{ animationDelay: "4.6s" }}>i</span>
                <span style={{ animationDelay: "4.7s" }}>r</span>
                <span style={{ animationDelay: "4.8s" }}>s</span>
                <span style={{ animationDelay: "4.9s" }}>t</span>
                <span style={{ animationDelay: "5.0s" }}> </span>
                <span style={{ animationDelay: "5.1s" }}>p</span>
                <span style={{ animationDelay: "5.2s" }}>a</span>
                <span style={{ animationDelay: "5.3s" }}>g</span>
                <span style={{ animationDelay: "5.4s" }}>e</span>
                <span style={{ animationDelay: "5.5s" }}> </span>
                <span style={{ animationDelay: "5.6s" }}>o</span>
                <span style={{ animationDelay: "5.7s" }}>f</span>
                <span style={{ animationDelay: "5.8s" }}> </span>
                <span style={{ animationDelay: "5.9s" }}>y</span>
                <span style={{ animationDelay: "6.0s" }}>o</span>
                <span style={{ animationDelay: "6.1s" }}>u</span>
                <span style={{ animationDelay: "6.2s" }}>r</span>
                <span style={{ animationDelay: "6.3s" }}> </span>
                <span style={{ animationDelay: "6.4s" }}>n</span>
                <span style={{ animationDelay: "6.5s" }}>o</span>
                <span style={{ animationDelay: "6.6s" }}>t</span>
                <span style={{ animationDelay: "6.7s" }}>e</span>
                <span style={{ animationDelay: "6.8s" }}>b</span>
                <span style={{ animationDelay: "6.9s" }}>o</span>
                <span style={{ animationDelay: "7.0s" }}>o</span>
                <span style={{ animationDelay: "7.1s" }}>k</span>
                <span style={{ animationDelay: "7.2s" }}>s</span>
                <span style={{ animationDelay: "7.3s" }}>.</span>
              </p>
            </div>

            {!showSummary ? (
              <Card className="overflow-hidden border-0 shadow-lg animate-fade-in animation-delay-500 hover:shadow-xl transition-all duration-500">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2">
                    {/* Notebook Preview Section */}
                    <div
                      className="relative bg-gradient-to-br from-gray-50 to-white p-6 flex items-center justify-center min-h-[400px]"
                      onMouseMove={handleMouseMove}
                      onMouseEnter={() => setIsHovering(true)}
                      onMouseLeave={() => setIsHovering(false)}
                    >
                      <div
                        ref={notebookRef}
                        className="relative w-full max-w-[300px] aspect-[3/4] transform transition-all duration-700 notebook-3d"
                        style={{
                          transform: isHovering
                            ? `rotateY(${mousePosition.x * 20}deg) rotateX(${-mousePosition.y * 20}deg)`
                            : "rotateY(0) rotateX(0)",
                          transformStyle: "preserve-3d",
                        }}
                      >
                        {/* Notebook shadow */}
                        <div
                          className="absolute inset-0 bg-black/20 rounded-lg blur-md -z-10 transition-all duration-700"
                          style={{
                            transform: isHovering
                              ? `translateX(${mousePosition.x * 20}px) translateY(${mousePosition.y * 20}px)`
                              : "translateX(5px) translateY(5px)",
                          }}
                        ></div>

                        {/* Notebook base image with transparent middle */}
                        <div className="absolute inset-0 z-10 pointer-events-none">
                          <div className="relative w-full h-full">
                            <div className="absolute inset-0 bg-white rounded-lg shadow-md border"></div>

                            {/* Transparent area in the middle */}
                            <div className="absolute top-[15%] left-[10%] right-[10%] bottom-[15%] bg-gray-100 rounded border-2 border-dashed border-gray-300 flex items-center justify-center overflow-hidden">
                              {preview ? (
                                <div className="relative w-full h-full animate-fade-in">
                                  <Image
                                    src={preview || "/placeholder.svg"}
                                    alt="Your design"
                                    fill
                                    className="object-contain p-2"
                                  />
                                  <div className="absolute inset-0 bg-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <div className="bg-primary/80 text-white p-2 rounded-full">
                                      <Check className="h-6 w-6" />
                                    </div>
                                  </div>
                                </div>
                              ) : (
                                <div className="animate-pulse">
                                  <p className="text-sm text-gray-400 text-center p-4">Your design will appear here</p>
                                </div>
                              )}
                            </div>

                            {/* Notebook binding */}
                            <div className="absolute left-0 top-0 bottom-0 w-[5%] bg-gradient-to-r from-gray-300 to-gray-200 rounded-l-lg"></div>

                            {/* Page lines */}
                            <div className="absolute top-[50%] left-[10%] right-[10%] bottom-[15%] pointer-events-none">
                              {[...Array(5)].map((_, i) => (
                                <div
                                  key={i}
                                  className="absolute h-px bg-gray-200 w-full"
                                  style={{ top: `${i * 20}%` }}
                                ></div>
                              ))}
                            </div>
                          </div>
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

                    {/* Upload Section */}
                    <div className="p-6 space-y-6">
                      <div className="animate-slide-up opacity-0 [animation-delay:600ms] [animation-fill-mode:forwards]">
                        <h2 className="text-2xl font-bold mb-2 typing-animation">Customize Your Notebook</h2>
                        <p className="text-gray-500 mb-6">
                          Upload an image or design that will be printed on the first page of your stone paper
                          notebooks. These durable, non-tearable notebooks are perfect for everyday use.
                        </p>

                        <div className="space-y-4">
                          <div
                            className="border-2 border-dashed rounded-lg p-8 flex flex-col items-center justify-center cursor-pointer hover:bg-muted/50 transition-all duration-300 hover:border-primary group upload-area"
                            onClick={() => fileInputRef.current?.click()}
                          >
                            <Upload className="h-10 w-10 text-muted-foreground mb-4 group-hover:scale-110 group-hover:text-primary transition-all duration-300" />
                            <p className="text-sm text-muted-foreground text-center group-hover:text-primary/80 transition-colors duration-300">
                              Click to upload or drag and drop
                              <br />
                              SVG, PNG, JPG or GIF (max. 5MB)
                            </p>
                            {file && (
                              <div className="text-sm text-primary mt-2 animate-pulse flex items-center">
                                <Check className="h-4 w-4 mr-1" /> Selected: {file.name}
                              </div>
                            )}
                          </div>
                          <Input
                            ref={fileInputRef}
                            id="design"
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleFileChange}
                          />
                        </div>
                      </div>

                      <div className="space-y-4 animate-slide-up opacity-0 [animation-delay:800ms] [animation-fill-mode:forwards]">
                        <div className="bg-muted/50 p-4 rounded-lg hover:bg-muted/70 transition-colors duration-300 price-card">
                          <h3 className="font-medium mb-2">Package Details</h3>
                          <ul className="space-y-2 text-sm">
                            <li className="flex justify-between">
                              <span>5 Custom Notebooks</span>
                              <span className="font-medium">₹500</span>
                            </li>
                            <li className="flex justify-between">
                              <span>Delivery Charge</span>
                              <span className="font-medium">₹50</span>
                            </li>
                            <li className="flex justify-between pt-2 border-t mt-2">
                              <span className="font-bold">Total</span>
                              <span className="font-bold">₹550</span>
                            </li>
                          </ul>
                        </div>

                        <Button
                          className="w-full relative overflow-hidden group pulse-btn"
                          size="lg"
                          onClick={handleProceed}
                          disabled={!file}
                        >
                          <span className="relative z-10">
                            {file ? "Proceed to Checkout" : "Upload a Design to Continue"}
                          </span>
                          <span className="absolute inset-0 bg-primary-foreground/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                          <span className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 pulse-animation"></span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="border-0 shadow-lg animate-fade-in hover:shadow-xl transition-all duration-500">
                <CardContent className="p-6 space-y-6">
                  <div className="animate-slide-up opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards]">
                    <h2 className="text-2xl font-bold mb-2 typing-animation">Order Summary</h2>
                    <p className="text-gray-500">Review your order details before placing the order.</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="animate-slide-up opacity-0 [animation-delay:400ms] [animation-fill-mode:forwards]">
                      <h3 className="font-medium mb-4">Your Customized Notebook</h3>
                      <div className="relative w-full max-w-[250px] aspect-[3/4] mx-auto transform transition-all duration-700 hover:rotate-y-10 hover:rotate-x-5 transform-preserve-3d notebook-3d">
                        {/* Notebook shadow */}
                        <div className="absolute inset-0 bg-black/20 rounded-lg blur-md -z-10 transition-all duration-700 translate-x-5 translate-y-5 hover:translate-x-10 hover:translate-y-10"></div>

                        {/* Notebook with preview */}
                        <div className="absolute inset-0 bg-white rounded-lg shadow-md border"></div>

                        {/* Design area */}
                        <div className="absolute top-[15%] left-[10%] right-[10%] bottom-[15%] bg-gray-100 rounded border overflow-hidden">
                          {preview && (
                            <Image
                              src={preview || "/placeholder.svg"}
                              alt="Your design"
                              fill
                              className="object-contain p-2 animate-fade-in"
                            />
                          )}
                        </div>

                        {/* Notebook binding */}
                        <div className="absolute left-0 top-0 bottom-0 w-[5%] bg-gradient-to-r from-gray-300 to-gray-200 rounded-l-lg"></div>

                        {/* Floating elements */}
                        <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/10 rounded-full animate-float"></div>
                        <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-secondary/10 rounded-full animate-float animation-delay-1000"></div>

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

                    <div className="space-y-6 animate-slide-up opacity-0 [animation-delay:600ms] [animation-fill-mode:forwards]">
                      <div>
                        <h3 className="font-medium mb-2">Order Details</h3>
                        <div className="bg-muted/50 p-4 rounded-lg hover:bg-muted/70 transition-colors duration-300 price-card">
                          <ul className="space-y-2">
                            <li className="flex justify-between">
                              <span>5 Custom Notebooks</span>
                              <span className="font-medium">₹500</span>
                            </li>
                            <li className="flex justify-between">
                              <span>Delivery Charge</span>
                              <span className="font-medium">₹50</span>
                            </li>
                            <li className="flex justify-between pt-2 border-t mt-2">
                              <span className="font-bold">Total</span>
                              <span className="font-bold">₹550</span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="space-y-2 animate-slide-up opacity-0 [animation-delay:800ms] [animation-fill-mode:forwards]">
                        <Button
                          className="w-full relative overflow-hidden group pulse-btn"
                          size="lg"
                          onClick={handlePlaceOrder}
                        >
                          <span className="relative z-10">Place Order</span>
                          <span className="absolute inset-0 bg-primary-foreground/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                          <span className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 pulse-animation"></span>
                        </Button>
                        <Button
                          variant="outline"
                          className="w-full group hover:border-primary/50 transition-colors duration-300"
                          onClick={() => setShowSummary(false)}
                        >
                          Back to Design
                          <span className="inline-block transition-transform duration-300 group-hover:-translate-x-1">
                            ←
                          </span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
