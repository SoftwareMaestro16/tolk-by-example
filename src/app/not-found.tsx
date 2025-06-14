"use client";

import Link from "next/link";
import { ArrowLeft, AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative h-screen overflow-hidden flex items-center justify-center bg-gradient-to-br from-blue-900/20 via-black to-cyan-900/20">
      <div className="absolute top-[-40px] left-0 w-full h-[450px] rotate-180 bg-blue-500/10 md:bg-blue-500/15 rounded-t-full blur-[100px] animate-float-slower pointer-events-none z-0">
        <div className="absolute inset-0 bg-transparent border-b-4 border-blue-500/20 rounded-b-full transform origin-top" />
      </div>

      <div className="relative z-10 text-center flex flex-col items-center justify-center gap-6 px-4">
        <AlertTriangle size={80} className="text-blue-400 animate-pulse" />
        <h1 className="text-6xl sm:text-8xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text drop-shadow-lg">
          404
        </h1>
        <h2 className="text-4xl xs:text-5xl font-bold text-gray-300">Page Not Found</h2>
        <p className="text-lg text-gray-400 max-w-md">
          Oops! The smart contract page you’re looking for seems to have vanished into the blockchain. Let’s get you back on track!
        </p>

        <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-sky-500 hover:from-blue-600 hover:to-sky-600 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg">
          <ArrowLeft size={20} />
          Back to Home
        </Link>
      </div>
    </div>
  );
}