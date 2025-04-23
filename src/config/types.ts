export interface ISiteConfig {
    base_url: string;
    dev_url: string;
    title: string;
    description: string;
    favicon?: string;
    google_analytics?: string;
    disqus?: string;
}

export interface INavItem {
    title: string;
    href: string;
}