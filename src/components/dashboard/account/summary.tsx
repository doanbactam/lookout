import { getUser } from "@/auth/server";
import { manageSubscription } from "@/app/actions/stripe";
import { getUserPlan, checkUsageLimit } from "@/lib/subscription";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export async function AccountSummary() {
  const user = await getUser();
  if (!user) return null;

  const plan = await getUserPlan();
  const usage = await checkUsageLimit(user.id);

  return (
    <div className="space-y-4 p-4">
      <div>
        <h2 className="text-xl font-semibold mb-2">Subscription</h2>
        <Badge variant="outline" className="mr-2">
          {plan.plan}
        </Badge>
        <span className="text-sm text-muted-foreground">Status: {plan.planStatus}</span>
      </div>
      <div className="text-sm text-muted-foreground">
        Usage: {usage.currentUsage}/{usage.limit} prompts this month
      </div>
      <form action={manageSubscription}>
        <Button type="submit" variant="outline">Manage Subscription</Button>
      </form>
    </div>
  );
}
