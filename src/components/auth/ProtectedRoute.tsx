import { LottieHandler } from "@components/feedback";
import useSession from "@hooks/useSession";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { session, loading } = useSession();

  if (loading) {
    return <LottieHandler type="loading" message="Loading please wait..." />;
  }

  if (!session) {
    return <Navigate to="/login?message=login_required" />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
