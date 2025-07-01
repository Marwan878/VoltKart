import { ComponentPropsWithoutRef } from "react";

export type InputProps = {
  label?: string;
  error?: string;
  success?: string;
  formText?: string;
  className?: string;
  as?: "input" | "select";
} & ComponentPropsWithoutRef<"input">;
