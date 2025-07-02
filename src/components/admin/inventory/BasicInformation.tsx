import { Input } from "@components/form";
import { CATEGORIES } from "@constants";
import { NewProductSchema } from "@validations/newProductSchema";
import { Form } from "react-bootstrap";
import {
  Control,
  FieldErrors,
  useFieldArray,
  UseFormRegister,
} from "react-hook-form";
import AddFieldButton from "./AddFieldButton";
import RemoveFieldButton from "./RemoveFieldButton";

type BasicInformationProps = {
  control: Control<NewProductSchema>;
  register: UseFormRegister<NewProductSchema>;
  errors: FieldErrors<NewProductSchema>;
};

export default function BasicInformation({
  control,
  register,
  errors,
}: Readonly<BasicInformationProps>) {
  const {
    fields: featuresFields,
    append: appendFeature,
    remove: removeFeature,
  } = useFieldArray({
    control,
    name: "features",
  });

  return (
    <>
      <h3 className="mb-3">Basic Information</h3>
      <Input
        label="Product Name"
        type="text"
        {...register("name")}
        error={errors.name?.message}
      />
      <Input
        label="Category"
        as="select"
        {...register("category")}
        error={errors.category?.message}
      >
        <option value="">Select a category</option>
        {CATEGORIES.map((category) => (
          <option key={category.id} value={category.id}>
            {category.displayName}
          </option>
        ))}
      </Input>
      <Input
        label="Description"
        type="text"
        {...register("description")}
        error={errors.description?.message}
      />
      <Input
        label="Brand"
        type="text"
        {...register("brand")}
        error={errors.brand?.message}
      />
      <div className="d-flex justify-content-between align-items-center my-3">
        <Form.Label>Features</Form.Label>
        <AddFieldButton onClick={() => appendFeature("New feature")} />
      </div>
      {featuresFields.map((field, index) => (
        <div className="d-flex align-items-center my-3 gap-4" key={field.id}>
          <Input
            label={`Feature ${index + 1}`}
            className="flex-grow-1"
            error={errors.features?.[index]?.message}
            {...register(`features.${index}`)}
          />
          <RemoveFieldButton
            onClick={() => removeFeature(index)}
            disabled={featuresFields.length === 1}
          />
        </div>
      ))}
      <Input
        label="Max Order Quantity"
        {...register("maxOrderQuantity")}
        type="number"
        min={1}
        error={errors.maxOrderQuantity?.message}
      />
    </>
  );
}
