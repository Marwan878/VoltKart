import { Trash2 } from "lucide-react";
import { ComponentProps } from "react";

import styles from "./styles.module.css";

export default function RemoveFieldButton(props: ComponentProps<"button">) {
  return (
    <button
      className={styles.removeOptionButton}
      {...props}
      aria-label="Remove this option."
    >
      <Trash2 color="red" aria-hidden />
    </button>
  );
}
