"use client";

import Link from "next/link";
import { topics } from "../../utils/topics";

export function Examples() {
  return (
    <section id="examples" className="py-12 sm:py-18 text-center">
      <h2 className="text-4xl sm:text-5xl whitespace-nowrap leading-normal font-bold text-center mb-5 sm:mb-10 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
        Explore Examples
      </h2>

      <div className="flex flex-wrap justify-center gap-2 sm:gap-6 max-w-[96vw] sm:max-w-[57vw] mx-auto">
        {topics.map((topic) => (
          <Link
          key={topic.id}
          href={topic.path}
          className="
            inline-flex items-center justify-center px-6 py-4
            bg-white/5
            border-2 border-transparent
            backdrop-blur-md
            rounded-4xl
            transition-colors duration-300
            text-black dark:text-white
            font-semibold text-lg
            hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500
            hover:text-white
            group
          "
          style={{
            boxShadow: "0 0 0 rgba(0,0,0,0)", 
            transition: "box-shadow 0.3s ease, border-color 0.3s ease",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.boxShadow = "0 4px 15px rgba(0, 112, 244, 0.4)";
            e.currentTarget.style.borderColor = "transparent"; 
          }}
          onMouseLeave={e => {
            e.currentTarget.style.boxShadow = "0 0 0 rgba(0,0,0,0)";
            e.currentTarget.style.borderColor = "transparent";
          }}
        >
          <span className="relative z-10 group-hover:text-white whitespace-nowrap">
            {topic.title}
          </span>
        </Link>
        ))}
      </div>
    </section>
  );
}