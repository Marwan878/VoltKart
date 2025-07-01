import { PASSWORD_REGEX } from "@constants";
import { z } from "zod";

const zodPassword = (fieldName: string, min: number = 8) =>
  z
    .string()
    .min(min, {
      message: `${fieldName} must be at least ${min} characters long`,
    })
    .refine((val) => PASSWORD_REGEX.test(val), {
      message: `${fieldName} should contain at least 1 special character`,
    });

export { zodPassword };
