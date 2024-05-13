import { z } from 'zod';

export const loginValidationSchema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(1, { message: 'Password required' }),
});

export const registerValidationSchema = z
  .object({
    name: z.string().min(1, { message: 'Name is required' }),
    email: z.string().email('Invalid email'),
    password: z.string().min(1, { message: 'Password required' }),
    passwordConfirm: z.string(),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "Password don't match",
    path: ['passwordConfirm'],
  });

export const createTaskValidationSchema = z.object({
  title: z.string().min(1, { message: 'title is required' }),
  description: z.string().min(1, { message: 'description is required' }),
  status: z.enum(['open', 'in_progress', 'done'], { message: 'Invalid status value' }),
});
