import { ACCEPTED_FILE_TYPES, MAX_FILE_SIZE } from "@constants";
import { z } from "zod";

const imageSchema = z
  .any()
  .refine((files) => files?.length === 1, "File is required")
  .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, `Max file size is 5MB`)
  .refine(
    (files) => ACCEPTED_FILE_TYPES.includes(files?.[0]?.type),
    "Only .jpg, .png, .gif files are accepted"
  );

const newProductSchema = z.object({
  name: z.string().min(1, "Product name is required"),
  category: z.string().min(1, "Category is required"),
  description: z.string().min(1, "Description is required"),
  brand: z.string().min(1, "Brand is required"),
  mainImage: imageSchema,
  hoverImage: imageSchema,
  galleryImages: imageSchema,
  features: z
    .array(z.string().min(1, "Please enter a feature or remove it"))
    .nonempty("At least one feature is required"),
  maxOrderQuantity: z
    .string()
    .optional()
    .refine(
      (value) => {
        if (value === "") {
          return true;
        } else {
          return Number(value) > 0;
        }
      },
      {
        message: "Make sure max order quantity is greater than 0 or remove it",
      }
    ),
  optionCombinations: z
    .array(
      z.object({
        price: z.object({
          currency: z.string().min(1, "Currency is required"),
          original: z.coerce.number().min(1, "Original price is required"),
          discountPercent: z.coerce.number().min(0, "Discount is required"),
        }),
        stock: z.coerce.number().min(1, "Stock is required"),
        storage: z
          .string()
          .optional()
          .refine(
            (value) => {
              if (!value) {
                return true;
              } else {
                return /^\d+\s[MGT]B$/.test(value);
              }
            },
            {
              message:
                "Please enter storage in the format 128 MB, 10 GB, 1 TB, etc.",
            }
          ),
        ram: z
          .string()
          .optional()
          .refine((value) => {
            if (!value) {
              return true;
            } else {
              return /^\d+\s[MG]B$/.test(value);
            }
          }),
        color: z
          .object({
            name: z.string().optional(),
            hex: z.string(),
          })
          .optional(),
      })
    )
    .nonempty("At least one option combination is required"),
});

export default newProductSchema;

export type NewProductSchema = z.infer<typeof newProductSchema>;
