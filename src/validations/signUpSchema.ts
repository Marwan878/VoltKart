import { z } from "zod";
import { nameAndEmailSchema } from "./nameAndEmailSchema";
import { passwordAndConfirmPasswordSchema } from "./passwordAndConfirmPasswordSchema";
import { supabaseAdmin } from "@lib/supabase";
import { EMAIL_REGEX } from "@constants";

const signUpSchema = nameAndEmailSchema
  .merge(passwordAndConfirmPasswordSchema)
  .refine((input) => input.password === input.confirmPassword, {
    message: "Password and Confirm Password does not match",
    path: ["confirmPassword"],
  })
  .refine(
    async (input) => {
      if (!EMAIL_REGEX.test(input.email)) {
        return false;
      }
      try {
        const { data, error } = await supabaseAdmin.auth.admin.listUsers();

        if (error) {
          throw new Error(error.message);
        }

        return !data.users.some((user) => user.email === input.email);
      } catch (error) {
        console.error(error);
        return false;
      }
    },
    {
      message:
        "Sorry, this email is already in use. Please use a different email address.",
      path: ["email"],
    }
  );

type signUpType = z.infer<typeof signUpSchema>;

export { signUpSchema, type signUpType };
