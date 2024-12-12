// 1. Import utilities from `astro:content`
import { glob } from 'astro/loaders';
import { z, defineCollection } from 'astro:content';

const defaults = {
	title: z.string(),
	date: z.date(),
	description: z.string().optional(),
	draft: z.boolean().optional(),
	tags: z.array(z.string()).optional(),
	categories: z.array(z.string()).optional(),
};

// 2. Define your collection(s)
const postsCollection = defineCollection({
	loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/my-thoughts" }),
	schema: z.object({
		...defaults,
		featured_image: z.string().optional(),
	})
});
const snippetsCollection = defineCollection({
	loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/snippets" }),
	schema: z.object({
		...defaults,
		lastmod: z.date(),
	})
});
const projectsCollection = defineCollection({
	loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
	schema: z.object({
		...defaults,
		company: z.string(),
		subtitle: z.string(),
		featured_image: z.string(),
		roles: z.array(z.string()),
		libraries: z.array(z.string()),
		technologies: z.array(z.string()),
		platforms: z.array(z.string()),
	})
});
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'my-thoughts': postsCollection,
  'snippets': snippetsCollection,
  'projects': projectsCollection,
};
