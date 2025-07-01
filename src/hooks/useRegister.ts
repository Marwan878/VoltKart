import { zodResolver } from "@hookform/resolvers/zod";
import { actAuthRegister, resetUI } from "@store/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useRedirectIfLoggedIn from "./useRedirectIfLoggedIn";

import { signUpSchema, signUpType } from "@validations/signUpSchema";

const useRegister = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { error, loading, accessToken } = useAppSelector((state) => state.auth);
  const {
    register,
    handleSubmit,
    formState: { errors: formErrors, isValid },
  } = useForm<signUpType>({
    mode: "onBlur",
    resolver: zodResolver(signUpSchema),
  });

  const submitForm: SubmitHandler<signUpType> = async (data) => {
    const { firstName, lastName, email, password } = data;
    dispatch(actAuthRegister({ firstName, lastName, email, password }))
      .unwrap()
      .then(() => {
        navigate("/login?message=account_created");
      });
  };

  useRedirectIfLoggedIn();

  useEffect(() => {
    return () => {
      dispatch(resetUI());
    };
  }, [dispatch]);

  return {
    loading,
    error,
    accessToken,
    formErrors,
    isValid,
    submitForm,
    register,
    handleSubmit,
  };
};

export default useRegister;
