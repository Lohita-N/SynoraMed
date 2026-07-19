import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { marketingNav } from "@/lib/navigation";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <Logo />
            <p className="mt-3 max-w-sm text-sm text-muted">
              Understand your medical reports, not just receive them.
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {marketingNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/login" className="text-sm text-muted hover:text-foreground">
              Log In
            </Link>
          </nav>
        </div>
        <div className="mt-8 border-t border-border pt-6 text-xs text-muted">
          <p>
            <strong className="text-foreground">Medical disclaimer:</strong>{" "}
            SynoraMed is an educational tool and does not provide medical advice,
            diagnosis, or treatment. Always consult a qualified healthcare
            professional.
          </p>
          <p className="mt-2">
            © {new Date().getFullYear()} SynoraMed. A student portfolio project.
          </p>
        </div>
      </div>
    </footer>
  );
}
