import z from "zod";

export const aboutUsSchema = z.object({
  name: z.string().min(1, "Name is Required"),
  email: z.email().min(1, "Invalid Email"),
  description: z
    .string()
    .min(1, "Description is required")
    .max(500, "Maximum of 500 characthers"),
});

export type AboutUsSchema = z.infer<typeof aboutUsSchema>;
