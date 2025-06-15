import { zodResolver } from "@hookform/resolvers/zod";
import useCheckEmailAvailability from "@hooks/useCheckEmailAvailability";
import { actAuthRegister, resetUI } from "@store/auth/authSlice";
import { useAppDispatch } from "@store/hooks";
import { signUpSchema, signUpType } from "@validations/signUpSchema";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useUser from "./useUser";

const useRegister = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { user, error, loading } = useUser();

  const {
    register,
    handleSubmit,
    getFieldState,
    trigger,
    formState: { errors: formErrors },
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

  const {
    emailAvailabilityStatus,
    enteredEmail,
    checkEmailAvailability,
    resetCheckEmailAvailability,
  } = useCheckEmailAvailability();

  const emailOnBlurHandler = async (e: React.FocusEvent<HTMLInputElement>) => {
    await trigger("email");
    const value = e.target.value;
    const { isDirty, invalid } = getFieldState("email");

    if (isDirty && !invalid && enteredEmail !== value) {
      // checking
      checkEmailAvailability(value);
    }

    if (isDirty && invalid && enteredEmail) {
      resetCheckEmailAvailability();
    }
  };

  useEffect(() => {
    return () => {
      dispatch(resetUI());
    };
  }, [dispatch]);

  return {
    loading,
    error,
    accessToken: user?.id,
    formErrors,
    emailAvailabilityStatus,
    submitForm,
    register,
    handleSubmit,
    emailOnBlurHandler,
  };
};

export default useRegister;
