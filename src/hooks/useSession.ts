import { supabase } from "@lib/supabase";
import { useEffect, useState } from "react";

export default function useSession() {
  const [session, setSession] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const { data, error } = await supabase.auth.getUser();

      if (error) {
        console.error(error);
      }

      setSession(!!data.user);
      setLoading(false);
    })();
  }, []);

  return { session, loading };
}
