import { getTopicContent } from "@/utils/getTopicContent";
import { ReactNode } from "react";

export async function generateMetadata({ params }: { params: Promise<{ topic: string }> }) {
    const { topic } = await params;
    const content = await getTopicContent(topic);
    return {
      title: content ? `Tolk by Example - ${content.title}` : "Not Found",
    };
  }
export default function TopicLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}