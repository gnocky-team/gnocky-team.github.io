import { type Author } from "@/data/types";

export interface LayoutProps {
    title: string;
	formatTitle?: boolean;
	description: string;
	date?:string;
	updated?: string;
	authors?: Author[];
	image?: string;
	categories?: string[];
	tags?: string[];
}