import { Button } from "@components/ui";
import useProduct from "@hooks/useProductCard";
import { TProduct } from "@types";
import { isProductNew, sortStorageUnits } from "@utils";
import { memo } from "react";
import { Modal } from "react-bootstrap";

import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import Price from "../common/price/Price";

const ProductCard = memo(({ product }: { readonly product: TProduct }) => {
  const { description, imageUrls, name, categories } = product;

  const {
    showModal,
    setShowModal,
    uniqueColors,
    currentCombination,
    colorSelectHandler,
    memorySelectHandler,
    storageSelectHandler,
    addToCartHandler,
    isBtnDisabled,
    quantityReachedToMax,
    uniqueStorageOptionsForCurrentColor,
    uniqueMemoryOptionsForCurrentColor,
  } = useProduct(product);

  if (!currentCombination) return null;

  return (
    <>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Login Required</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          You need to login first to add this item to your wishlist.
        </Modal.Body>
      </Modal>
      <div className={styles.productCard}>
        {/* Product Image */}
        <div className={styles.imageContainer}>
          {isProductNew(product) && (
            <span className={styles.newBadge}>NEW</span>
          )}
          <img
            src={imageUrls.main}
            alt={name}
            className={styles.productImage}
          />
        </div>

        {/* Product Info */}
        <div className={styles.productInfo}>
          {/* Categories */}
          <div className={styles.categories}>
            {categories.map((category) => category.toUpperCase()).join(", ")}
          </div>

          {/* Product Name */}
          <Link to={`/product/${product.id}`} className={styles.productName}>
            {name}
          </Link>

          {/* Description */}
          <p className={styles.description}>{description}</p>

          <div>
            {/* Color Options */}
            {uniqueColors.length > 0 && (
              <div className={styles.optionGroup}>
                <span className={styles.optionLabel}>Color:</span>
                <div className={styles.colorOptions}>
                  {uniqueColors.map((color) => {
                    if (!color) return null;
                    return (
                      <button
                        key={color.name}
                        className={`${styles.colorSwatch} ${
                          currentCombination.color?.name === color.name
                            ? styles.selected
                            : ""
                        }`}
                        style={{ backgroundColor: color.hex }}
                        onClick={() => colorSelectHandler(color.name)}
                        title={color.name}
                      />
                    );
                  })}
                </div>
              </div>
            )}

            {/* RAM Options */}
            {uniqueMemoryOptionsForCurrentColor.length > 0 && (
              <div className={styles.optionGroup}>
                <span className={styles.optionLabel}>Ram:</span>
                <div className={styles.ramOptions}>
                  {sortStorageUnits(uniqueMemoryOptionsForCurrentColor).map(
                    (ram) => (
                      <button
                        key={ram}
                        className={`${styles.ramOption} ${
                          currentCombination.memory === ram
                            ? styles.selected
                            : ""
                        }`}
                        onClick={() => memorySelectHandler(ram)}
                      >
                        {ram}
                      </button>
                    )
                  )}
                </div>
              </div>
            )}

            {/* Storage Options */}
            {uniqueStorageOptionsForCurrentColor.length > 0 && (
              <div className={styles.optionGroup}>
                <span className={styles.optionLabel}>Storage:</span>
                <div className={styles.ramOptions}>
                  {sortStorageUnits(uniqueStorageOptionsForCurrentColor).map(
                    (storage) => (
                      <button
                        key={storage}
                        className={`${styles.ramOption} ${
                          currentCombination.storage === storage
                            ? styles.selected
                            : ""
                        }`}
                        onClick={() => storageSelectHandler(storage)}
                      >
                        {storage}
                      </button>
                    )
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="me-3 d-flex flex-column gap-2 align-items-start">
          <Price price={currentCombination.price} />
          <Button
            variant="whiteToBlue"
            onClick={addToCartHandler}
            className={styles.addToCart}
            disabled={isBtnDisabled || quantityReachedToMax}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </>
  );
});

export default ProductCard;
