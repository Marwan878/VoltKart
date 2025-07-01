import { zodResolver } from "@hookform/resolvers/zod";
import { useAppDispatch } from "@store/hooks";
import { addToast } from "@store/toasts/toastsSlice";
import { useForm } from "react-hook-form";

import {
  changePasswordSchema,
  changePasswordType,
} from "@validations/changePasswordSchema";

const usePasswordChange = () => {
  const dispatch = useAppDispatch();

  const {
    handleSubmit,
    register,
    formState: { errors: formErrors },
  } = useForm<changePasswordType>({
    mode: "onBlur",
    resolver: zodResolver(changePasswordSchema),
  });

  const submitForm = async (data: changePasswordType) => {
    dispatch(changePassword(data))
      .unwrap()
      .then(() => {
        dispatch(
          addToast({
            title: "Password changed successfully",
            message: "Your password has been changed successfully",
            type: "success",
          })
        );
      });
  };

  return {
    handleSubmit,
    register,
    formErrors,
    submitForm,
  };
};

export default usePasswordChange;
