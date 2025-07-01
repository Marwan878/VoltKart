import { CSSProperties, MouseEventHandler, ReactNode } from "react";

import styles from "./style.module.css";

export default function ArrowContainer({
  children,
  className,
  style,
  onClick,
}: Readonly<{
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}>) {
  return (
    <button
      className={`${styles.arrowContainer} ${className}`}
      style={style}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
