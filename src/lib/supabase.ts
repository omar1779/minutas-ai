import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
console.log(supabaseUrl,supabaseAnonKey)
// Tipos para la tabla waitlist_emails
export interface WaitlistEmail {
  id?: number
  email: string
  source: string
  created_at?: string
  metadata?: Record<string, unknown>
}
