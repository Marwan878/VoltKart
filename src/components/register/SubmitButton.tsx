import { Button, Spinner } from "react-bootstrap";

type SubmitButtonProps = {
  loading: "idle" | "pending" | "succeeded" | "failed";
  isValid: boolean;
};

export default function SubmitButton({
  loading,
  isValid,
}: Readonly<SubmitButtonProps>) {
  return (
    <Button
      variant="info"
      type="submit"
      style={{ color: "white" }}
      disabled={loading === "pending" || !isValid}
    >
      {loading === "pending" ? (
        <>
          <Spinner animation="border" size="sm" /> Loading...
        </>
      ) : (
        "Submit"
      )}
    </Button>
  );
}
