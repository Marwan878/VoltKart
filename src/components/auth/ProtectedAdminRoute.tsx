import { supabase } from "@lib/supabase";
import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedAdminRoute = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkAdmin = async () => {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();
      if (error) {
        console.error(error);
        return;
      }

      if (!user) {
        navigate("/login?message=login_required");
        return;
      }

      if (user?.user_metadata.role !== "admin") {
        navigate("/");
      }
    };

    checkAdmin();
  }, [navigate]);

  return <>{children}</>;
};

export default ProtectedAdminRoute;
