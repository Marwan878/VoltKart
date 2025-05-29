import { ReactNode } from "react";
import { Form } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import FilterContainer from "./FilterContainer";

import styles from "./style.module.css";

export default function CheckboxFilter<T>({
  heading,
  options,
  label,
  affectedParameter,
  computeCheckboxId,
  computeIsSelected,
  computeNewParameterValue,
}: {
  heading: string;
  options: T[];
  affectedParameter: string;
  label: (option: T) => ReactNode;
  computeCheckboxId: (option: T) => string;
  computeIsSelected: (option: T) => boolean;
  computeNewParameterValue: (option: T) => string;
}) {
  const [, setSearchParams] = useSearchParams();

  return (
    <FilterContainer heading={heading}>
      <Form>
        {options.map((option, i) => (
          <Form.Check
            className={styles.checkboxContainer}
            key={i}
            type="checkbox"
            id={computeCheckboxId(option)}
            label={label(option)}
            checked={computeIsSelected(option)}
            onChange={() => {
              setSearchParams((prev) => {
                const newParams = new URLSearchParams(prev);
                const values =
                  newParams.get(affectedParameter)?.split(",") || [];

                if (computeIsSelected(option) && values.length === 1) {
                  newParams.delete(affectedParameter);
                } else {
                  newParams.set(
                    affectedParameter,
                    [...values, computeNewParameterValue(option)].join(",")
                  );
                }
                return newParams;
              });
            }}
          />
        ))}
      </Form>
    </FilterContainer>
  );
}
