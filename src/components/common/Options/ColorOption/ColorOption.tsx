import ColorSwatch from "@components/common/ColorSwatch/ColorSwatch";

import { TColor } from "@types";

import styles from "./style.module.css";

export default function ColorOption({
  color,
  showColorName,
  showQuantity,
  isSelected,
  quantity,
}: {
  readonly color: TColor;
  readonly showColorName?: boolean;
  readonly showQuantity?: boolean;
  readonly isSelected: boolean;
  readonly quantity?: number;
}) {
  return (
    <span
      className={`d-flex align-items-center text-capitalize w-100 ${styles.color}`}
      style={{ cursor: "pointer" }}
    >
      <ColorSwatch color={color} isSelected={isSelected} as="span" />
      <div className="d-flex align-items-center justify-content-between flex-grow-1">
        {showColorName && <span className="ms-3">{color.name}</span>}
        {showQuantity && (
          <span
            className={`${styles.quantity} ${
              isSelected ? styles.selected : ""
            }`}
          >
            {quantity ?? 0}
          </span>
        )}
      </div>
    </span>
  );
}
