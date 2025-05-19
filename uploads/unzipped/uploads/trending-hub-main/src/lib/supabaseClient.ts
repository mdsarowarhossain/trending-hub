import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://wjopsouiiibeenxjkxcc.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indqb3Bzb3VpaWliZWVueGpreGNjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc1OTAxODgsImV4cCI6MjA2MzE2NjE4OH0.gYbs9yVMj_KF-a_4BoNaOwsBgRyKYq9gRcoJXZz-T4o';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
