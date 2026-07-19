import Link from "next/link";
import {
  FileText,
  Sparkles,
  AlertTriangle,
  Ruler,
  MessageCircleQuestion,
  BookMarked,
  LineChart,
  Languages,
  ShieldCheck,
  Upload,
  Stethoscope,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Button, Card } from "@/components/ui";

const features = [
  {
    icon: Sparkles,
    title: "Explains every term",
    desc: "Plain-language meaning for each piece of medical jargon.",
  },
  {
    icon: AlertTriangle,
    title: "Highlights abnormal values",
    desc: "Instantly see which results fall outside the normal range.",
  },
  {
    icon: Ruler,
    title: "Compares to normal ranges",
    desc: "Every value shown against reference ranges with context.",
  },
  {
    icon: MessageCircleQuestion,
    title: "Questions to ask your doctor",
    desc: "A ready checklist so you make the most of your appointment.",
  },
  {
    icon: BookMarked,
    title: "Trustworthy references",
    desc: "Links to reputable sources like MedlinePlus and Mayo Clinic.",
  },
  {
    icon: LineChart,
    title: "Track reports over time",
    desc: "Watch trends across multiple reports and years.",
  },
  {
    icon: Stethoscope,
    title: "Anatomy illustrations",
    desc: "See the parts of the body a report refers to.",
  },
  {
    icon: Languages,
    title: "Multi-language (coming soon)",
    desc: "Understand your health in the language you're most comfortable in.",
  },
];

