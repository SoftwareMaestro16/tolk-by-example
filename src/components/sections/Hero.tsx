import { ArrowDown, FileText, Rocket } from "lucide-react";

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black/80">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 100\'%3E%3Ccircle cx=\'50\' cy=\'50\' r=\'40\' fill=\'none\' stroke=\'%230000ff33\' stroke-width=\'2\'/%3E%3C/svg%3E')] opacity-10 mix-blend-overlay pointer-events-none" />
      <div className="absolute top-[-50px] left-0 w-full h-[500px] bg-blue-500/15 rounded-t-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 text-center z-10">
        <div className="mb-16">
          <h1 className="whitespace-nowrap text-5xl sm:text-7xl md:text-9xl font-extrabold bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent leading-tight drop-shadow-[0_4px_6px_rgba(0,0,255,0.3)]">
            Tolk by Example
          </h1>
          <p className="text-2xl md:text-5xl text-gray-200 mb-12 font-medium max-w-3xl mx-auto tracking-wide">
            Learn Tolk in Y Minutes
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
          <button className="group bg-gradient-to-br from-blue-600 to-cyan-500 px-8 py-5 rounded-xl font-bold text-xl text-white shadow-[0_4px_12px_rgba(0,112,255,0.3)] hover:bg-blue-700 transition-colors duration-300 flex items-center gap-4">
            <a
              href="#examples"
              className="flex items-center gap-4"
            >
              <Rocket size={26} />
              Get Started
              <ArrowDown size={20} />
            </a>
          </button>

          <button className="group border-2 border-gray-700 bg-gray-800 hover:border-cyan-400 hover:bg-gray-700 px-8 py-5 rounded-xl font-bold text-xl text-white shadow-[0_2px_8px_rgba(0,0,0,0.4)] flex items-center gap-4">
            <a
              href="https://docs.ton.org/v3/documentation/smart-contracts/tolk/overview"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4"
            >
              <FileText size={27} />
              Docs
            </a>
          </button>
        </div>
      </div>
    </section>
  );
}