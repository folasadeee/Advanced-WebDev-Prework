import { createClient } from "@supabase/supabase-js";

const URL = "https://sfchgiashgxawqrqbsvj.supabase.co";

const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNmY2hnaWFzaGd4YXdxcnFic3ZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI2Mzg5MjMsImV4cCI6MjAzODIxNDkyM30.EQjiwGpMRyOePzE7jhsuIgX5zYyw8THr4Qft2FE1YUY";

export const supabase = createClient(URL, API_KEY);

