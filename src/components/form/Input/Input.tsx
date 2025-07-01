import { forwardRef } from "react";
import { Form } from "react-bootstrap";

import { type InputProps } from "../InputProps";

const Input = forwardRef<HTMLElement, InputProps>(
  (
    { label, error, formText, success, className = "", as = "input", ...rest },
    ref
  ) => {
    let Component: any = Form.Control;

    if (as === "select") {
      Component = Form.Select;
    }

    return (
      <Form.Group className={`mb-3 ${className}`}>
        {label && <Form.Label>{label}</Form.Label>}
        <Component
          isInvalid={!!error}
          isValid={!!success}
          ref={ref}
          {...rest}
        />
        {error && (
          <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
        )}
        {success && (
          <Form.Control.Feedback type="valid">{success}</Form.Control.Feedback>
        )}
        {formText && <Form.Text muted>{formText}</Form.Text>}
      </Form.Group>
    );
  }
);

export default Input;
