import Link from "next/link";

import { Button } from "@/components/ui/button";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 py-12">
        <div className="px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-8">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Terms & Conditions
              </h1>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Please read these terms carefully before using our service.
              </p>
            </div>

            <div className="space-y-6 text-gray-500">
              <div className="space-y-2">
                <h2 className="text-xl font-bold tracking-tight">
                  Hobby Project Disclaimer
                </h2>
                <p>
                  This website is a hobby project created for educational and
                  demonstration purposes only. It is not a real commercial
                  service, and no actual products will be delivered.
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="text-xl font-bold tracking-tight">
                  About the Project
                </h2>
                <p>
                  This website was created as part of a Business Management
                  project to demonstrate a fictional product - customized stone
                  paper notebooks. All information, including pricing, product
                  specifications, and services offered, is fictional.
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="text-xl font-bold tracking-tight">
                  No Real Transactions
                </h2>
                <p>
                  While this website simulates an e-commerce experience, no
                  actual payment processing or order fulfillment will take
                  place. Any &quot;orders&quot; placed through this website are for
                  demonstration purposes only. If any real transaction is processed, it&apos;ll be refunded once you contact me. You&apos;re not allowed to dispute the transactions.
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="text-xl font-bold tracking-tight">
                  User Content
                </h2>
                <p>
                  Any designs or content uploaded to this website during the
                  simulated ordering process are not stored permanently and will
                  not be used for any purpose beyond the immediate demonstration
                  of the website&apos;s functionality.
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="text-xl font-bold tracking-tight">Contact</h2>
                For any questions about this privacy policy or the project in
                general, please contact Anay Paraswani via email at
                me@anayparaswani.dev.{" "}
              </div>
            </div>

            <div className="flex justify-center">
              <Link href="/order">
                <Button>Back to Order</Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
