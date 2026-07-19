import { Card, CardTitle, Button } from "@/components/ui";
import { signOut } from "@/app/(auth)/actions";
import { createClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/supabase/config";
import { LogOut, Trash2 } from "lucide-react";

export default async function SettingsPage() {
  let email = "demo@synoramed.app";
  if (isSupabaseConfigured) {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (user?.email) email = user.email;
  }

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Settings</h1>
        <p className="text-sm text-muted">Manage your account and preferences.</p>
      </div>

      <Card>
        <CardTitle>Profile</CardTitle>
        <div className="mt-4 space-y-3">
          <Row label="Email" value={email} />
          <Row label="Plan" value="Free (portfolio demo)" />
        </div>
      </Card>

      <Card>
        <CardTitle>Preferences</CardTitle>
        <div className="mt-4 space-y-4">
          <label className="flex items-center justify-between">
            <span className="text-sm">Explanation mode</span>
            <select className="rounded-lg border border-border bg-white px-3 py-1.5 text-sm">
              <option>Patient (simple)</option>
              <option>Doctor (detailed)</option>
            </select>
          </label>
          <label className="flex items-center justify-between">
            <span className="text-sm">Language</span>
            <select className="rounded-lg border border-border bg-white px-3 py-1.5 text-sm">
              <option>English</option>
              <option disabled>More coming soon</option>
            </select>
          </label>
        </div>
      </Card>

      <Card>
        <CardTitle>Data & privacy</CardTitle>
        <p className="mt-2 text-sm text-muted">
          You control your data. Delete your reports and account at any time.
        </p>
        <button className="mt-4 inline-flex items-center gap-2 rounded-full border border-rose-200 bg-rose-50 px-4 py-2 text-sm font-medium text-rose-600 hover:bg-rose-100">
          <Trash2 className="h-4 w-4" /> Delete all my data
        </button>
      </Card>

      <form action={signOut}>
        <Button variant="secondary" type="submit">
          <LogOut className="h-4 w-4" /> Log out
        </Button>
      </form>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between border-b border-border pb-3 last:border-0 last:pb-0">
      <span className="text-sm text-muted">{label}</span>
      <span className="text-sm font-medium">{value}</span>
    </div>
  );
}
