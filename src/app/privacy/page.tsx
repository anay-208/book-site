import Link from "next/link"

import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-8">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Privacy Policy</h1>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                How we handle your information.
              </p>
            </div>

            <div className="space-y-6 text-gray-500">
              <div className="space-y-2">
                <h2 className="text-xl font-bold tracking-tight">Hobby Project Disclaimer</h2>
                <p>
                  This website is a hobby project created for educational and demonstration purposes only. No real data
                  collection or processing takes place.
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="text-xl font-bold tracking-tight">Information We Don't Collect</h2>
                <p>
                  As this is a demonstration website, we do not collect, store, or process any personal information. Any
                  designs or content uploaded during the simulated ordering process are not stored permanently.
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="text-xl font-bold tracking-tight">Cookies</h2>
                <p>This website does not use cookies or any other tracking technologies.</p>
              </div>

              <div className="space-y-2">
                <h2 className="text-xl font-bold tracking-tight">Third-Party Services</h2>
                <p>
                  This website does not integrate with any third-party services that would collect or process user data.
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="text-xl font-bold tracking-tight">Contact</h2>
                <p>
                  For any questions about this privacy policy or the project in general, please contact Anay Paraswani.
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <Link href="/">
                <Button>Back to Home</Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
