import { Minus, Plus } from "lucide-react";
import { CSSProperties } from "react";

import styles from "./styles.module.css";

type CounterProps = {
  readonly className?: string;
  readonly onIncrement?: () => void;
  readonly onDecrement?: () => void;
  readonly isDecrementDisabled?: boolean;
  readonly isIncrementDisabled?: boolean;
  readonly quantity: number;
  readonly style?: CSSProperties;
};

export default function Counter({
  className = "",
  onIncrement,
  onDecrement,
  isDecrementDisabled = false,
  isIncrementDisabled = false,
  quantity,
  style,
}: CounterProps) {
  return (
    <div className={`${styles.counter} ${className}`} style={style}>
      <button
        className={`${styles.quantityButton} ${styles.minusButton}`}
        onClick={onDecrement}
        disabled={isDecrementDisabled}
      >
        <Minus size={16} />
      </button>
      <span className={styles.quantity}>{quantity}</span>
      <button
        className={`${styles.quantityButton} ${styles.plusButton}`}
        onClick={onIncrement}
        disabled={isIncrementDisabled}
      >
        <Plus size={16} />
      </button>
    </div>
  );
}
