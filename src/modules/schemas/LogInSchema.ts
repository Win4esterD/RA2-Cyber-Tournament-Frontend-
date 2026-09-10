import * as z from "zod";


export const LogInSchema = z.object({
  email: z
    .string()
    .trim()
    .toLowerCase()
    .pipe(z.email({ message: "Incorrect email" })),

  password: z
    .string()
    .min(8, { message: "Password must be not less than 8 symbols" }),
});


export type LogInType = z.infer<typeof LogInSchema>;
