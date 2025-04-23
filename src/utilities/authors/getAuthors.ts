import { getCollection } from 'astro:content';
import { type Author } from "@/data/types";


const authors: Author[] = await getCollection('authors');

export const getAuthors = (ids: string[]): Author[] => {
    return ids
        .map(id => authors.find(author => author.id === id))
        .filter(author => author !== undefined);
};