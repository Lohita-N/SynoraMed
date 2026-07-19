import Link from "next/link";
import {
  Card,
  CardTitle,
  CardSubtitle,
  Button,
  StatusPill,
  RangeBar,
} from "@/components/ui";
import { reports, labValues, insights } from "@/lib/mock-data";
import {
  Upload,
  FileText,
  AlertTriangle,
  HeartPulse,
  ChevronRight,
} from "lucide-react";

export default function DashboardPage() {
  const abnormal = labValues.filter((v) => v.status !== "optimal");

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold">Welcome back 👋</h1>
          <p className="text-sm text-muted">
            Here&apos;s an overview of your health data.
          </p>
        </div>
        <Button href="/upload">
          <Upload className="h-4 w-4" /> Upload New Report
        </Button>
      </div>

      {/* Summary cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          icon={<FileText className="h-5 w-5" />}
          label="Reports analyzed"
          value={String(reports.length)}
          tone="accent"
        />
        <StatCard
          icon={<AlertTriangle className="h-5 w-5" />}
          label="Values to review"
          value={String(abnormal.length)}
          tone="warning"
        />
        <StatCard
          icon={<HeartPulse className="h-5 w-5" />}
          label="Health snapshot"
          value="Watch"
          tone="brand"
        />
        <StatCard
          icon={<FileText className="h-5 w-5" />}
          label="Last report"
          value="Mar 14"
          tone="brand"
        />
      </div>

      {/* Main + right column */}
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          {/* Key areas of concern */}
          <Card>
            <div className="mb-4 flex items-center justify-between">
              <CardTitle>Key areas of concern</CardTitle>
              <Link
                href="/reports"
                className="text-sm font-medium text-brand-600"
              >
                View all
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {abnormal.map((v) => (
                <div
                  key={v.name}
                  className="rounded-xl border border-border p-4"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{v.name}</span>
                    <StatusPill status={v.status}>{v.statusLabel}</StatusPill>
                  </div>
                  <p className="mt-1 text-2xl font-semibold">
                    {v.value}
                    <span className="ml-1 text-sm font-normal text-muted">
                      {v.unit}
                    </span>
                  </p>
                  <RangeBar
                    value={v.value}
                    low={v.low}
                    high={v.high}
                    status={v.status}
                  />
                </div>
              ))}
            </div>
          </Card>

          {/* Recent reports */}
          <Card>
            <div className="mb-4 flex items-center justify-between">
              <CardTitle>Recent reports</CardTitle>
              <Link href="/reports" className="text-sm font-medium text-brand-600">
                See all
              </Link>
            </div>
            <ul className="divide-y divide-border">
              {reports.map((r) => (
                <li key={r.id}>
                  <Link
                    href={`/reports/${r.id}`}
                    className="flex items-center justify-between py-3 hover:opacity-80"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-surface-muted text-muted">
                        <FileText className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="text-sm font-medium">{r.title}</p>
                        <p className="text-xs text-muted">
                          {r.type} · {r.date}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <StatusPill status={r.status}>{r.statusLabel}</StatusPill>
                      <ChevronRight className="h-4 w-4 text-muted" />
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {/* Right column: insights */}
        <Card className="lg:col-span-1">
          <CardTitle>Latest insights</CardTitle>
          <CardSubtitle>Updates from your recent reports</CardSubtitle>
          <div className="mt-4 space-y-3">
            {insights.map((n) => (
              <div
                key={n.id}
                className="rounded-xl border border-border p-3"
              >
                <div className="flex items-start justify-between gap-2">
                  <p className="text-sm font-medium leading-snug">{n.title}</p>
                  {n.unread && (
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand" />
                  )}
                </div>
                <div className="mt-2 flex items-center gap-2 text-xs text-muted">
                  <StatusPill status="info">{n.delta}</StatusPill>
                  <span>{n.source}</span>
                  <span className="ml-auto">{n.time}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Disclaimer />
    </div>
  );
}

function StatCard({
  icon,
  label,
  value,
  tone,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  tone: "brand" | "accent" | "warning";
}) {
  const toneClass = {
    brand: "bg-brand-50 text-brand-600",
    accent: "bg-accent-50 text-accent",
    warning: "bg-amber-50 text-amber-700",
  }[tone];

  return (
    <Card className="flex items-center gap-4">
      <span className={`flex h-11 w-11 items-center justify-center rounded-xl ${toneClass}`}>
        {icon}
      </span>
      <div>
        <p className="text-sm text-muted">{label}</p>
        <p className="text-xl font-semibold">{value}</p>
      </div>
    </Card>
  );
}

export function Disclaimer() {
  return (
    <p className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-xs text-amber-900">
      <strong>Educational tool — not medical advice.</strong> SynoraMed helps you
      understand your reports but does not diagnose or treat. Always consult your
      doctor.
    </p>
  );
}
