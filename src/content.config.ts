import { defineCollection, reference, z } from 'astro:content';
import { glob } from 'astro/loaders';


const blog = defineCollection({
    loader: glob({ pattern: '**/[^_]*.md', base: "./src/data/blog" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.date(),
        updated: z.date().optional(),
        authors: z.array(reference('authors')),
        image: z.string().optional(),
        categories: z.array(z.string()),
        tags: z.array(z.string()),
    })
});

const projects = defineCollection({
    loader: glob({ pattern: '**/[^_]*.md', base: "./src/data/projects" }),
    schema: z.object({
        name: z.string(),
        description: z.string(),
        authors: z.array(reference('authors')),
        image: z.string().optional(),
        categories: z.array(z.string()),
        tags: z.array(z.string()),
    })
});

const authors = defineCollection({
    loader: glob({ pattern: '**/[^_]*.md', base: "./src/data/authors" }),
    schema: z.object({
        name: z.string(),
        description: z.string(),
        avatar: z.string(),
        email: z.string(),
        website: z.string(),
        roles: z.array(z.string()),
    })
});

export const collections = { blog, projects, authors };