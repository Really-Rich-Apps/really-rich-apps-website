// File: src/content/config.ts
import { defineCollection, z } from '@astrojs/content';

const posts = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.string(),
    }),
});

export const collections = {
    posts,
};
