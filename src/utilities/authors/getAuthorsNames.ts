import { type Author } from "@/data/types";
import { getTeamName } from "./getTeamName";


export const getAuthorsNames = (authors: Author[]): string[] => {
    const names = authors.map(author => author.data.name);
    if (names.length === 0) return [getTeamName()];
    return names;
};