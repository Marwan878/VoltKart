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
  containerClassName,
}: {
  readonly heading: string;
  readonly options: T[];
  readonly affectedParameter: string;
  readonly label: (option: T) => ReactNode;
  readonly computeCheckboxId: (option: T) => string;
  readonly computeIsSelected: (option: T) => boolean;
  readonly computeNewParameterValue: (option: T) => string;
  readonly containerClassName?: string;
}) {
  const [, setSearchParams] = useSearchParams();

  return (
    <FilterContainer heading={heading}>
      <Form className={`gap-2 ${containerClassName}`}>
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

                if (computeIsSelected(option)) {
                  if (values.length === 1) {
                    newParams.delete(affectedParameter);
                  } else {
                    newParams.set(
                      affectedParameter,
                      values
                        .filter(
                          (value) => value !== computeNewParameterValue(option)
                        )
                        .join(",")
                    );
                  }
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
