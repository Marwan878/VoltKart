import { Heading } from "@components/common";
import { Input } from "@components/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { supabase } from "@lib/supabase";
import { useAppDispatch } from "@store/hooks";
import { addToast } from "@store/toasts/toastsSlice";
import { User } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

import {
  nameAndEmailSchema,
  nameAndEmailSchemaType,
} from "@validations/nameAndEmailSchema";

const AccountDetailsForm = () => {
  const [user, setUser] = useState<User | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isSubmitting, dirtyFields },
  } = useForm<nameAndEmailSchemaType>({
    resolver: zodResolver(nameAndEmailSchema),
    mode: "onBlur",
    defaultValues: {
      firstName: user?.user_metadata.firstName ?? "",
      lastName: user?.user_metadata.last_name ?? "",
      email: user?.email ?? "",
    },
  });

  useEffect(() => {
    (async () => {
      const {
        data: { user },
        error: authError,
      } = await supabase.auth.getUser();

      if (authError) {
        throw new Error(authError.message);
      }

      if (!user) {
        throw new Error("User not found");
      }

      setUser(user);

      reset({
        firstName: user.user_metadata.firstName ?? "",
        lastName: user.user_metadata.lastName ?? "",
        email: user.email ?? "",
      });
    })();
  }, [reset]);

  const dispatch = useAppDispatch();

  const onSubmit = async (data: nameAndEmailSchemaType) => {
    try {
      const { error } = await supabase.auth.updateUser({ data });

      if (error) {
        console.error(error, "Failed to update account details");
        throw new Error(error.message);
      }
    } catch (error) {
      console.error(error, "Failed to update account details");
      dispatch(
        addToast({
          title: "Account Details Update Failure",
          type: "danger",
          message: "Could not update account details, please try again.",
        })
      );
    }
  };

  return (
    <>
      <Heading title="Account Details" />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="First Name *"
          {...register("firstName")}
          error={errors.firstName?.message}
        />
        <Input
          label="Last Name *"
          {...register("lastName")}
          error={errors.lastName?.message}
        />
        <Input
          label="Email Address *"
          {...register("email")}
          error={errors.email?.message}
        />
        <Button
          type="submit"
          disabled={
            !isValid || isSubmitting || Object.keys(dirtyFields).length === 0
          }
        >
          {isSubmitting ? "Saving..." : "Save changes"}
        </Button>
      </Form>
    </>
  );
};

export default AccountDetailsForm;
