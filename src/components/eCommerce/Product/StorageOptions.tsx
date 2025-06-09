import { TProduct } from "@types";
import getUniqueElements from "@utils/getUniqueElements";

import styles from "./styles.module.css";

type StorageOptionsProps = {
  readonly product: TProduct;
  readonly selectedStorage: string;
  readonly onStorageChange: (storage: string) => void;
};

export default function StorageOptions({
  product,
  selectedStorage,
  onStorageChange,
}: StorageOptionsProps) {
  return (
    <div className={styles.storageSection}>
      <label className={styles.storageLabel}>Built-in Storage:</label>
      <div className={styles.storageOptions}>
        {getUniqueElements(
          product.optionCombinations.map(
            (combination) => combination.storage
          ) as string[]
        ).map((option) => (
          <button
            key={option}
            className={`${styles.storageButton} ${
              selectedStorage === option ? styles.selected : ""
            }`}
            onClick={() => onStorageChange(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
