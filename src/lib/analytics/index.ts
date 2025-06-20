import { db } from "@/db";
import { mentions, topics } from "@/db/schema";
import { eq } from "drizzle-orm";
import { generateText } from "ai";
import { openai } from "@ai-sdk/openai";

export async function generateTopicAnalytics(topicId: string) {
  const topic = await db.query.topics.findFirst({
    where: eq(topics.id, topicId),
    columns: { name: true, description: true },
  });

  if (!topic) {
    throw new Error("Topic not found");
  }

  const topicMentions = await db.query.mentions.findMany({
    where: eq(mentions.topicId, topicId),
    columns: { context: true, sentiment: true, extractedText: true },
  });

  if (topicMentions.length === 0) {
    return { summary: "No mentions found for this topic." };
  }

  const contexts = topicMentions
    .map(
      (m) => `${m.sentiment}: ${m.extractedText} - ${m.context}`
    )
    .join("\n");

  const prompt = `<ROLE>
You are a marketing analyst.
</ROLE>

<TASK>
Analyze the following brand mention data for "${topic.name}" and summarize key insights in a short paragraph. Mention trends, overall sentiment and notable competitors.
</TASK>

<MENTIONS>
${contexts}
</MENTIONS>`;

  const { text } = await generateText({
    model: openai("gpt-4o-mini"),
    prompt,
    maxTokens: 300,
    temperature: 0.3,
  });

  return { summary: text };
}
