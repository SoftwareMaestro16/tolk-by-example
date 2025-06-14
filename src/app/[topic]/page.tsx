import { getTopicContent } from "@/utils/getTopicContent";
import { notFound } from "next/navigation";
import CodeBlock from "@/components/elements/CodeBlock";
import { topics } from "@/utils/topics";
import { TopicNavigation } from "./Topic";

export async function generateStaticParams() {
  return topics.map((topic) => ({
    topic: topic.path.slice(1),
  }));
}

interface TopicPageProps {
  params: Promise<{
    topic: string;
  }>;
}

export default async function TopicPage({ params }: TopicPageProps) {
  const { topic } = await params; 
  const content = await getTopicContent(topic);

  if (!content) {
    notFound();
  }

  const { title, description, code, name } = content;

  return (
    <main className="min-h-screen pt-28 px-6 pb-12 bg-white dark:bg-black text-black dark:text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="w-full md:w-1/2 space-y-6 prose dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold border-b border-gray-500/40 pb-3">{title}</h1>
          <div
            className="text-md sm:text-xl font-medium border-b border-gray-500/40 pb-3"
            dangerouslySetInnerHTML={{ __html: description }}
          />
          <TopicNavigation currentTopic={topic} />
        </div>
        <div className="w-full md:w-1/2">
          <CodeBlock code={code} filename={`${name}.tolk`} />
        </div>
      </div>
    </main>
  );
}