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

export type Post = EntryData & {
    featured_image?: any;
}

export type Snippet = EntryData & {
    lastmod: Date;
}

export type Project = EntryData & {
	company: string;
	subtitle: string;
	featured_image: string;
	roles: string[];
	libraries: string[];
	technologies: string[];
	platforms: string[];
}

export type PaginationEntry = Entry & {
    id: string;
    slug: string;
    body: string;
    collection: string;
}

export type PaginationPage = {
    data: PaginationEntry[];
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
