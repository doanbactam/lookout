import { Onboarding } from "@/components/onboarding";

interface PageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function Page({ searchParams }: PageProps) {
  const params = searchParams;
  return <Onboarding searchParams={params} />;
}
