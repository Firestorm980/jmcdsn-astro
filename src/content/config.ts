// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

const defaults = {
	title: z.string(),
	date: z.date(),
	description: z.string().optional(),
	draft: z.boolean(),
	tags: z.array(z.string()).optional(),
	categories: z.array(z.string()).optional(),
};

// 2. Define your collection(s)
const postsCollection = defineCollection({
	schema: z.object({
		...defaults,
	})
});
const snippetsCollection = defineCollection({
	schema: z.object({
		...defaults,
		lastmod: z.date(),
	})
});
const projectsCollection = defineCollection({
	schema: z.object({
		...defaults,
		company: z.array(z.string()),
	})
});
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'my-thoughts': postsCollection,
  'snippets': snippetsCollection,
  'projects': projectsCollection,
};
