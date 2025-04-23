import { type Author } from "@/data/types";
import { type LucideIcon } from 'lucide-solid';


export interface CardInfoProps {
    title: string;
    Icon: LucideIcon;
    href: string;
    tags: string[];
}

export interface CardPostProps {
    title: string;
    image?: string;
    href: string;
    authors: Author[];
    tags: string[];
}