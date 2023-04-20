import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://komxbdmhoigfeguvjiaa.supabase.co', process.env.SUPABASE_ANON_KEY as string)


