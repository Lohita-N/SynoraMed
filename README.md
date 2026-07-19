# SynoraMed

> Understand your medical reports, not just receive them.

SynoraMed turns confusing medical jargon (blood tests, MRI, CT, pathology reports)
into clear, plain-language explanations — every term explained, abnormal values
highlighted, questions to ask your doctor, and trustworthy references.

Built by a CS + medical student team as a portfolio project.

> **Medical disclaimer:** SynoraMed is an educational tool. It does not provide
> medical advice, diagnosis, or treatment. Always consult a qualified healthcare
> professional.

## Tech stack

- **Next.js (App Router) + TypeScript**
- **Tailwind CSS v4**
- **Supabase** — authentication (email/password)
- **lucide-react** — icons
- **recharts** — trend charts

## Project structure

```
src/
  app/
    (marketing)/        Public site (top nav + footer)
      page.tsx          Home / landing
      about/            About Us (placeholder team info)
      features/
      how-it-works/
    (auth)/             Login / Signup + auth server actions
    (app)/              Signed-in app (top nav + left sidebar)
      dashboard/        Landing page after sign-in
      upload/           Upload a report
      reports/          Report library
      reports/[id]/     Report results (Summary, Terms, Lab Values,
                        Questions, References tabs)
      trends/           Trends over time
      glossary/         Medical term dictionary
      settings/         Profile & preferences
  components/
    brand/  marketing/  app/  ui/
  lib/
    supabase/           Browser + server clients, session middleware
    navigation.ts       Nav config
    mock-data.ts        Placeholder data (replace with real data later)
  middleware.ts         Protects app routes, redirects
```

## Getting started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Set up Supabase auth (optional for UI preview):

   - Create a project at [supabase.com](https://supabase.com).
   - Copy `.env.local.example` to `.env.local` and fill in:

     ```
     NEXT_PUBLIC_SUPABASE_URL=...
     NEXT_PUBLIC_SUPABASE_ANON_KEY=...
     ```

   - In Supabase Auth settings, enable Email/Password. For faster local testing
     you can disable email confirmation.

   > Without these keys the app still runs in "preview mode": marketing pages and
   > the app UI render, and auth routes show a friendly config message.

3. Run the dev server:

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000).

## Current status

This is a **UI scaffold** with mock data. Everything renders and navigates.
Next steps to make it functional:

- [ ] Wire the Upload page to an AI provider (vision LLM) to extract + explain reports
- [ ] Replace `lib/mock-data.ts` with real reports stored in Supabase
- [ ] Populate the glossary + normal ranges from the medical team's knowledge base
- [ ] Add report history persistence and real trends

## Ethics & safety

- Explains, never diagnoses or recommends treatment.
- Prominent disclaimers throughout.
- Cites reputable sources (MedlinePlus, Mayo Clinic, NIH).
- Users are encouraged to de-identify uploads; prefer not storing PHI.
