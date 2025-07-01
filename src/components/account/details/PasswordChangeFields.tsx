import { Heading } from "@components/common";
import { Input } from "@components/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { supabase } from "@lib/supabase";
import { useAppDispatch } from "@store/hooks";
import { addToast } from "@store/toasts/toastsSlice";
import { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import {
  changePasswordSchema,
  changePasswordType,
} from "@validations/changePasswordSchema";

const PasswordChangeForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting, isValidating },
  } = useForm<changePasswordType>({
    mode: "onSubmit",
    resolver: zodResolver(changePasswordSchema),
  });

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) {
        navigate("/login?message=login_required");
      }
    };

    checkUser();
  }, [navigate]);

  const onSubmit = async (data: changePasswordType) => {
    try {
      const { error } = await supabase.auth.updateUser({
        password: data.newPassword,
      });

      if (error) {
        console.error(error, "Failed to update password");
        throw new Error(error.message);
      }

      dispatch(
        addToast({
          title: "Password Updated",
          type: "success",
          message: "Your password has been updated successfully.",
        })
      );
    } catch (error) {
      console.error(error, "Failed to update password");
      dispatch(
        addToast({
          title: "Password Update Failure",
          type: "danger",
          message: "Could not update password, please try again.",
        })
      );
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} className="my-5">
      <Heading title="Password Change" />
      <Input
        label="Current Password"
        type="password"
        {...register("currentPassword")}
        error={errors.currentPassword?.message}
      />
      <Input
        label="New Password"
        type="password"
        {...register("newPassword")}
        error={errors.newPassword?.message}
      />
      <Input
        label="Confirm New Password"
        type="password"
        {...register("confirmNewPassword")}
        error={errors.confirmNewPassword?.message}
      />
      <Button type="submit" disabled={!isValid || isSubmitting || isValidating}>
        {isSubmitting ? "Saving..." : "Save changes"}
      </Button>
    </Form>
  );
};

export default PasswordChangeForm;
