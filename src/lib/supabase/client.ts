"use client";

import { createBrowserClient } from "@supabase/ssr";
import { supabaseAnonKey, supabaseUrl } from "./config";

/** Browser Supabase client (used in Client Components). */
export function createClient() {
  return createBrowserClient(supabaseUrl!, supabaseAnonKey!);
}
