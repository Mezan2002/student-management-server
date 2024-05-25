import { z } from 'zod';

// Define the Zod schema
const userValidationSchema = z.object({
  password: z
    .string({
      invalid_type_error: 'Passoword must be a string',
    })
    .min(1, { message: 'Password is required' })
    .max(20, { message: 'Password can not be more than 20 characters' }),
});

export const UserValidation = {
  userValidationSchema,
};
