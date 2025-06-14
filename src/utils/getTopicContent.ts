import { marked } from "marked";
import { notFound } from "next/navigation";

export async function getTopicContent(slug: string) {
  try {
    const topicModule = await import(`../content/topics/${slug}.ts`);

    const topic = topicModule.default || topicModule[`${slug}Topic`] || Object.values(topicModule)[0];
  
    if (!topic || !topic.description) {
      notFound();
    }

    const descriptionHTML = marked(topic.description ?? "");

    return {
      id: topic.id,
      title: topic.title,
      description: descriptionHTML,
      code: topic.code,
      name: topic.name,
    };
  } catch (error) {
    console.error(`Error loading topic '${slug}':`, error);
    notFound();
  }
}