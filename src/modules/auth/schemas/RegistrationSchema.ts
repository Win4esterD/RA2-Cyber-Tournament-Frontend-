import * as z from 'zod';

export const RegistrationSchema = z
  .object({
    email: z
      .string()
      .trim()
      .toLowerCase()
      .pipe(z.string().email({ message: 'Incorrect email' })), // Обратите внимание на z.string().email() внутри pipe

    password: z.string().min(8, { message: 'Password must be not less than 8 symbols' }),

    repeatPassword: z.string(),
  })
  .refine((data) => data.password === data.repeatPassword, {
    message: "Passwords don't match",
    path: ['repeatPassword'],
  });

export type RegistrationType = z.infer<typeof RegistrationSchema>;
