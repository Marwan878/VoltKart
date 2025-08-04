import { supabase } from "@lib/supabase";
import { useEffect, useState } from "react";

export default function useSession() {
  const [session, setSession] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const { data, error } = await supabase.auth.getSession();

      if (error) {
        console.error(error);
      }

      setSession(!!data.session);
      setLoading(false);
    })();

    const { data: listener } = supabase.auth.onAuthStateChange((_, session) => {
      setSession(!!session);
    });

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  return { session, loading };
}
