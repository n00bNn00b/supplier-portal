const { createClient } = require("@supabase/supabase-js");
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseServiceRoleKEY = import.meta.env.VITE_SUPABASE_SERVICE_ROLE_KEY;

const supabaseAdmin = createClient(supabaseUrl, supabaseServiceRoleKEY, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
});

export default supabaseAdmin;
