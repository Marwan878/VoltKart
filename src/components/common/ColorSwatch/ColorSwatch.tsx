import { ComponentPropsWithoutRef, ElementType } from "react";

import { TColor } from "@types";

import styles from "./style.module.css";

export default function ColorSwatch<T extends ElementType>({
  color,
  isSelected = false,
  as,
  className,
  ...rest
}: {
  readonly color: TColor;
  readonly isSelected?: boolean;
  readonly as?: T;
  readonly className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "color">) {
  const Component = as ?? "button";
  return (
    <Component
      className={`${styles.colorSwatch} ${
        isSelected ? styles.selected : ""
      } ${className}`}
      style={{ backgroundColor: color.hex }}
      title={color.name}
      {...rest}
    />
  );
}
