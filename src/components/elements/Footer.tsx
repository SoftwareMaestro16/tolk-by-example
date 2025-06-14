"use client";

import Image from "next/image";
import { FileText, Github, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900/15 pt-12 pb-10 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <div className="flex flex-row items-center gap-1">
              <Image
                src="/assets/tolk.png"
                alt="Tolk Logo"
                width={28}
                height={28}
                className="sm:w-8 sm:h-8 align-middle"
              />
              <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Tolk by Example
              </h3>
            </div>

            <p className="text-gray-400 text-lg font-medium text-left">
              The Next Generation of Smart Contract Development.
            </p>
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com/ton-blockchain/ton/tree/master/tolk"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 hover:scale-105 transform"
            >
              <Github size={24} />
              <span>GitHub</span>
            </a>
            <a
              href="https://t.me/tolk_lang"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 hover:scale-105 transform"
            >
              <MessageCircle size={24} />
              <span>Telegram</span>
            </a>
            <a
              href="https://docs.ton.org/v3/documentation/smart-contracts/tolk/overview"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 hover:scale-105 transform"
            >
              <FileText size={24} />
              <span>Docs</span>
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row sm:justify-between text-gray-500">
          <p>&copy; 2025 Tolk. Building the Future of TON Development.</p>
          <a
            href="https://t.me/SoftwareMaestro"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 sm:mt-0"
          >
            <p>@SoftwareMaestro</p>
          </a>
        </div>
      </div>
    </footer>
  );
}