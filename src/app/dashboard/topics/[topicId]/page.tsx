import { Suspense } from "react";
import { DashboardOverview } from "@/components/dashboard/main/overview";
import { DashboardBreadcrumb } from "@/components/dashboard/main/breadcrumb";
import { DashboardOverviewSkeleton } from "@/components/dashboard/main/skeleton";
import { PageContainer } from "@/components/ui/page-container";

export default async function DashboardTopicPage({
  params,
}: {
  params: { topicId: string };
}) {
  const { topicId } = params;
  return (
    <PageContainer className="flex flex-1 flex-col gap-4">
      <DashboardBreadcrumb topicId={topicId} />
      <div className="min-h-[100vh] flex-1 rounded-xl md:min-h-min">
        <Suspense fallback={<DashboardOverviewSkeleton />}>
          <DashboardOverview topicId={topicId} />
        </Suspense>
      </div>
    </PageContainer>
  );
}
