"use client";

import { useMemo, useState } from "react";
import { Card, StatusPill } from "@/components/ui";
import { terms } from "@/lib/mock-data";
import { Search } from "lucide-react";

export default function GlossaryPage() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(
    () =>
      terms.filter(
        (t) =>
          t.term.toLowerCase().includes(query.toLowerCase()) ||
          t.definition.toLowerCase().includes(query.toLowerCase()),
      ),
    [query],
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Glossary</h1>
        <p className="text-sm text-muted">
          Plain-language definitions of common medical terms.
        </p>
      </div>

      <div className="flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2.5">
        <Search className="h-4 w-4 text-muted" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search terms…"
          className="w-full bg-transparent text-sm outline-none placeholder:text-muted"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {filtered.map((t) => (
          <Card key={t.term}>
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">{t.term}</h3>
              <StatusPill status="info">{t.category}</StatusPill>
            </div>
            <p className="mt-2 text-sm text-foreground">{t.definition}</p>
            <p className="mt-2 text-sm text-muted">
              <strong className="text-foreground">Why it matters: </strong>
              {t.whyItMatters}
            </p>
          </Card>
        ))}
        {filtered.length === 0 && (
          <p className="text-sm text-muted">No terms found.</p>
        )}
      </div>
    </div>
  );
}
