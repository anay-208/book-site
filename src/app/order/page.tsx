"use client"

import type React from "react"

import { useState, useRef } from "react"
import Image from "next/image"
import { Upload, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ConfettiEffect from "@/components/confetti-effect"

export default function OrderPage() {
  const [file, setFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [showSummary, setShowSummary] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

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
      alert("Due to the blackout scheduled for today, we're currently unable to accept orders. Thank you for your cooperation!")
    }, 500)
  }

  return (
    <div className="flex flex-col min-h-screen justify-center items-center">
      <Header />
      {showConfetti && <ConfettiEffect />}
      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-5xl">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Order Your Custom Notebooks
              </h1>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-2">
                Upload your design and we&apos;ll print it on the first page of your notebooks.
              </p>
            </div>

            {!showSummary ? (
              <Card className="overflow-hidden border-0 shadow-lg">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2">
                    {/* Notebook Preview Section */}
                    <div className="relative bg-gradient-to-br from-gray-50 to-white p-6 flex items-center justify-center min-h-[400px]">
                      <div className="relative w-full max-w-[300px] aspect-[3/4]">
                        {/* Notebook base image with transparent middle */}
                        <div className="absolute inset-0 z-10 pointer-events-none">
                          <div className="relative w-full h-full">
                            <div className="absolute inset-0 bg-white rounded-lg shadow-md border"></div>

                            {/* Transparent area in the middle */}
                            <div className="absolute top-[15%] left-[10%] right-[10%] bottom-[15%] bg-gray-100 rounded border-2 border-dashed border-gray-300 flex items-center justify-center overflow-hidden">
                              {preview ? (
                                <div className="relative w-full h-full">
                                  <Image
                                    src={preview || "/placeholder.svg"}
                                    alt="Your design"
                                    fill
                                    className="object-contain p-2"
                                  />
                                </div>
                              ) : (
                                <div>
                                  <p className="text-sm text-gray-400 text-center p-4">Your design will appear here</p>
                                </div>
                              )}
                            </div>

                            {/* Notebook binding */}
                            <div className="absolute left-0 top-0 bottom-0 w-[5%] bg-gradient-to-r from-gray-300 to-gray-200 rounded-l-lg"></div>

                            {/* Logo at the bottom of the notebook */}
                            <div className="absolute bottom-2 left-0 right-0 flex justify-center">
                              <Image
                                src="/logo-no-bg-black.png"
                                alt="The Note Co. Logo"
                                width={40}
                                height={40}
                                className="opacity-70"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Upload Section */}
                    <div className="p-6 space-y-6">
                      <div>
                        <h2 className="text-2xl font-bold mb-2">Customize Your Notebook</h2>
                        <p className="text-gray-500 mb-6">
                          Upload an image or design that will be printed on the first page of your stone paper
                          notebooks. These durable, non-tearable notebooks are perfect for everyday use.
                        </p>

                        <div className="space-y-4">
                          <div
                            className="border-2 border-dashed rounded-lg p-8 flex flex-col items-center justify-center cursor-pointer hover:bg-muted/50 transition-all duration-300 hover:border-primary"
                            onClick={() => fileInputRef.current?.click()}
                          >
                            <Upload className="h-10 w-10 text-muted-foreground mb-4" />
                            <p className="text-sm text-muted-foreground text-center">
                              Click to upload or drag and drop
                              <br />
                              SVG, PNG, JPG or GIF (max. 5MB)
                            </p>
                            {file && (
                              <div className="text-sm text-primary mt-2 flex items-center">
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

                      <div className="space-y-4">
                        <div className="bg-muted/50 p-4 rounded-lg">
                          <h3 className="font-medium mb-2">Package Details</h3>
                          <ul className="space-y-2 text-sm">
                            <li className="flex justify-between">
                              <span>5 Custom Notebooks (₹599 each)</span>
                              <span className="font-medium">₹2,995</span>
                            </li>
                            <li className="flex justify-between">
                              <span>Delivery Charge</span>
                              <span className="font-medium">₹130</span>
                            </li>
                            <li className="flex justify-between">
                              <span>Convenience Fee</span>
                              <span className="font-medium">₹40</span>
                            </li>
                            <li className="flex justify-between">
                              <span>Handling Fee</span>
                              <span className="font-medium">₹60</span>
                            </li>
                            <li className="flex justify-between">
                              <span>Blackout Fee</span>
                              <span className="font-medium">₹60</span>
                            </li>
                            <li className="flex justify-between">
                              <span>Processing Charges</span>
                              <span className="font-medium">₹60</span>
                            </li>
                            <li className="flex justify-between">
                              <span>Presentation Charges</span>
                              <span className="font-medium">₹50</span>
                            </li>
                            <li className="flex justify-between">
                              <span>Surge Fee</span>
                              <span className="font-medium">₹100</span>
                            </li>
                            <li className="flex justify-between text-green-600">
                              <span>Free RULRR Scale (Included)</span>
                              <span className="font-medium">₹0</span>
                            </li>
                            <li className="flex justify-between text-green-600">
                              <span>Free BLAK Pen (Included)</span>
                              <span className="font-medium">₹0</span>
                            </li>
                            <li className="flex justify-between pt-2 border-t mt-2">
                              <span className="font-bold">Total</span>
                              <span className="font-bold">₹3,495</span>
                            </li>
                          </ul>
                        </div>

                        <Button className="w-full" size="lg" onClick={handleProceed} disabled={!file}>
                          {file ? "Proceed to Checkout" : "Upload a Design to Continue"}
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">Order Summary</h2>
                    <p className="text-gray-500">Review your order details before placing the order.</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-medium mb-4">Your Customized Notebook</h3>
                      <div className="relative w-full max-w-[250px] aspect-[3/4] mx-auto">
                        {/* Notebook with preview */}
                        <div className="absolute inset-0 bg-white rounded-lg shadow-md border"></div>

                        {/* Design area */}
                        <div className="absolute top-[15%] left-[10%] right-[10%] bottom-[15%] bg-gray-100 rounded border overflow-hidden">
                          {preview && (
                            <Image
                              src={preview || "/placeholder.svg"}
                              alt="Your design"
                              fill
                              className="object-contain p-2"
                            />
                          )}
                        </div>

                        {/* Notebook binding */}
                        <div className="absolute left-0 top-0 bottom-0 w-[5%] bg-gradient-to-r from-gray-300 to-gray-200 rounded-l-lg"></div>

                        {/* Logo at the bottom of the notebook */}
                        <div className="absolute bottom-2 left-0 right-0 flex justify-center">
                          <Image
                            src="/logo-no-bg-black.png"
                            alt="The Note Co. Logo"
                            width={40}
                            height={40}
                            className="opacity-70"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h3 className="font-medium mb-2">Order Details</h3>
                        <div className="bg-muted/50 p-4 rounded-lg">
                          <ul className="space-y-2">
                            <li className="flex justify-between">
                              <span>5 Custom Notebooks (₹599 each)</span>
                              <span className="font-medium">₹2,995</span>
                            </li>
                            <li className="flex justify-between">
                              <span>Delivery Charge</span>
                              <span className="font-medium">₹130</span>
                            </li>
                            <li className="flex justify-between">
                              <span>Convenience Fee</span>
                              <span className="font-medium">₹40</span>
                            </li>
                            <li className="flex justify-between">
                              <span>Handling Fee</span>
                              <span className="font-medium">₹60</span>
                            </li>
                            <li className="flex justify-between">
                              <span>Blackout Fee</span>
                              <span className="font-medium">₹60</span>
                            </li>
                            <li className="flex justify-between">
                              <span>Processing Charges</span>
                              <span className="font-medium">₹60</span>
                            </li>
                            <li className="flex justify-between">
                              <span>Presentation Charges</span>
                              <span className="font-medium">₹50</span>
                            </li>
                            <li className="flex justify-between">
                              <span>Surge Fee</span>
                              <span className="font-medium">₹100</span>
                            </li>
                            <li className="flex justify-between text-green-600">
                              <span>Free RULRR Scale (Included)</span>
                              <span className="font-medium">₹0</span>
                            </li>
                            <li className="flex justify-between text-green-600">
                              <span>Free BLAK Pen (Included)</span>
                              <span className="font-medium">₹0</span>
                            </li>
                            <li className="flex justify-between pt-2 border-t mt-2">
                              <span className="font-bold">Total</span>
                              <span className="font-bold">₹3,495</span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Button className="w-full" size="lg" onClick={handlePlaceOrder}>
                          Place Order
                        </Button>
                        <Button variant="outline" className="w-full" onClick={() => setShowSummary(false)}>
                          Back to Design
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
