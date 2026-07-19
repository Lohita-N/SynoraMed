import { Card, CardTitle, Button } from "@/components/ui";
import { Disclaimer } from "../dashboard/page";
import { UploadCloud, FileText, ShieldCheck } from "lucide-react";

export default function UploadPage() {
  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Upload a report</h1>
        <p className="text-sm text-muted">
          Add a PDF or photo of your medical report and we&apos;ll explain it.
        </p>
      </div>

      {/* Dropzone (UI only for now) */}
      <Card className="border-dashed">
        <div className="flex flex-col items-center justify-center gap-3 py-10 text-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
            <UploadCloud className="h-7 w-7" />
          </span>
          <div>
            <p className="font-medium">Drag & drop your report here</p>
            <p className="text-sm text-muted">or click to browse your files</p>
          </div>
          <Button>Choose file</Button>
          <div className="mt-2 flex gap-2 text-xs text-muted">
            <span className="rounded-full bg-surface-muted px-2 py-1">PDF</span>
            <span className="rounded-full bg-surface-muted px-2 py-1">JPG</span>
            <span className="rounded-full bg-surface-muted px-2 py-1">PNG</span>
          </div>
        </div>
      </Card>

      {/* Metadata */}
      <Card>
        <CardTitle>Report details (optional)</CardTitle>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="mb-1 block text-sm font-medium">Report type</span>
            <select className="w-full rounded-lg border border-border bg-white px-3 py-2 text-sm outline-none focus:border-brand">
              <option>Blood test</option>
              <option>MRI</option>
              <option>CT scan</option>
              <option>Pathology</option>
              <option>Other</option>
            </select>
          </label>
          <label className="block">
            <span className="mb-1 block text-sm font-medium">Report date</span>
            <input
              type="date"
              className="w-full rounded-lg border border-border bg-white px-3 py-2 text-sm outline-none focus:border-brand"
            />
          </label>
        </div>
        <label className="mt-4 flex items-start gap-2 text-sm text-muted">
          <input type="checkbox" className="mt-0.5" />
          I&apos;ve removed personal details (name, date of birth, ID) from this
          report.
        </label>
      </Card>

      <div className="flex items-center gap-2 rounded-xl bg-brand-50 p-4 text-sm text-brand-600">
        <ShieldCheck className="h-5 w-5 shrink-0" />
        Your report is processed securely to generate your explanation.
      </div>

      <div className="flex justify-end gap-3">
        <Button variant="secondary" href="/dashboard">
          Cancel
        </Button>
        <Button>
          <FileText className="h-4 w-4" /> Analyze report
        </Button>
      </div>

      <Disclaimer />
    </div>
  );
}
