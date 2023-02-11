// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';
// 2. Define your collection(s)
const postsCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		date: z.string().transform(str => new Date(str)),
		categories: z.array(z.string()).optional(),
	})
});
const snippetsCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		last_updated: z.string().transform(str => new Date(str)),
		categories: z.array(z.string()).optional(),
		description: z.string(),
	})
});
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'my-thoughts': postsCollection,
  'snippets': snippetsCollection,
};
