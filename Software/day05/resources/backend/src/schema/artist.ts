import { z } from 'zod';

const CreateArtistSchema = z.object({
  name: z.string().nonempty({ message: 'Name must be 1 or more characters long' }),
  rating: z
    .number()
    .int({ message: 'Rating must be an integer' })
    .min(0, { message: 'Rating must be between 0 and 5' })
    .max(5, { message: 'Rating must be between 0 and 5' }),
  nationality: z.string().nonempty({ message: 'Nationality must be 1 or more characters long' }),
  musicGender: z.string().nonempty({ message: 'Music Gender must be 1 or more characters long' }),
  photoUrl: z.string().url({ message: 'Invalid URL address' }),
});

type CreateArtistType = z.infer<typeof CreateArtistSchema>;

export type { CreateArtistType };
export { CreateArtistSchema };
