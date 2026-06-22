import { AuthShell } from "@/components/auth-shell";
import { ResetPasswordForm } from "@/components/auth/reset-password-form";

export default function ResetPasswordPage() {
  return (
    <AuthShell title="Reset password" description="Choose a new password and return to the CRM securely.">
      <ResetPasswordForm />
    </AuthShell>
  );
}
