import Codepen from '@/components/Codepen.astro';
import Devices from '@/components/Devices.astro';
import Figure from '@/components/Figure.astro';
import Gallery from "@/components/Gallery.astro";
import Stat from '@/components/Stat.astro';
import YouTube from '@/components/YouTube.astro';
import type { CollectionEntry, DataEntryMap } from "astro:content";

export function sortEntriesByDate(entries: CollectionEntry<keyof DataEntryMap>[]) {
    return entries.sort((a, b) => {
        return new Date(b.data.date).getTime() - new Date(a.data.date).getTime();
    });
}

export function sortEntriesByTitle(entries: CollectionEntry<keyof DataEntryMap>[]) {
    return entries.sort((a, b) => {
        return a.data.title.localeCompare(b.data.title);
    });
}

export function filterDrafts(entries: CollectionEntry<keyof DataEntryMap>[]) {
    return entries.filter(entry => {
        return import.meta.env.PROD ? entry.data.draft !== true : true;
    });
}

export function filterByCategory(entries: CollectionEntry<keyof DataEntryMap>[], category: string) {
    return entries.filter(entry => {
        if ( !entry.data.categories ) return false;
        return entry.data.categories.includes(category)
    });
}

export function filterByTag(entries: CollectionEntry<keyof DataEntryMap>[], tag: string) {
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
		Gallery,
		Stat,
		YouTube,
	}
}

export function getImageWidths () {
	return [480,640,960,1280,1920,2560,3840];
}
