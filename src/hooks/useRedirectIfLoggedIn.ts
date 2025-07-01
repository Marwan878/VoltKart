import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@lib/supabase";

export default function useRedirectIfLoggedIn() {
  const navigate = useNavigate();

  useEffect(() => {
    const redirectIfLoggedIn = async () => {
      const { data } = await supabase.auth.getUser();
      if (data.user) {
        navigate("/");
      }
    };

    redirectIfLoggedIn();
  }, [navigate]);
}
