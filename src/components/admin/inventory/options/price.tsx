import { Input } from "@components/form";
import { NewProductSchema } from "@validations/newProductSchema";
import { Form } from "react-bootstrap";
import { FieldErrors, UseFormRegister, UseFormWatch } from "react-hook-form";

type PriceProps = {
  index: number;
  register: UseFormRegister<NewProductSchema>;
  watch: UseFormWatch<NewProductSchema>;
  errors: FieldErrors<NewProductSchema>;
};

export default function Price({ index, register, watch, errors }: PriceProps) {
  return (
    <>
      <h5 className="mb-3">Price</h5>
      <Input
        label="Base Price"
        {...register(`optionCombinations.${index}.price.original`)}
        type="number"
        error={errors.optionCombinations?.[index]?.price?.original?.message}
        min={0}
      />
      <Input
        label="Discount Percentage"
        {...register(`optionCombinations.${index}.price.discountPercent`)}
        type="number"
        error={
          errors.optionCombinations?.[index]?.price?.discountPercent?.message
        }
        min={0}
        max={100}
      />
      <Input
        label="Currency"
        {...register(`optionCombinations.${index}.price.currency`)}
        error={errors.optionCombinations?.[index]?.price?.currency?.message}
      />
      <Form.Label>Discounted Price</Form.Label>
      <Form.Control
        className="mb-4"
        type="number"
        value={
          watch(`optionCombinations.${index}.price.original`) -
          (watch(`optionCombinations.${index}.price.original`) *
            watch(`optionCombinations.${index}.price.discountPercent`)) /
            100
        }
        disabled
        readOnly
      />
    </>
  );
}
