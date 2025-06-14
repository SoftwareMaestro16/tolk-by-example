"use client";

import Link from "next/link";
import { topics } from "../../utils/topics";

export function Examples() {
  return (
    <section
      id="examples"
      className="py-12 sm:py-18 text-center bg-gradient-to-b from-gray-900/30 via-black/60 to-gray-900/50"
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 100\'%3E%3Ccircle cx=\'50\' cy=\'50\' r=\'40\' fill=\'none\' stroke=\'%230000ff33\' stroke-width=\'1\'/%3E%3C/svg%3E')] opacity-10 mix-blend-overlay pointer-events-none" />
      <div className="absolute top-[-60px] left-0 w-full h-[400px] bg-blue-500/10 rounded-t-full blur-[80px] pointer-events-none z-0" />

      <div className="relative z-10">
        <h2 className="text-4xl sm:text-5xl whitespace-nowrap leading-normal font-bold text-center mb-5 sm:mb-10 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_4px_6px_rgba(0,112,255,0.2)]">
          Explore Sections
        </h2>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-6 max-w-[96vw] sm:max-w-[57vw] mx-auto">
          {topics.map((topic) => (
            <Link
              key={topic.id}
              href={topic.path}
              className="
                inline-flex items-center justify-center px-6 py-4
                bg-gradient-to-br from-blue-500/20 to-gray-500/20
                border-2 border-blue-500/20
                backdrop-blur-md
                rounded-4xl
                transition-colors duration-300
                text-white
                font-semibold text-lg
                hover:bg-gradient-to-r hover:from-blue-600 hover:to-sky-600
                hover:text-white
                group
                shadow-[0_2px_10px_rgba(0,0,0,0.3)]
              "
              style={{
                boxShadow: "0 0 0 rgba(0,0,0,0)",
                transition: "box-shadow 0.3s ease, border-color 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 4px 15px rgba(0, 112, 244, 0.4)";
                e.currentTarget.style.borderColor = "rgba(0, 112, 244, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 0 0 rgba(0,0,0,0)";
                e.currentTarget.style.borderColor = "rgba(0, 112, 244, 0.2)";
              }}
            >
              <span className="relative z-10 group-hover:text-white whitespace-nowrap">
                {topic.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}