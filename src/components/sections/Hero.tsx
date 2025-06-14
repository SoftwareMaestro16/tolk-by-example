import { ArrowDown, FileText, Rocket } from "lucide-react";

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-cyan-900/20 pointer-events-none" />

      <div className="absolute top-[-40px] left-0 w-full h-[450px] rotate-180 bg-blue-500/10 md:bg-blue-500/15 rounded-t-full blur-[100px] animate-float-slower pointer-events-none z-0" >        {/* Трансформация для эффекта дуги */}
        <div className="absolute inset-0 bg-transparent border-b-4 border-blue-500/20 rounded-b-full transform origin-top" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 text-center z-10">
        <div className="mb-12">
          <h1 className="whitespace-nowrap text-5xl sm:text-7xl md:text-9xl font-bold bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent leading-normal drop-shadow-xl">
            Tolk by Example
          </h1>
          <p className="text-3xl md:text-5xl text-gray-300 mb-16 font-semibold max-w-4xl mx-auto">
            Learn Tolk in Y Minutes.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="group bg-gradient-to-r from-blue-500 to-sky-500 hover:from-blue-600 hover:to-sky-600 px-6 sm:px-10 py-4 sm:py-5 rounded-2xl font-bold text-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 flex items-center gap-3">
            <a
              href="#examples"
              className="flex flex-row items-center gap-3 text-black"
            >
              <Rocket size={26} className="text-black" />
              Get Started
              <ArrowDown
                size={20}
                className="group-hover:translate-y-1 transition-transform text-black"
              />
            </a>
          </button>

          <button className="group border-2 bg-white border-gray-800 hover:border-sky-500 hover:border-2 px-7 sm:px-10 py-4 sm:py-5 rounded-2xl font-bold text-xl transition-all duration-300 hover:bg-white flex items-center gap-3 text-black">
            <a
              href="https://docs.ton.org/v3/documentation/smart-contracts/tolk/overview"
              target="_blank"
              rel="noreferrer"
              className="flex flex-row items-center gap-3 text-black"
            >
              <FileText size={27} className="text-black" />
              Docs
            </a>
          </button>
        </div>
      </div>
    </section>
  );
}