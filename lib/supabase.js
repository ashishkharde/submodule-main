// FOUNDER-ONLY: Supabase client with service role key
// This file stays in the main repo — interns never see it

const SUPABASE_URL = "https://xxxx.supabase.co";
const SUPABASE_SERVICE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.FAKE_KEY_FOR_DEMO";

export function createServerClient() {
  // In real code: @supabase/ssr createServerClient
  return {
    url: SUPABASE_URL,
    from: (table) => ({
      select: () => Promise.resolve({ data: [], error: null }),
    }),
  };
}
