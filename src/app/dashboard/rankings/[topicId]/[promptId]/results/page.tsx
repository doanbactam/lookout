import { Suspense } from "react";
import {
  RankingsBreadcrumb,
  ResultsLoadingSkeleton,
  ResultsContent,
} from "@/components/dashboard";
import { PageContainer } from "@/components/ui/page-container";

interface ResultsPageProps {
  params: { topicId: string; promptId: string };
}

export default async function ResultsPage({ params }: ResultsPageProps) {
  const { promptId, topicId } = params;

  return (
    <PageContainer className="flex flex-1 flex-col gap-4">
      <RankingsBreadcrumb topicId={topicId} page="results" />
      <Suspense fallback={<ResultsLoadingSkeleton />}>
        <ResultsContent promptId={promptId} />
      </Suspense>
    </PageContainer>
  );
}
