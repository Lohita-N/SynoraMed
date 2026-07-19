import { AppTopNav } from "@/components/app/AppTopNav";
import { Sidebar } from "@/components/app/Sidebar";
import { createClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/supabase/config";

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let userEmail = "demo@synoramed.app";

  if (isSupabaseConfigured) {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (user?.email) userEmail = user.email;
  }

  return (
    <div className="flex min-h-screen flex-col">
      <AppTopNav userEmail={userEmail} />
      <div className="flex flex-1">
        <Sidebar />
        <main className="scrollbar-thin flex-1 overflow-y-auto bg-background p-4 sm:p-6">
          <div className="mx-auto max-w-6xl">{children}</div>
        </main>
      </div>
    </div>
  );
}
