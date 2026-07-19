"use client";

import { useState } from "react";
import { Logo } from "@/components/brand/Logo";
import { signOut } from "@/app/(auth)/actions";
import { Search, Bell, ChevronDown, LogOut, User, Menu } from "lucide-react";
import { cn } from "@/lib/cn";

export function AppTopNav({ userEmail }: { userEmail: string }) {
  const [mode, setMode] = useState<"patient" | "doctor">("patient");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 flex h-16 items-center gap-4 border-b border-border bg-surface px-4 sm:px-6">
      <button className="md:hidden" aria-label="Menu">
        <Menu className="h-5 w-5 text-muted" />
      </button>
      <Logo href="/dashboard" />

      {/* Search */}
      <div className="ml-2 hidden max-w-md flex-1 items-center gap-2 rounded-full border border-border bg-surface-muted px-3 py-2 lg:flex">
        <Search className="h-4 w-4 text-muted" />
        <input
          placeholder="Search reports, terms, values…"
          className="w-full bg-transparent text-sm outline-none placeholder:text-muted"
        />
      </div>

      <div className="ml-auto flex items-center gap-2 sm:gap-3">
        {/* Patient / Doctor mode toggle */}
        <div className="hidden items-center rounded-full border border-border bg-surface-muted p-0.5 text-xs font-medium sm:flex">
          {(["patient", "doctor"] as const).map((m) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={cn(
                "rounded-full px-3 py-1 capitalize transition-colors",
                mode === m ? "bg-white text-foreground shadow-sm" : "text-muted",
              )}
            >
              {m}
            </button>
          ))}
        </div>

        {/* Notifications */}
        <button
          className="relative flex h-9 w-9 items-center justify-center rounded-full border border-border bg-white text-muted hover:text-foreground"
          aria-label="Notifications"
        >
          <Bell className="h-4 w-4" />
          <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-brand" />
        </button>

        {/* Profile menu */}
        <div className="relative">
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="flex items-center gap-2 rounded-full border border-border bg-white py-1 pl-1 pr-2 hover:bg-surface-muted"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-brand to-accent text-xs font-semibold text-white">
              {userEmail.charAt(0).toUpperCase()}
            </span>
            <ChevronDown className="h-4 w-4 text-muted" />
          </button>

          {menuOpen && (
            <div
              className="absolute right-0 mt-2 w-56 rounded-xl border border-border bg-white p-1 shadow-lg"
              onMouseLeave={() => setMenuOpen(false)}
            >
              <div className="border-b border-border px-3 py-2">
                <p className="truncate text-sm font-medium">{userEmail}</p>
                <p className="text-xs capitalize text-muted">{mode} mode</p>
              </div>
              <a
                href="/settings"
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-foreground hover:bg-surface-muted"
              >
                <User className="h-4 w-4" /> Profile & Settings
              </a>
              <form action={signOut}>
                <button
                  type="submit"
                  className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-rose-600 hover:bg-rose-50"
                >
                  <LogOut className="h-4 w-4" /> Log out
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
