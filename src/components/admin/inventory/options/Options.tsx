import { Input } from "@components/form";
import { NewProductSchema } from "@validations/newProductSchema";
import {
  Control,
  FieldErrors,
  useFieldArray,
  UseFormRegister,
  UseFormWatch,
} from "react-hook-form";
import AddFieldButton from "../AddFieldButton";
import RemoveFieldButton from "../RemoveFieldButton";
import Price from "./price";

type OptionsProps = {
  control: Control<NewProductSchema>;
  register: UseFormRegister<NewProductSchema>;
  watch: UseFormWatch<NewProductSchema>;
  errors: FieldErrors<NewProductSchema>;
};

export default function Options({
  control,
  register,
  watch,
  errors,
}: Readonly<OptionsProps>) {
  const {
    fields: optionCombinationsFields,
    append: appendOptionCombination,
    remove: removeOptionCombination,
  } = useFieldArray({
    control,
    name: "optionCombinations",
  });

  return (
    <>
      <div className="d-flex justify-content-between align-items-center my-3">
        <h3>Options</h3>
        <AddFieldButton
          onClick={() =>
            appendOptionCombination({
              price: {
                currency: "$",
                original: 0,
                discountPercent: 0,
              },
              stock: 0,
            })
          }
        />
      </div>
      {optionCombinationsFields.map((field, index) => (
        <div key={field.id}>
          <div className="d-flex justify-content-between align-items-center my-4">
            <h4>Option {index + 1}</h4>
            <RemoveFieldButton
              onClick={() => removeOptionCombination(index)}
              disabled={optionCombinationsFields.length === 1}
            />
          </div>
          <div className="d-flex gap-4">
            <Input
              label="Option color"
              {...register(`optionCombinations.${index}.color.hex`)}
              type="color"
              error={errors.optionCombinations?.[index]?.color?.hex?.message}
            />
            <Input
              label="Option color name"
              {...register(`optionCombinations.${index}.color.name`)}
              type="text"
              error={errors.optionCombinations?.[index]?.color?.name?.message}
            />
          </div>
          <Input
            label="Ram"
            {...register(`optionCombinations.${index}.ram`)}
            error={errors.optionCombinations?.[index]?.ram?.message}
          />
          <Input
            label="Storage"
            {...register(`optionCombinations.${index}.storage`)}
            error={errors.optionCombinations?.[index]?.storage?.message}
          />
          <Input
            label="Stock"
            {...register(`optionCombinations.${index}.stock`)}
            type="number"
            error={errors.optionCombinations?.[index]?.stock?.message}
            min={0}
          />
          <Price
            index={index}
            register={register}
            watch={watch}
            errors={errors}
          />
        </div>
      ))}
    </>
  );
}
