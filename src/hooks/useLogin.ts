import { zodResolver } from "@hookform/resolvers/zod";
import { actAuthLogin, resetUI } from "@store/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";
import useRedirectIfLoggedIn from "./useRedirectIfLoggedIn";

import { signInSchema, signInType } from "@validations/signInSchema";

const useLogin = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();

  const { error, loading } = useAppSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors: formErrors, isValid },
  } = useForm<signInType>({
    mode: "onBlur",
    resolver: zodResolver(signInSchema),
  });

  const submitForm: SubmitHandler<signInType> = async (data) => {
    if (searchParams.get("message")) {
      setSearchParams("");
    }

    dispatch(actAuthLogin(data))
      .unwrap()
      .then(() => {
        navigate("/");
      });
  };

  useRedirectIfLoggedIn();

  useEffect(() => {
    return () => {
      dispatch(resetUI());
    };
  }, [dispatch]);

  return {
    error,
    loading,
    formErrors,
    searchParams,
    isValid,
    register,
    handleSubmit,
    submitForm,
  };
};

export default useLogin;
