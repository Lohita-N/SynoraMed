import Image from "next/image";
import { Card } from "@/components/ui";
import { Heart, Target, ShieldCheck, Mail } from "lucide-react";

const team = [
  {
    name: "Lohita Nagalakshmi",
    role: "Computer Science Major",
    bio: "Hi, I'm Lohita Nagalakshmi, a senior Computer Science student at the University of Texas at Dallas. I enjoy turning ideas into polished, user-focused applications by combining software engineering with UI/UX design. Whether I'm developing AI-powered tools, web applications, or mobile experiences, I love creating products that are practical, accessible, and enjoyable to use. I'm constantly exploring new technologies and looking for opportunities to grow as both an engineer and a designer.",
    initials: "LN",
    image: "/team/lohita.png",
    linkedin: "https://www.linkedin.com/in/lohita-nagalakshmi-b39522327",
    github: "https://github.com/Lohita-N",
  },
  {
    name: "[Friend's Name]",
    role: "Medical — Clinical Content & Validation",
    bio: "Add her bio here: her medical background and how she ensures every explanation is accurate and patient-friendly.",
    initials: "MD",
    image: null,
    linkedin: null,
    github: null,
  },
];

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.05-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.29 0 .32.22.7.83.58A12 12 0 0 0 24 12.5C24 5.87 18.63.5 12 .5Z" />
    </svg>
  );
}

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
              {member.image ? (
                <Image
                  src={member.image}
                  alt={`Photo of ${member.name}`}
                  width={80}
                  height={80}
                  className="mx-auto h-20 w-20 rounded-full object-cover"
                />
              ) : (
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-brand to-accent text-xl font-semibold text-white">
                  {member.initials}
                </div>
              )}
              <h3 className="mt-4 text-lg font-semibold">{member.name}</h3>
              <p className="text-sm font-medium text-brand-600">{member.role}</p>
              <p className="mt-3 text-sm text-muted">{member.bio}</p>
              {(member.linkedin || member.github) && (
                <div className="mt-4 flex items-center justify-center gap-3">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} on LinkedIn`}
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-50 text-brand-600 transition hover:bg-brand-600 hover:text-white"
                    >
                      <LinkedInIcon className="h-4 w-4" />
                    </a>
                  )}
                  {member.github && (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} on GitHub`}
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-50 text-brand-600 transition hover:bg-brand-600 hover:text-white"
                    >
                      <GitHubIcon className="h-4 w-4" />
                    </a>
                  )}
                </div>
              )}
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
