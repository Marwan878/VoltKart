import { Button, Modal, Spinner } from "react-bootstrap";

type CartSubtotalModalProps = {
  showModal: boolean;
  modalHandler: () => void;
  subtotal: number;
  currency: string;
  loading: boolean;
  error: string | null;
  placeOrderHandler: () => void;
};

export default function CartSubtotalModal({
  showModal,
  modalHandler,
  subtotal,
  currency,
  loading,
  error,
  placeOrderHandler,
}: Readonly<CartSubtotalModalProps>) {
  if (!showModal) return null;

  return (
    <Modal show={showModal} onHide={modalHandler} backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>Placing Order</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Are you sure you want to place order with Subtotal:{" "}
        {subtotal.toFixed(2)} {currency}
        {!loading && error && (
          <p style={{ color: "#DC3545", marginTop: "10px" }}>{error}</p>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="info"
          style={{ color: "white" }}
          onClick={placeOrderHandler}
        >
          {loading ? (
            <>
              <Spinner animation="border" size="sm"></Spinner> Loading...
            </>
          ) : (
            "Confirm"
          )}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
