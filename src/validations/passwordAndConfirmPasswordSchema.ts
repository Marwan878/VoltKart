import { z } from "zod";

const passwordAndConfirmPasswordSchema = z.object({
  password: z.string().min(1, { message: "Password is required" }),
  confirmPassword: z
    .string()
    .min(1, { message: "Confirm password is required" }),
});

type passwordAndConfirmPasswordType = z.infer<
  typeof passwordAndConfirmPasswordSchema
>;

export {
  passwordAndConfirmPasswordSchema,
  type passwordAndConfirmPasswordType,
};
