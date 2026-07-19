"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Card, StatusPill } from "@/components/ui";
import { reports } from "@/lib/mock-data";
import { FileText, Search, ChevronRight } from "lucide-react";

const filters = ["All", "Blood", "Imaging", "Pathology"] as const;

export default function ReportsPage() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return reports.filter((r) => {
      const matchesType = filter === "All" || r.type === filter;
      const matchesQuery = r.title
        .toLowerCase()
        .includes(query.toLowerCase());
      return matchesType && matchesQuery;
    });
  }, [filter, query]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">My Reports</h1>
        <p className="text-sm text-muted">All your analyzed reports in one place.</p>
      </div>

      {/* Filter + search bar */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex gap-1 rounded-full border border-border bg-surface p-1">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                filter === f
                  ? "bg-brand-50 text-brand-600"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-2">
          <Search className="h-4 w-4 text-muted" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search reports…"
            className="bg-transparent text-sm outline-none placeholder:text-muted"
          />
        </div>
      </div>

      <Card className="p-0">
        <ul className="divide-y divide-border">
          {filtered.map((r) => (
            <li key={r.id}>
              <Link
                href={`/reports/${r.id}`}
                className="flex items-center justify-between px-5 py-4 hover:bg-surface-muted"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-muted text-muted">
                    <FileText className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-medium">{r.title}</p>
                    <p className="text-xs text-muted">
                      {r.type} · {r.date} · {r.findings} finding
                      {r.findings === 1 ? "" : "s"}
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
          {filtered.length === 0 && (
            <li className="px-5 py-10 text-center text-sm text-muted">
              No reports match your filters.
            </li>
          )}
        </ul>
      </Card>
    </div>
  );
}
