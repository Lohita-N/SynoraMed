import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";

/* ---------------- Card ---------------- */
export function Card({
  className,
  children,
  ...props
}: ComponentProps<"div">) {
  return (
    <div className={cn("card p-5", className)} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h3 className={cn("text-base font-semibold text-foreground", className)}>
      {children}
    </h3>
  );
}

export function CardSubtitle({ children }: { children: ReactNode }) {
  return <p className="mt-0.5 text-sm text-muted">{children}</p>;
}

/* ---------------- Button ---------------- */
type ButtonVariant = "primary" | "secondary" | "ghost";

const buttonStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-brand text-white hover:bg-brand-600 shadow-sm",
  secondary:
    "bg-white text-foreground border border-border hover:bg-surface-muted",
  ghost: "text-foreground hover:bg-surface-muted",
};

export function Button({
  variant = "primary",
  className,
  href,
  children,
  ...props
}: {
  variant?: ButtonVariant;
  href?: string;
  children: ReactNode;
  className?: string;
} & ComponentProps<"button">) {
  const classes = cn(
    "inline-flex h-10 items-center justify-center gap-2 rounded-full px-5 text-sm font-medium transition-colors disabled:opacity-60",
    buttonStyles[variant],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

/* ---------------- Badge / StatusPill ---------------- */
export type Status = "optimal" | "watch" | "high" | "info";

const statusStyles: Record<Status, string> = {
  optimal: "bg-brand-50 text-brand-600",
  watch: "bg-amber-50 text-amber-700",
  high: "bg-rose-50 text-rose-700",
  info: "bg-accent-50 text-accent",
};

export function StatusPill({
  status,
  children,
}: {
  status: Status;
  children: ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium",
        statusStyles[status],
      )}
    >
      {children}
    </span>
  );
}

/* ---------------- RangeBar (value vs. reference range) ---------------- */
export function RangeBar({
  value,
  low,
  high,
  status = "optimal",
}: {
  value: number;
  low: number;
  high: number;
  status?: Status;
}) {
  // Position value on a bar padded 20% below low and above high.
  const span = high - low || 1;
  const min = low - span * 0.4;
  const max = high + span * 0.4;
  const pct = Math.min(100, Math.max(0, ((value - min) / (max - min)) * 100));
  const dot =
    status === "high"
      ? "bg-rose-500"
      : status === "watch"
        ? "bg-amber-500"
        : "bg-brand";

  return (
    <div className="mt-2">
      <div className="relative h-2 w-full rounded-full bg-gradient-to-r from-brand via-amber-300 to-rose-400 opacity-90">
        <span
          className={cn(
            "absolute -top-1 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-white shadow",
            dot,
          )}
          style={{ left: `${pct}%` }}
        />
      </div>
      <div className="mt-1 flex justify-between text-[10px] text-muted">
        <span>{low}</span>
        <span>{high}</span>
      </div>
    </div>
  );
}
