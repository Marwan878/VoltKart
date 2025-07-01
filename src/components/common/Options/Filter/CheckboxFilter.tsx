import { ReactNode } from "react";
import { Form } from "react-bootstrap";

import styles from "./style.module.css";

export default function CheckboxFilter<T>({
  heading,
  options,
  label,
  computeCheckboxId,
  className,
  optionsContainerClassName,
}: {
  readonly heading: string;
  readonly options: T[];
  readonly className?: string;
  readonly optionsContainerClassName?: string;
  readonly label: (option: T) => ReactNode;
  readonly computeCheckboxId: (option: T) => string;
}) {
  return (
    <div className={className}>
      <h5 className="mb-3">{heading}</h5>
      <Form className={optionsContainerClassName}>
        {options.map((option) => (
          <Form.Check
            className={styles.checkboxContainer}
            key={crypto.randomUUID()}
            type="checkbox"
            id={computeCheckboxId(option)}
            label={label(option)}
          />
        ))}
      </Form>
    </div>
  );
}
