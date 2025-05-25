import type { CSSProperties, ReactNode } from "react";

import styles from "./style.module.css";

export default function Button({
  children,
  type,
  className,
  style,
}: {
  children: ReactNode;
  type:
    | "whiteToBlue"
    | "blueToBlack"
    | "blackToBlue"
    | "blackToWhite"
    | "whiteToBlack"
    | "whiteToAqua"
    | "aquaToWhite";
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <button
      className={`${styles[type]} rounded-pill px-4 py-2 border-0 ${className}`}
      style={style}
    >
      {children}
    </button>
  );
}
