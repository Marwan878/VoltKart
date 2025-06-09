import type { ButtonHTMLAttributes } from "react";

import styles from "./style.module.css";

export default function Button({
  children,
  variant,
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant:
    | "whiteToBlue"
    | "blueToBlack"
    | "blackToBlue"
    | "blackToWhite"
    | "whiteToBlack"
    | "whiteToAqua"
    | "aquaToWhite";
  className?: string;
}) {
  return (
    <button
      className={`${styles[variant]} rounded-pill px-4 py-2 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
