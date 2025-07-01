import { z } from "zod";

const nameAndEmailSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
});

type nameAndEmailSchemaType = z.infer<typeof nameAndEmailSchema>;

export { nameAndEmailSchema, type nameAndEmailSchemaType };
