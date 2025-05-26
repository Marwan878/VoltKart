import { authLogout } from "@store/auth/authSlice";
import { useAppDispatch } from "@store/hooks";
import { useEffect } from "react";
import { redirect } from "react-router-dom";

export default function Logout() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(authLogout());
    redirect("/");
  }, [dispatch]);

  return <div>Logout</div>;
}
