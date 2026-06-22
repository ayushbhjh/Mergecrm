import { AuthShell } from "@/components/auth-shell";
import { LoginForm } from "@/components/auth/login-form";

export default function LoginPage() {
  return (
    <AuthShell title="Welcome back" description="Sign in to manage leads, follow-ups, and bookings.">
      <LoginForm />
    </AuthShell>
  );
}
