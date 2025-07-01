import { Input } from "@components/form";
import { NewProductSchema } from "@validations/newProductSchema";
import { FieldErrors, UseFormRegister } from "react-hook-form";

type ImagesProps = {
  register: UseFormRegister<NewProductSchema>;
  errors: FieldErrors<NewProductSchema>;
};

export default function Images({ register, errors }: ImagesProps) {
  return (
    <>
      <h3 className="mb-3">Images</h3>
      <Input
        label="Main Image"
        {...register("mainImage")}
        type="file"
        accept="image/*"
        error={errors.mainImage?.message as string}
      />
      <Input
        label="Hover Image"
        {...register("hoverImage")}
        type="file"
        accept="image/*"
        error={errors.hoverImage?.message as string}
      />
      <Input
        label="Gallery Images"
        {...register("galleryImages")}
        type="file"
        accept="image/*"
        error={errors.galleryImages?.message as string}
        multiple
      />
    </>
  );
}
