import { AuthShell } from "@/components/auth-shell";
import { SignupForm } from "@/components/auth/signup-form";

export default function SignupPage() {
  return (
    <AuthShell title="Create your account" description="Start with the Merge CRM workspace and invite the team as you grow.">
      <SignupForm />
    </AuthShell>
  );
}
