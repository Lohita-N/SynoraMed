import Link from "next/link";
import { Activity } from "lucide-react";

export function Logo({ href = "/" }: { href?: string }) {
  return (
    <Link href={href} className="flex items-center gap-2 font-semibold">
      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand to-accent text-white">
        <Activity className="h-5 w-5" strokeWidth={2.5} />
      </span>
      <span className="text-lg tracking-tight text-foreground">
        Synora<span className="text-brand">Med</span>
      </span>
    </Link>
  );
}
