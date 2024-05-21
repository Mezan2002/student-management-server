import { z } from 'zod';

// Schema definitions for embedded documents
const userNameValidationSchema = z.object({
  firstName: z
    .string()
    .trim()
    .max(20, 'First name cannot be more than 20 characters')
    .refine(
      (value) =>
        value.charAt(0).toUpperCase() + value.slice(1).toLowerCase() === value,
      {
        message: 'First name must be capitalized',
      },
    ),
  middleName: z.string().optional(),
  lastName: z
    .string()
    .nonempty('Last name is required')
    .regex(/^[A-Za-z]+$/, 'Last name can only contain alphabetic characters'),
});

const guardianValidationSchema = z.object({
  fatherName: z.string().nonempty('Father name is required'),
  fatherOccupation: z.string().nonempty('Father occupation is required'),
  fatherContactNo: z.string().nonempty('Father contact number is required'),
  motherName: z.string().nonempty('Mother name is required'),
  motherOccupation: z.string().nonempty('Mother occupation is required'),
  motherContactNo: z.string().nonempty('Mother contact number is required'),
});

const localGuardianValidationSchema = z.object({
  name: z.string().nonempty('Local guardian name is required'),
  occupation: z.string().nonempty('Local guardian occupation is required'),
  contactNo: z.string().nonempty('Local guardian contact number is required'),
  address: z.string().nonempty('Local guardian address is required'),
});

// Main student schema
const studentValidationSchema = z.object({
  id: z.string().optional(),
  name: userNameValidationSchema,
  gender: z.enum(['male', 'female', 'other'], {
    errorMap: () => ({ message: '{VALUE} is not a valid gender' }),
  }),
  dateOfBirth: z.string().optional(),
  email: z
    .string()
    .email('Invalid email address')
    .nonempty('Email is required'),
  contactNo: z.string().nonempty('Contact number is required'),
  emergencyContactNo: z
    .string()
    .nonempty('Emergency contact number is required'),
  bloodGroup: z
    .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
    .optional(),
  presentAddress: z.string().nonempty('Present address is required'),
  permanentAddress: z.string().nonempty('Permanent address is required'),
  guardian: guardianValidationSchema,
  localGuardian: localGuardianValidationSchema,
  profileImg: z.string().optional(),
  isActive: z.enum(['active', 'blocked']).default('active'),
});

export default studentValidationSchema;
