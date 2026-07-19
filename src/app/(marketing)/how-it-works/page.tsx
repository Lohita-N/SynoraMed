import { Card, Button } from "@/components/ui";
import { Upload, Sparkles, MessageCircleQuestion, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "1. Upload your report",
    desc: "Add a PDF or a clear photo of a blood test, MRI, CT, or pathology report. Remove any personal details you don't want to share.",
  },
  {
    icon: Sparkles,
    title: "2. AI reads and explains it",
    desc: "SynoraMed extracts the text, identifies medical terms and values, and rewrites everything in plain, patient-friendly language.",
  },
  {
    icon: MessageCircleQuestion,
    title: "3. Understand and prepare",
    desc: "Review a simple summary, see which values are abnormal, and get a checklist of questions to ask your doctor.",
  },
];

export default function HowItWorksPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <header className="text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          How It Works
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-muted">
          From confusing report to clear understanding in three steps.
        </p>
      </header>

      <div className="mt-12 space-y-6">
        {steps.map((s) => (
          <Card key={s.title} className="flex items-start gap-5 p-6">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
              <s.icon className="h-6 w-6" />
            </span>
            <div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-1 text-muted">{s.desc}</p>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-900">
        <strong>Your privacy matters.</strong> For now, reports are processed to
        generate your explanation and are handled securely. SynoraMed is
        educational and never a substitute for professional medical advice.
      </div>

      <div className="mt-10 text-center">
        <Button href="/signup" className="h-12 px-7">
          Get Started <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
