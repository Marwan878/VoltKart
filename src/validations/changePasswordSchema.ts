import { PASSWORD_REGEX } from "@constants";
import { supabase } from "@lib/supabase";
import { z } from "zod";
import { zodPassword } from "./zodPassword";

const changePasswordSchema = z
  .object({
    currentPassword: zodPassword("Current Password", 8),
    newPassword: zodPassword("New Password", 8),
    confirmNewPassword: zodPassword("Confirm New Password", 8),
  })
  .refine((input) => input.newPassword === input.confirmNewPassword, {
    message: "New password and confirm new password do not match",
    path: ["confirmNewPassword"],
  })
  .refine(
    async (input) => {
      const currentPassword = input.currentPassword;

      if (currentPassword.length < 8 || !PASSWORD_REGEX.test(currentPassword)) {
        return false;
      }

      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user?.email) {
        return false;
      }

      try {
        const { error } = await supabase.auth.signInWithPassword({
          email: user.email,
          password: currentPassword,
        });

        if (error) {
          return false;
        }

        return true;
      } catch (error) {
        console.error(error, "Failed to check password availability");
        return false;
      }
    },
    {
      message: "Current password is incorrect",
      path: ["currentPassword"],
    }
  );

type changePasswordType = z.infer<typeof changePasswordSchema>;

export { changePasswordSchema, type changePasswordType };
