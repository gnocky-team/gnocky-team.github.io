import config from '@/config/site';


export const formatPageTitle = (title: string) => {
    return `${title} - ${config.title}`;
};