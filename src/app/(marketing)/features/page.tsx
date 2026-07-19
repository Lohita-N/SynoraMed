import { Card, Button } from "@/components/ui";
import {
  Sparkles,
  AlertTriangle,
  Ruler,
  MessageCircleQuestion,
  BookMarked,
  LineChart,
  Stethoscope,
  Languages,
  FileText,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Plain-language term explanations",
    desc: "Every piece of jargon in your report is translated into simple language, with why it matters.",
  },
  {
    icon: AlertTriangle,
    title: "Abnormal value highlighting",
    desc: "Results outside the normal range are flagged and color-coded so nothing important gets missed.",
  },
  {
    icon: Ruler,
    title: "Normal range comparison",
    desc: "See each value plotted against its reference range for your age and sex.",
  },
  {
    icon: MessageCircleQuestion,
    title: "Questions to ask your doctor",
    desc: "A tailored checklist of questions based on your specific findings.",
  },
  {
    icon: BookMarked,
    title: "Trustworthy references",
    desc: "Educational links to MedlinePlus, Mayo Clinic, NIH and other reputable sources.",
  },
  {
    icon: LineChart,
    title: "Trends over time",
    desc: "Track how key values change across multiple reports and years.",
  },
  {
    icon: Stethoscope,
    title: "Anatomy illustrations",
    desc: "Visualize the parts of the body your report refers to.",
  },
  {
    icon: FileText,
    title: "Report library",
    desc: "Keep all your explained reports organized in one secure place.",
  },
  {
    icon: Languages,
    title: "Multi-language (coming soon)",
    desc: "Understand your health in your preferred language.",
  },
];

export default function FeaturesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <header className="text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Features</h1>
        <p className="mx-auto mt-4 max-w-2xl text-muted">
          Everything SynoraMed does to help you make sense of your medical
          reports.
        </p>
      </header>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <Card key={f.title}>
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
              <f.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-semibold">{f.title}</h3>
            <p className="mt-2 text-sm text-muted">{f.desc}</p>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button href="/signup" className="h-12 px-7">
          Try It Free <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
