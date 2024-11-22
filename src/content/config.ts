import { defineCollection, z } from "astro:content";

const project = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    img: z.string(),
  }),
});

export const collections = { project };
