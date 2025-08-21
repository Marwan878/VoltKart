import ColorSwatch from "@components/common/ColorSwatch/ColorSwatch";
import StorageOption from "@components/common/Options/StorageOption/StorageOption";
import useProductCard from "@hooks/useProductCard";
import { sortStorageUnits } from "@utils/index";
import { Link } from "react-router-dom";

import { TProduct } from "@types";

import styles from "./styles.module.css";
import { CATEGORIES } from "@constants";

type ProductInfoProps = {
  product: TProduct;
};

export default function ProductInfo({ product }: Readonly<ProductInfoProps>) {
  const { colorOptions, storageOptions, ramOptions } = useProductCard(product);
  const { description, name, categoryId } = product;

  return (
    <div className={styles.productInfo}>
      <div className={styles.categories}>
        {CATEGORIES.find((category) => category.id === categoryId)
          ?.displayName ?? "Generic"}
      </div>

      <Link to={`/product/${product.id}`} className={styles.productName}>
        {name}
      </Link>

      <p className={styles.description}>{description}</p>

      <div>
        {colorOptions.length > 0 && (
          <div className={styles.optionGroup}>
            <span className={styles.optionLabel}>Available Colors:</span>
            <div className={styles.options}>
              {colorOptions.map((color) => (
                <ColorSwatch
                  color={color}
                  key={color.name}
                  as="span"
                  className="border-1 border-black"
                />
              ))}
            </div>
          </div>
        )}

        {ramOptions.length > 0 && (
          <div className={styles.optionGroup}>
            <span className={styles.optionLabel}>Available RAM:</span>
            <div className={styles.options}>
              {sortStorageUnits(ramOptions).map((ram) => (
                <StorageOption key={ram} as="span">
                  {ram}
                </StorageOption>
              ))}
            </div>
          </div>
        )}

        {storageOptions.length > 0 && (
          <div className={styles.optionGroup}>
            <span className={styles.optionLabel}>Available Storage:</span>
            <div className={styles.options}>
              {sortStorageUnits(storageOptions).map((storage) => (
                <StorageOption key={storage} as="span">
                  {storage}
                </StorageOption>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
