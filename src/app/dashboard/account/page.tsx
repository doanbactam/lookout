import { AccountBreadcrumb, AccountSummary } from "@/components/dashboard";
import { UsageBanner } from "@/components/usage-banner";

export default function Page() {
  return (
    <>
      <AccountBreadcrumb />
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        {/* Usage banner displays current usage and upgrade prompts */}
        <UsageBanner />
        <AccountSummary />
      </div>
    </>
  );
}
