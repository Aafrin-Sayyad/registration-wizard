import { z } from 'zod'

export const step1Schema = z.object({
  firstName: z
    .string()
    .min(2, 'First name must be at least 2 characters')
    .max(50, 'First name must be under 50 characters')
    .regex(/^[A-Za-z\s'-]+$/, 'First name may only contain letters, spaces, hyphens, or apostrophes'),

  lastName: z
    .string()
    .min(2, 'Last name must be at least 2 characters')
    .max(50, 'Last name must be under 50 characters')
    .regex(/^[A-Za-z\s'-]+$/, 'Last name may only contain letters, spaces, hyphens, or apostrophes'),

  dateOfBirth: z
    .string()
    .min(1, 'Date of birth is required')
    .refine((val) => {
      const dob = new Date(val)
      const today = new Date()
      const age = today.getFullYear() - dob.getFullYear()
      const m = today.getMonth() - dob.getMonth()
      const actualAge = m < 0 || (m === 0 && today.getDate() < dob.getDate()) ? age - 1 : age
      return actualAge >= 18
    }, 'You must be at least 18 years old')
    .refine((val) => {
      const dob = new Date(val)
      return dob <= new Date()
    }, 'Date of birth cannot be in the future'),
})

export const step2Schema = z
  .object({
    email: z
      .string()
      .min(1, 'Email is required')
      .regex(
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        'Please enter a valid email address'
      ),

    password: z
      .string()
      .min(8, 'Password must be at least 8 characters')
      .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .regex(/[0-9]/, 'Password must contain at least one number')
      .regex(/[^A-Za-z0-9]/, 'Password must contain at least one special character'),

    confirmPassword: z.string().min(1, 'Please confirm your password'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  })

export const fullSchema = step1Schema.merge(
  z.object({
    email: z.string(),
    password: z.string(),
    confirmPassword: z.string(),
  })
)
