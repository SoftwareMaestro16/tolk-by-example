"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { topics } from "@/utils/topics";

export function TopicNavigation({ currentTopic }: { currentTopic: string }) {
  const router = useRouter();

  const currentIndex = topics.findIndex((t) => t.path.slice(1) === currentTopic);
  const prevTopic = currentIndex > 0 ? topics[currentIndex - 1] : null;
  const nextTopic = currentIndex < topics.length - 1 ? topics[currentIndex + 1] : null;

  return (
    <div className="flex gap-4 mt-6">
      {prevTopic && (
        <button
          onClick={() => router.push(prevTopic.path)}
          className="flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-blue-500 to-sky-500 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
        >
          <ArrowLeft size={18} />
          {prevTopic.title}
        </button>
      )}
      {nextTopic && (
        <button
          onClick={() => router.push(nextTopic.path)}
          className="flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-sky-500 to-blue-500 text-white rounded-lg shadow-md  hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ml-auto"
        >
          {nextTopic.title}
          <ArrowRight size={18} />
        </button>
      )}
    </div>
  );
}