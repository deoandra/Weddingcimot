import { createClient, SupabaseClient } from "@supabase/supabase-js";

const url = (import.meta.env.VITE_SUPABASE_URL ||
  import.meta.env.REACT_APP_SUPABASE_URL ||
  undefined) as string | undefined;
const key = (import.meta.env.VITE_SUPABASE_KEY ||
  import.meta.env.REACT_APP_SUPABASE_PUBLISHABLE_DEFAULT_KEY ||
  undefined) as string | undefined;

let client: SupabaseClient | null = null;
if (typeof url === "string" && url && typeof key === "string" && key) {
  client = createClient(url, key);
}

export const supabase = client;
