import { createClient } from "@supabase/supabase-js";
import { SUPABASE_URL } from "@constants";

export const supabase = createClient(
  SUPABASE_URL,
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh6dGF2bHpzZmdzbW9mcm1kcWV4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg0NDUwMjAsImV4cCI6MjA2NDAyMTAyMH0.pj4gz7_I9paKO955B99NfEakGWX6PDXRng67UzqTj2A"
);

const adminServiceRole = import.meta.env.VITE_SUPABASE_ADMIN_SERVICE_ROLE;

if (!adminServiceRole) {
  throw new Error("SUPABASE_ADMIN_SERVICE_ROLE is not set");
}

export const supabaseAdmin = createClient(SUPABASE_URL, adminServiceRole);
