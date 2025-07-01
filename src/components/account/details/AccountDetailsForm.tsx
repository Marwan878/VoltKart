import { Heading } from "@components/common";
import { Input } from "@components/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { supabase } from "@lib/supabase";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { addToast } from "@store/toasts/toastsSlice";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

import {
  nameAndEmailSchema,
  nameAndEmailSchemaType,
} from "@validations/nameAndEmailSchema";

const AccountDetailsForm = () => {
  const { user } = useAppSelector((state) => state.auth);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<nameAndEmailSchemaType>({
    resolver: zodResolver(nameAndEmailSchema),
    mode: "onBlur",
    defaultValues: {
      firstName: user?.firstName ?? "",
      lastName: user?.lastName ?? "",
      email: user?.email ?? "",
    },
  });
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
        <Button type="submit" disabled={!isValid || isSubmitting}>
          {isSubmitting ? "Saving..." : "Save changes"}
        </Button>
      </Form>
    </>
  );
};

export default AccountDetailsForm;
