import { Code, Shield, Zap } from "lucide-react";

export function Features() {
  return (
    <section id="features" className="py-16 sm:py-24 bg-gray-900/30">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="leading-normal text-5xl sm:text-6xl font-bold text-center mb-15 sm:mb-20 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Learn Tolk with Examples
        </h2>
        
        <div className="grid md:grid-cols-3 gap-10">
          <div className="group bg-gray-900/50 backdrop-blur-sm p-10 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
              <Code size={32} className="text-white" />
            </div>
            <h3 className="text-2xl font-semibold mb-6 text-white">Explore TypeScript-like Syntax</h3>
            <p className="text-gray-400 leading-relaxed text-lg">
              Dive into Tolk’s familiar syntax with step-by-step examples, making it easy to learn blockchain coding from the ground up.
            </p>
          </div>

          <div className="group bg-gray-900/50 backdrop-blur-sm p-10 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
            <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
              <Zap size={32} className="text-white" />
            </div>
            <h3 className="text-2xl font-semibold mb-6 text-white">Master Auto-packing with Demos</h3>
            <p className="text-gray-400 leading-relaxed text-lg">
              See how Tolk handles serialization with practical examples, reducing complexity and errors in your learning journey.
            </p>
          </div>

          <div className="group bg-gray-900/50 backdrop-blur-sm p-10 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
              <Shield size={32} className="text-white" />
            </div>
            <h3 className="text-2xl font-semibold mb-6 text-white">Practice Structs and Generics</h3>
            <p className="text-gray-400 leading-relaxed text-lg">
              Learn to build type-safe structs and use generics with hands-on examples, perfect for mastering Tolk’s advanced features.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}