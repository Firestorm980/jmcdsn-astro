import type { Entry } from "@/types";

import Codepen from '@/components/Codepen.astro';
import Devices from '@/components/Devices.astro';
import Figure from '@/components/Figure.astro';
import YouTube from '@/components/YouTube.astro';

export function sortEntriesByDate(entries: Entry[]) {
    return entries.sort((a, b) => {
        return new Date(b.data.date).getTime() - new Date(a.data.date).getTime();
    });
}

export function sortEntriesByTitle(entries: Entry[]) {
    return entries.sort((a, b) => {
        return a.data.title.localeCompare(b.data.title);
    });
}

export function filterDrafts(entries: Entry[]) {
    return entries.filter(entry => {
        return import.meta.env.PROD ? entry.data.draft !== true : true;
    });
}

export function filterByCategory(entries: Entry[], category: string) {
    return entries.filter(entry => {
        if ( !entry.data.categories ) return false;
        return entry.data.categories.includes(category)
    });
}

export function filterByTag(entries: Entry[], tag: string) {
    return entries.filter(entry => {
        if ( !entry.data.tags ) return false;
        return entry.data.tags.includes(tag)
    });
}

export function getCustomComponents() {
	return {
		Codepen,
		Devices,
		Figure,
		YouTube,
	}
}
