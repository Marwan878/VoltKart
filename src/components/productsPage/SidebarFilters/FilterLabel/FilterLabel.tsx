import { ComponentProps, ElementType, ReactNode } from "react";

import styles from "./styles.module.css";

type FilterLabelProps<T extends ElementType> = ComponentProps<T> & {
  children: ReactNode;
  quantity?: number;
  selected: boolean;
  as?: T;
};

export default function FilterLabel<T extends ElementType>({
  children,
  quantity,
  selected,
  as = "span",
  ...props
}: Readonly<FilterLabelProps<T>>) {
  const Component = (as ?? "span") as ElementType;

  return (
    <Component className={styles.filterLabel} {...props}>
      <div className="d-flex align-items-center gap-2">{children}</div>
      {quantity !== undefined && (
        <span
          className={`${styles.quantity} ${selected ? styles.selected : ""}`}
        >
          {quantity}
        </span>
      )}
    </Component>
  );
}
