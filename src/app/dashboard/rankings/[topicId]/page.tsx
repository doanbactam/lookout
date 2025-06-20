import {
  RankingsBreadcrumb,
  PromptToolbar,
  PromptsTable,
} from "@/components/dashboard";
import { PageContainer } from "@/components/ui/page-container";

export default async function Page({
  params,
}: {
  params: Promise<{ topicId?: string }>;
}) {
  const { topicId } = await params;

  return (
    <PageContainer className="flex flex-1 flex-col gap-4">
      <RankingsBreadcrumb topicId={topicId} page="rankings" />
      <PromptToolbar topicId={topicId} />
      <PromptsTable topicId={topicId} />
    </PageContainer>
  );
}
