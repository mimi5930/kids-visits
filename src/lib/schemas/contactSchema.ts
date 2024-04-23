import { z } from 'zod';

export const contactSchema = z.object({
	name: z.string().optional(),
	email: z.string().email({ message: 'Please enter a valid email address' }),
	message: z.string().min(1, { message: 'Please include a message' })
});
