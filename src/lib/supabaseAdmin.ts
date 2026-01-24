import { createClient } from '@supabase/supabase-js';

export function getSupabaseAdminClient() {
  // URL can be public.
  const supabaseUrl =
    process.env.SUPABASE_URL ?? process.env.NEXT_PUBLIC_SUPABASE_URL ?? '';
  if (!supabaseUrl) {
    throw new Error('Missing environment variable: SUPABASE_URL (or NEXT_PUBLIC_SUPABASE_URL)');
  }

  // Prefer service role key (server-only). If not present, fall back to a publishable/anon key
  // (requires an RLS insert policy on the `contact_requests` table).
  const key =
    process.env.SUPABASE_SERVICE_ROLE_KEY ??
    process.env.SUPABASE_ANON_KEY ??
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY ??
    '';

  if (!key) {
    throw new Error(
      'Missing environment variable: SUPABASE_SERVICE_ROLE_KEY (recommended) or SUPABASE_ANON_KEY / NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY',
    );
  }

  return createClient(supabaseUrl, key, {
    auth: { persistSession: false },
  });
}

