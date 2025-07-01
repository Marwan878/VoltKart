import type { ComponentProps, ElementType } from "react";

import styles from "./style.module.css";

type ButtonProps<T extends ElementType> = ComponentProps<T> & {
  variant:
    | "whiteToBlue"
    | "blueToBlack"
    | "blackToBlue"
    | "blackToWhite"
    | "whiteToBlack"
    | "whiteToAqua"
    | "aquaToWhite";
  className?: string;
  as?: T;
};

export default function Button<T extends ElementType>({
  children,
  variant,
  className,
  as,
  ...props
}: Readonly<ButtonProps<T>>) {
  const Component = (as ?? "button") as ElementType;

  return (
    <Component
      className={`${styles[variant]} rounded-pill px-4 py-2 ${className}`}
      style={{
        transition: "background-color 0.3s ease-in-out",
        ...props.style,
      }}
      {...props}
    >
      {children}
    </Component>
  );
}
