import { z } from 'zod';

const RegisterUserSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(5, { message: 'Password must be 5 or more characters long' }),
});
type RegisterUserType = z.infer<typeof RegisterUserSchema>;

const LoginUserSchema = RegisterUserSchema;
type LoginUserType = RegisterUserType;

export type { RegisterUserType, LoginUserType };
export { RegisterUserSchema, LoginUserSchema };
