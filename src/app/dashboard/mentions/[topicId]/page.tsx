import {
  MentionsBreadcrumb,
  MentionsToolbar,
  MentionsTable,
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
      <MentionsBreadcrumb topicId={topicId} />
      <MentionsToolbar topicId={topicId} />
      <MentionsTable topicId={topicId} />
    </PageContainer>
  );
}
