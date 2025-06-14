import { BookOpen, GraduationCap, Users } from "lucide-react";

export function Resources() {
  return (
    <section id="resources" className="py-16 sm:py-24 bg-gray-850">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="leading-normal text-5xl sm:text-6xl font-bold text-center mb-16 sm:mb-20 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Resources for Learning Tolk
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          <a
            href="https://docs.ton.org/v3/documentation/smart-contracts/tolk/overview"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gray-900/80 backdrop-blur-sm p-10 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 block"
          >
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
              <BookOpen size={32} className="text-white" />
            </div>
            <h3 className="text-2xl font-semibold mb-6 text-white">Official Documentation</h3>
            <p className="text-gray-400 leading-relaxed text-lg">
              Dive into the comprehensive official documentation for Tolk, covering syntax, features, and best practices.
            </p>
          </a>

          <a
            href="https://t.me/tolk_lang"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gray-900/80 backdrop-blur-sm p-10 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 block"
          >
            <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
              <GraduationCap size={32} className="text-white" />
            </div>
            <h3 className="text-2xl font-semibold mb-6 text-white">Telegram</h3>
            <p className="text-gray-400 leading-relaxed text-lg">
              Join the official Tolk Telegram channel to get updates, ask questions, and connect with the community.
            </p>
          </a>

          <a
            href="https://t.me/tondev"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gray-900/80 backdrop-blur-sm p-10 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 block"
          >
            <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
              <Users size={32} className="text-white" />
            </div>
            <h3 className="text-2xl font-semibold mb-6 text-white">TonDev Community</h3>
            <p className="text-gray-400 leading-relaxed text-lg">
            Join the TonDev chat to ask questions and share your experience with the community.
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}