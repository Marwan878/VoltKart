import { actAuthLogout } from "@store/auth/authSlice";
import { useAppDispatch } from "@store/hooks";
import { addToast } from "@store/toasts/toastsSlice";
import { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(actAuthLogout())
      .unwrap()
      .then(() => {
        dispatch(
          addToast({
            title: "Logged out",
            message: "You have been logged out",
            type: "success",
          })
        );

        setTimeout(() => {
          navigate("/");
        }, 1000);
      })
      .catch((error) => {
        dispatch(
          addToast({
            title: "Error",
            message: error.message,
            type: "danger",
          })
        );
      });
  }, [dispatch, navigate]);

  return (
    <div
      className="d-flex justify-content-center align-items-center flex-column"
      style={{ height: "20rem" }}
    >
      <Spinner animation="border" variant="primary" />
      <p className="mt-3">See you soon! 😄</p>
    </div>
  );
}
