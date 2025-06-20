import { StripeResult } from "@/components/stripe-result";

interface PageProps {
  searchParams: { success: string; canceled: string };
}

export default async function Page({ searchParams }: PageProps) {
  const params = searchParams;
  const success = params.success === "true";
  const canceled = params.canceled === "true";

  return <StripeResult success={success} canceled={canceled} />;
}
