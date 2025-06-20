import { LoginForm } from "@/components/login-form";
import { PageContainer } from "@/components/ui/page-container";

export default function LoginPage() {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <PageContainer className="max-w-sm">
        <LoginForm />
      </PageContainer>
    </div>
  );
}
