import React from "react"; import { Card, CardContent } from "@/components/ui/card"; import { Button } from "@/components/ui/button";

export default function Home() { return ( <main className="flex flex-col items-center justify-center min-h-screen p-8 bg-black text-white"> <img src="/astrovia-logo.png" alt="Astrovia Logo" className="w-40 mb-6" /> <h1 className="text-4xl font-bold mb-2">Astrovia Inc.</h1> <p className="text-lg mb-8 text-center max-w-xl"> We don’t teach. We deliver digital power — websites, courses, future-ready assets. No fluff. Just money-making digital products. Your path, your profit. </p>

<Card className="w-full max-w-md bg-gray-900 border border-gray-700">
    <CardContent className="p-6">
      <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Premium websites built for conversions</li>
        <li>Courses designed to generate income</li>
        <li>Future: YouTube channels, assets, and more</li>
      </ul>
      <Button className="mt-6 w-full bg-white text-black hover:bg-gray-200">
        Join the Movement
      </Button>
    </CardContent>
  </Card>

  <footer className="mt-10 text-sm text-gray-500 text-center">
    © {new Date().getFullYear()} Astrovia Inc. Built for Profit. Powered by Vision.
  </footer>
</main>

); }

