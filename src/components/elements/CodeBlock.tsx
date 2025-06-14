"use client";

import React from "react";
import { simpleTolkTokenizer, tolkThemeColors } from "@/utils/syntax";


export default function CodeBlock({ code, filename = "example.tolk" }: { code: string; filename?: string }) {
    const lines = code.split('\n');
  
    return (
      <div className="scrollbar-none bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden h-[70vh] flex flex-col">
        <div className="flex items-center gap-2 px-4 py-3 bg-black/50 border-b border-gray-700/50">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span className="ml-4 text-sm font-mono text-gray-400">{filename}</span>
        </div>
  
        <div className="scrollbar-none overflow-auto px-5 py-5 flex-1 font-mono text-sm sm:text-base whitespace-pre leading-5">
          {lines.map((line, lineIndex) => {
            const tokens = simpleTolkTokenizer(line);
            return (
              <div key={lineIndex} style={{ display: 'block' }}>
                {tokens.map((token, i) => (
                  <span key={i} style={{ color: tolkThemeColors[token.type] || tolkThemeColors.default }}>
                    {token.content}
                  </span>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    );
  }