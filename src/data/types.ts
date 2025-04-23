import { getCollection } from 'astro:content';


export type Author = Awaited<ReturnType<typeof getCollection<'authors'>>>[number];