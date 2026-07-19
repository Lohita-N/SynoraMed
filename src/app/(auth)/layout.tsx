import { Logo } from "@/components/brand/Logo";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 bg-background px-4 py-12">
      <Logo />
      <div className="w-full max-w-md">{children}</div>
      <p className="max-w-md text-center text-xs text-muted">
        Educational tool — not medical advice. Always consult your doctor.
      </p>
    </div>
  );
}
