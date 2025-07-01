import { zodResolver } from "@hookform/resolvers/zod";
import { useAppDispatch } from "@store/hooks";
import { addNewProduct } from "@store/inventory/act/addNewProduct";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import BasicInformation from "./BasicInformation";
import Images from "./Images";
import Options from "./options/Options";

import newProductSchema, {
  NewProductSchema,
} from "@validations/newProductSchema";

export default function AddNewProductForm() {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<NewProductSchema>({
    resolver: zodResolver(newProductSchema),
    shouldFocusError: false,
    mode: "onBlur",
  });
  const disptach = useAppDispatch();

  const onSubmit = async (data: NewProductSchema) => {
    disptach(addNewProduct(data));
  };

  return (
    <>
      <h2 style={{ marginTop: 40 }}>Add New Product</h2>
      <Form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-4 rounded-4 mt-4 gap-4"
      >
        <BasicInformation
          control={control}
          register={register}
          errors={errors}
        />
        <Images register={register} errors={errors} />
        <Options
          control={control}
          register={register}
          watch={watch}
          errors={errors}
        />
        <Button type="submit">Add Product</Button>
      </Form>
    </>
  );
}
