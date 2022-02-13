import { z } from 'zod';

const CreateMusicSchema = z.object({
  name: z.string().nonempty({ message: 'Name must be 1 or more characters long' }),
  url: z.string().url({ message: 'Invalid URL address' }),
  rating: z
    .number()
    .int({ message: 'Rating must be an integer' })
    .min(0, { message: 'Rating must be between 0 and 5' })
    .max(5, { message: 'Rating must be between 0 and 5' }),
});

type CreateMusicType = z.infer<typeof CreateMusicSchema>;

export type { CreateMusicType };
export { CreateMusicSchema };
