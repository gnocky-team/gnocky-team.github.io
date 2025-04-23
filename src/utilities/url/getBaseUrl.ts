import config from '@/config/site';


export const getBaseUrl = () => {
    return import.meta.env.DEV
        ? config.dev_url
        : config.base_url;
};