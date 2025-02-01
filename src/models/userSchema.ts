import {z} from 'zod';

const UserSchema = z.object({
  avatar: z.string(),
  creationAt: z.string(),
  email: z.string(),
  id: z.number(),
  name: z.string(),
  password: z.string(),
  role: z.enum(['customer', 'admin']),
  updatedAt: z.string(),
});

export default UserSchema;

export type User = z.infer<typeof UserSchema>;
