import { Card } from "@/components/ui";
import { Heart, Target, ShieldCheck, Mail } from "lucide-react";

const team = [
  {
    name: "[Your Name]",
    role: "Computer Science — Engineering & AI",
    bio: "Add your bio here: what you study, your interest in AI/health tech, and what you built on SynoraMed.",
    initials: "CS",
  },
  {
    name: "[Friend's Name]",
    role: "Medical — Clinical Content & Validation",
    bio: "Add her bio here: her medical background and how she ensures every explanation is accurate and patient-friendly.",
    initials: "MD",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <header className="text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">About Us</h1>
        <p className="mx-auto mt-4 max-w-2xl text-muted">
          We&apos;re building SynoraMed so that everyone can understand their own
          health — not just the professionals reading the reports.
        </p>
      </header>

      {/* Mission */}
      <Card className="mt-12 p-7">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
            <Target className="h-5 w-5" />
          </span>
          <h2 className="text-xl font-semibold">Our mission</h2>
        </div>
        <p className="mt-4 text-muted">
          Patients deserve to understand their medical reports. SynoraMed
          translates complex results into clear, trustworthy explanations —
          empowering people to ask better questions and take part in their own
          care.
        </p>
      </Card>

      {/* Story */}
      <Card className="mt-6 p-7">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-50 text-accent">
            <Heart className="h-5 w-5" />
          </span>
          <h2 className="text-xl font-semibold">What inspired us</h2>
        </div>
        <p className="mt-4 text-muted">
          [Placeholder — add your story here.] We&apos;re a Computer Science
          student and a Medical student who teamed up after realizing how often
          patients leave appointments confused by their own results. We combined
          engineering and clinical knowledge to build a tool that actually helps
          people understand their health.
        </p>
      </Card>

      {/* Team */}
      <section className="mt-12">
        <h2 className="text-center text-2xl font-semibold">Meet the team</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {team.map((member) => (
            <Card key={member.role} className="text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-brand to-accent text-xl font-semibold text-white">
                {member.initials}
              </div>
              <h3 className="mt-4 text-lg font-semibold">{member.name}</h3>
              <p className="text-sm font-medium text-brand-600">{member.role}</p>
              <p className="mt-3 text-sm text-muted">{member.bio}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Approach to accuracy */}
      <Card className="mt-12 p-7">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
            <ShieldCheck className="h-5 w-5" />
          </span>
          <h2 className="text-xl font-semibold">Our approach to safety & accuracy</h2>
        </div>
        <ul className="mt-4 space-y-2 text-muted">
          <li>• Every explanation is reviewed by a medical team member.</li>
          <li>• We cite reputable sources (MedlinePlus, Mayo Clinic, NIH).</li>
          <li>• SynoraMed explains — it never diagnoses or recommends treatment.</li>
          <li>• We encourage users to always consult their doctor.</li>
        </ul>
      </Card>

      {/* Contact */}
      <Card className="mt-6 p-7">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-50 text-accent">
            <Mail className="h-5 w-5" />
          </span>
          <h2 className="text-xl font-semibold">Get in touch</h2>
        </div>
        <p className="mt-4 text-muted">
          Questions or feedback? Reach us at{" "}
          <span className="font-medium text-foreground">[your-email@example.com]</span>.
        </p>
      </Card>
    </div>
  );
}
