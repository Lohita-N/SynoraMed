"use client";

import { useActionState } from "react";
import Link from "next/link";
import { signup, type AuthState } from "../actions";
import { Card, Button } from "@/components/ui";
import { Field } from "../login/page";

export default function SignupPage() {
  const [state, formAction, pending] = useActionState<AuthState, FormData>(
    signup,
    {},
  );

  return (
    <Card className="p-7">
      <h1 className="text-xl font-semibold">Create your account</h1>
      <p className="mt-1 text-sm text-muted">
        Start understanding your medical reports in plain language.
      </p>

      <form action={formAction} className="mt-6 space-y-4">
        <Field
          label="Email"
          name="email"
          type="email"
          placeholder="you@example.com"
          autoComplete="email"
        />
        <Field
          label="Password"
          name="password"
          type="password"
          placeholder="At least 8 characters"
          autoComplete="new-password"
        />

        {state.error && (
          <p className="rounded-lg bg-rose-50 px-3 py-2 text-sm text-rose-700">
            {state.error}
          </p>
        )}
        {state.message && (
          <p className="rounded-lg bg-brand-50 px-3 py-2 text-sm text-brand-600">
            {state.message}
          </p>
        )}

        <Button type="submit" className="w-full" disabled={pending}>
          {pending ? "Creating account…" : "Sign up"}
        </Button>
      </form>

      <p className="mt-5 text-center text-sm text-muted">
        Already have an account?{" "}
        <Link href="/login" className="font-medium text-brand">
          Log in
        </Link>
      </p>
    </Card>
  );
}