const steps = [
  {
    icon: Upload,
    title: "1. Upload your report",
    desc: "Add a PDF or photo of a blood test, MRI, CT, or pathology report.",
  },
  {
    icon: Sparkles,
    title: "2. AI explains it",
    desc: "SynoraMed reads it and translates the jargon into plain language.",
  },
  {
    icon: MessageCircleQuestion,
    title: "3. Understand & ask better",
    desc: "See what matters and walk into your appointment prepared.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Base gradient + subtle grid */}
        <div className="absolute inset-0 -z-20 bg-gradient-to-br from-brand-50 via-background to-accent-50/50" />
        <div
          className="absolute inset-0 -z-10 opacity-[0.4]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #e5e9ee 1px, transparent 1px), linear-gradient(to bottom, #e5e9ee 1px, transparent 1px)",
            backgroundSize: "44px 44px",
            maskImage:
              "radial-gradient(ellipse 80% 60% at 70% 20%, black 40%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 60% at 70% 20%, black 40%, transparent 100%)",
          }}
        />

        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-2 lg:gap-8 lg:py-28">
          {/* Left: copy */}
          <div className="max-w-xl">
            <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-3 py-1 text-xs font-medium text-brand-600 backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" />
              AI report explainer
            </div>

            <h1 className="animate-fade-up animation-delay-1000 mt-5 text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Turn medical{" "}
              <span className="relative whitespace-nowrap">
                <span className="animate-gradient-text bg-gradient-to-r from-brand via-accent to-brand bg-clip-text text-transparent">
                  jargon
                </span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 12"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 9C50 3 150 3 198 9"
                    stroke="url(#u)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="u" x1="0" y1="0" x2="200" y2="0">
                      <stop stopColor="var(--brand)" />
                      <stop offset="1" stopColor="var(--accent)" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <br />
              into plain language.
            </h1>

            <p className="animate-fade-up animation-delay-2000 mt-6 text-lg text-muted">
              Upload a report and SynoraMed explains every term, flags what&apos;s
              abnormal, and tells you what to ask your doctor.
            </p>

            <div className="animate-fade-up animation-delay-2000 mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/signup" className="group h-12 px-7">
                Get Started
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="secondary" href="/how-it-works" className="h-12 px-7">
                See How It Works
              </Button>
            </div>
          </div>

          {/* Right: live "report being decoded" card */}
          <div className="animate-fade-up animation-delay-2000 relative mx-auto w-full max-w-md">
            {/* glow */}
            <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-tr from-brand/25 via-accent/20 to-transparent blur-3xl" />

            <div className="animate-float relative overflow-hidden rounded-2xl border border-border bg-surface p-6 shadow-xl lg:rotate-2 lg:transition-transform lg:hover:rotate-0">
              {/* Scan line (AI reading the report) */}
              <span className="animate-scan pointer-events-none absolute left-0 right-0 h-16 -translate-y-1/2 bg-gradient-to-b from-transparent via-brand/15 to-transparent" />
              <span className="animate-scan pointer-events-none absolute left-0 right-0 h-px bg-brand shadow-[0_0_14px_2px] shadow-brand/50" />

              {/* Card header */}
              <div className="flex items-center gap-2 border-b border-border pb-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                  <FileText className="h-4 w-4" />
                </span>
                <span className="text-sm font-medium">Chest_CT_scan.pdf</span>
                <span className="ml-auto inline-flex items-center gap-1 rounded-full bg-accent-50 px-2 py-0.5 text-[11px] font-medium text-accent">
                  <span className="h-1.5 w-1.5 animate-ping rounded-full bg-accent" />
                  Reading…
                </span>
              </div>

              {/* Raw report text with highlighted jargon */}
              <p className="mt-4 font-mono text-[13px] leading-7 text-foreground">
                Mild bilateral{" "}
                <span className="animate-term rounded px-1 font-semibold text-brand-600 underline decoration-brand/40 decoration-dotted underline-offset-4">
                  pleural effusion
                </span>{" "}
                with bibasal{" "}
                <span className="animate-term rounded px-1 font-semibold text-brand-600 underline decoration-brand/40 decoration-dotted underline-offset-4">
                  atelectasis
                </span>
                .
              </p>

              {/* Plain-language annotations */}
              <div className="mt-4 space-y-2">
                <div className="animate-pop animation-delay-2000 flex items-start gap-2 rounded-xl bg-brand-50 p-3">
                  <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                  <p className="text-xs text-foreground">
                    <span className="font-semibold">Pleural effusion:</span> a small
                    amount of fluid has built up around the lungs.
                  </p>
                </div>
                <div className="animate-pop animation-delay-4000 flex items-start gap-2 rounded-xl bg-accent-50 p-3">
                  <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <p className="text-xs text-foreground">
                    <span className="font-semibold">Atelectasis:</span> a small area
                    of the lung is slightly collapsed — often mild.
                  </p>
                </div>
              </div>

              {/* Footer status */}
              <div className="mt-4 flex items-center gap-2 border-t border-border pt-3 text-xs font-medium text-brand-600">
                <CheckCircle2 className="h-4 w-4" />
                Explained · 2 terms simplified
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold sm:text-3xl">
              Medical reports are written for doctors — not patients.
            </h2>
            <p className="mt-4 text-muted">
              Most people receive results full of terms they&apos;ve never seen,
              with no explanation of what&apos;s normal, what&apos;s concerning,
              or what to do next. SynoraMed bridges that gap.
            </p>
          </div>
          <Card className="relative overflow-hidden p-6">
            <p className="text-sm font-medium text-muted">
              What patients actually see:
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                { t: "Bilateral" },
                { t: "Atelectasis", q: true },
                { t: "Pleural effusion", q: true },
                { t: "Hyperintensity" },
                { t: "Bibasal" },
                { t: "Eosinophilia", q: true },
                { t: "Nonspecific" },
                { t: "Reticulonodular" },
                { t: "Hepatic steatosis", q: true },
                { t: "Lymphadenopathy" },
                { t: "Interstitial" },
                { t: "Sclerotic lesion", q: true },
                { t: "Hgb 11.2 g/dL" },
                { t: "Idiopathic" },
              ].map((j) => (
                <span
                  key={j.t}
                  className={`inline-flex items-center gap-1 rounded-full border px-3 py-1 text-sm ${
                    j.q
                      ? "border-dashed border-rose-200 bg-rose-50/60 text-rose-500"
                      : "border-border bg-surface-muted text-muted"
                  }`}
                >
                  {j.t}
                  {j.q && <span className="font-semibold">?</span>}
                </span>
              ))}
            </div>

            {/* fade + one clear answer */}
            <div className="mt-5 border-t border-border pt-5">
              <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand to-accent px-4 py-2 text-sm font-medium text-white shadow-sm">
                <Sparkles className="h-4 w-4" />
                SynoraMed explains all of it — in plain English
              </span>
            </div>
          </Card>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="text-center">
            <h2 className="text-2xl font-semibold sm:text-3xl">How it works</h2>
            <p className="mt-3 text-muted">Three simple steps.</p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {steps.map((s) => (
              <Card key={s.title} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted">{s.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="text-center">
          <h2 className="text-2xl font-semibold sm:text-3xl">
            Everything you need to make sense of your health
          </h2>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <Card key={f.title}>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-50 text-accent">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-3 font-semibold">{f.title}</h3>
              <p className="mt-1 text-sm text-muted">{f.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Trust */}
      <section className="bg-surface">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6">
          <ShieldCheck className="mx-auto h-10 w-10 text-brand" />
          <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">
            Trustworthy by design
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            SynoraMed is built by a CS + medical student team. Every explanation
            is reviewed for accuracy, cites reputable sources, and is designed to
            help you understand — never to diagnose or replace your doctor.
          </p>
        </div>
      </section>

      {/* Safety strip */}
      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-900">
          <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0" />
          <p>
            <strong>Important:</strong> SynoraMed provides educational information
            only. It does not diagnose conditions or recommend treatment. Always
            consult a qualified healthcare professional about your results.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-brand to-accent px-8 py-14 text-center text-white">
          <h2 className="text-2xl font-semibold sm:text-3xl">
            Ready to understand your reports?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-white/90">
            Create a free account and upload your first report in minutes.
          </p>
          <div className="mt-7">
            <Link
              href="/signup"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-7 text-sm font-semibold text-brand-600 transition hover:bg-white/90"
            >
              Get Started <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
