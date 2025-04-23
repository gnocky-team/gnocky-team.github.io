import { getBaseUrl } from "./getBaseUrl";


export const getUrl = (path: string) => {
    return `${getBaseUrl()}${path}`;
};