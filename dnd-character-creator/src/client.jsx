import { createClient } from '@supabase/supabase-js'

const URL = 'https://nklopymoxpwwatevgssf.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5rbG9weW1veHB3d2F0ZXZnc3NmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODExNDY2NDAsImV4cCI6MTk5NjcyMjY0MH0.zxEWCoiLjCCjdTDEnhjl_sVP_JO2DrNkKFmjrHMmRns';

export const supabase = createClient(URL, API_KEY);