import { Plus } from "lucide-react";

import styles from "./styles.module.css";

export default function AddFieldButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      className={styles.addOptionButton}
      aria-label="Add an option for this product."
      onClick={onClick}
    >
      <Plus color="black" aria-hidden />
    </button>
  );
}
