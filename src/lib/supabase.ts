import { createClient } from '@supabase/supabase-js';

// These environment variables will be replaced at build time by Vite
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Create a single supabase client for interacting with your database
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types
export interface InterestRequest {
  name: string;
  email: string;
  company?: string;
}
