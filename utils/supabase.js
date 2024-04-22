import { createClient } from '@supabase/supabase-js';

const supabase = createClient('https://mzonierivjvjhuwxxyih.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im16b25pZXJpdmp2amh1d3h4eWloIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODk2ODkwMDcsImV4cCI6MjAwNTI2NTAwN30.24JWVw2ZGwFepzjIr2xAFN21FGjVrMH9NwskLnHw3Fk');

export { supabase };
