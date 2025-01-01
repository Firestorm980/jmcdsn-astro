import type { CollectionEntry, DataEntryMap } from "astro:content";

export type Entry = {
    data: EntryData;
    render: Function;
}

export type EntryData = {
    title: string;
    date: Date;
    description: string;
    draft: boolean;
    tags?: string[];
    categories?: string[];
}

export type Post = CollectionEntry<'my-thoughts'> & {
    featured_image?: any;
}

export type Snippet = CollectionEntry<"snippets"> & {
    lastmod: Date;
}

export type Project = CollectionEntry<"projects"> & {
	company: string;
	subtitle: string;
	featured_image: string;
	roles: string[];
	libraries: string[];
	technologies: string[];
	platforms: string[];
}

export type PaginationPage = {
    data: CollectionEntry<keyof DataEntryMap>[];
    start: number;
    end: number;
    size: number;
    total: number;
    currentPage: number;
    lastPage: number;
    url: {
        current: string;
        prev?: string;
        next?: string;
    }
}

export type MediaDB = {
	src: {
		assets: {
			images: {
				posts: {
					[key: string]: {
						caption?: string;
						alt?: string;
						title?: string;
					};
				}
			}
		}
	}
}
