import {
  TopicsTable,
  TopicsToolbar,
  TopicsBreadcrumb,
} from "@/components/dashboard";
import { PageContainer } from "@/components/ui/page-container";

export default function Page() {
  return (
    <PageContainer className="flex flex-1 flex-col gap-4">
      <TopicsBreadcrumb />
      <TopicsToolbar />
      <TopicsTable />
    </PageContainer>
  );
}
