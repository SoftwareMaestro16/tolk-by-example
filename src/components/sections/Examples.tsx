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
                bg-white/2
                border border-white/30 dark:border-white/10
                backdrop-blur-md
                rounded-4xl
                transition-colors duration-300
                text-black dark:text-white
                font-semibold text-lg
                hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500
                hover:text-white
                shadow-sm
                group
            "
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