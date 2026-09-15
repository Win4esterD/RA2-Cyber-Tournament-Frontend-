import * as z from 'zod';

export const ResetPasswordSchema = z.object({
  email: z
    .string()
    .trim()
    .toLowerCase()
    .pipe(z.email({ message: 'Incorrect email' })),
});

export type ResetPasswordType = z.infer<typeof ResetPasswordSchema>;
