export const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
export const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

/**
 * Whether Supabase env vars are present. Lets the app run (marketing pages,
 * UI preview) before real credentials are added to `.env.local`.
 */
export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);
