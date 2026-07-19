"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Card,
  CardTitle,
  StatusPill,
  RangeBar,
  Button,
} from "@/components/ui";
import { ValueChart } from "@/components/app/ValueChart";
import {
  labValues,
  terms,
  questions,
  references,
} from "@/lib/mock-data";
import {
  ArrowLeft,
  Download,
  ChevronDown,
  Copy,
  ExternalLink,
} from "lucide-react";

const tabs = [
  "Summary",
  "Terms Explained",
  "Lab Values",
  "Questions to Ask",
  "References",
] as const;

export default function ReportResultsPage() {
  const [tab, setTab] = useState<(typeof tabs)[number]>("Summary");

  return (
    <div className="space-y-6">
      {/* Back + header */}
      <Link
        href="/reports"
        className="inline-flex items-center gap-1 text-sm text-muted hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" /> Back to reports
      </Link>

      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-semibold">Complete Blood Count (CBC)</h1>
            <StatusPill status="watch">2 to review</StatusPill>
          </div>
          <p className="text-sm text-muted">Blood test · Mar 14, 2024</p>
        </div>
        <Button variant="secondary">
          <Download className="h-4 w-4" /> Download summary
        </Button>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 overflow-x-auto rounded-full border border-border bg-surface p-1">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              tab === t
                ? "bg-brand-50 text-brand-600"
                : "text-muted hover:text-foreground"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {tab === "Summary" && <SummaryTab />}
      {tab === "Terms Explained" && <TermsTab />}
      {tab === "Lab Values" && <ValuesTab />}
      {tab === "Questions to Ask" && <QuestionsTab />}
      {tab === "References" && <ReferencesTab />}

      <p className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-xs text-amber-900">
        <strong>Educational tool — not medical advice.</strong> Discuss these
        results with your doctor.
      </p>
    </div>
  );
}

function SummaryTab() {
  return (
    <Card>
      <CardTitle>Plain-language summary</CardTitle>
      <p className="mt-3 text-muted">
        Your blood count is mostly normal. Two values stand out: your{" "}
        <strong className="text-foreground">hemoglobin</strong> is slightly below
        the normal range, and your{" "}
        <strong className="text-foreground">LDL cholesterol</strong> is higher
        than recommended. Neither is an emergency, but both are worth discussing
        with your doctor — especially since they&apos;ve been trending in this
        direction over the past year.
      </p>
      <div className="mt-4 flex gap-2">
        <span className="rounded-lg bg-surface-muted px-3 py-1 text-xs text-muted">
          Reading level: Simple
        </span>
        <span className="rounded-lg bg-surface-muted px-3 py-1 text-xs text-muted">
          Detailed
        </span>
      </div>
    </Card>
  );
}

function TermsTab() {
  const [open, setOpen] = useState<string | null>(terms[0]?.term ?? null);
  return (
    <div className="space-y-3">
      {terms.map((t) => {
        const isOpen = open === t.term;
        return (
          <Card key={t.term} className="p-0">
            <button
              onClick={() => setOpen(isOpen ? null : t.term)}
              className="flex w-full items-center justify-between px-5 py-4 text-left"
            >
              <div className="flex items-center gap-3">
                <span className="font-medium">{t.term}</span>
                <StatusPill status="info">{t.category}</StatusPill>
              </div>
              <ChevronDown
                className={`h-4 w-4 text-muted transition-transform ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isOpen && (
              <div className="border-t border-border px-5 py-4 text-sm">
                <p className="text-foreground">{t.definition}</p>
                <p className="mt-2 text-muted">
                  <strong className="text-foreground">Why it matters: </strong>
                  {t.whyItMatters}
                </p>
              </div>
            )}
          </Card>
        );
      })}
    </div>
  );
}

function ValuesTab() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {labValues.map((v) => (
        <Card key={v.name}>
          <div className="flex items-center justify-between">
            <CardTitle>{v.name}</CardTitle>
            <StatusPill status={v.status}>{v.statusLabel}</StatusPill>
          </div>
          <p className="mt-1 text-2xl font-semibold">
            {v.value}
            <span className="ml-1 text-sm font-normal text-muted">{v.unit}</span>
          </p>
          <RangeBar value={v.value} low={v.low} high={v.high} status={v.status} />
          <p className="mt-1 text-xs text-muted">
            Normal range: {v.low}–{v.high} {v.unit}
          </p>
          <div className="mt-3">
            <ValueChart
              data={v.history}
              low={v.low}
              high={v.high}
              color={
                v.status === "high"
                  ? "#e11d48"
                  : v.status === "watch"
                    ? "#d97706"
                    : "#0d9488"
              }
            />
          </div>
        </Card>
      ))}
    </div>
  );
}

function QuestionsTab() {
  return (
    <Card>
      <div className="flex items-center justify-between">
        <CardTitle>Questions to ask your doctor</CardTitle>
        <Button variant="secondary">
          <Copy className="h-4 w-4" /> Copy all
        </Button>
      </div>
      <ul className="mt-4 space-y-3">
        {questions.map((q, i) => (
          <li key={i} className="flex items-start gap-3">
            <input type="checkbox" className="mt-1" />
            <span className="text-sm text-foreground">{q}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}

function ReferencesTab() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {references.map((r) => (
        <a
          key={r.url}
          href={r.url}
          target="_blank"
          rel="noopener noreferrer"
          className="card flex items-start justify-between gap-3 p-5 transition hover:border-brand"
        >
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-brand-600">
              {r.source}
            </p>
            <p className="mt-1 font-medium">{r.title}</p>
            <p className="mt-1 text-xs text-muted">Related to: {r.matched}</p>
          </div>
          <ExternalLink className="h-4 w-4 shrink-0 text-muted" />
        </a>
      ))}
    </div>
  );
}
