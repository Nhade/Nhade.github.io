import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		author: z.string().default('Ray'),
		tags: z.array(z.string()).optional(),
		postType: z.enum(['essay', 'log', 'note']).default('essay'),
		project: z.string().optional(),
		summary: z.string().optional(),
	}),
});

const projects = defineCollection({
	loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
	schema: z.object({
		title: z.string(),
		slug: z.string(),
		status: z.enum(['active', 'paused', 'completed']).default('active'),
		description: z.string(),
		longDescription: z.string().optional(),
		techStack: z.array(z.string()),
		repoUrl: z.string().optional(),
		demoUrl: z.string().optional(),
		heroImage: z.string().optional(),
		gallery: z.array(z.object({
			src: z.string(),
			alt: z.string(),
			type: z.enum(['image', 'video']).default('image'),
		})).optional(),
		startDate: z.coerce.date(),
		milestones: z.array(z.object({
			date: z.coerce.date(),
			label: z.string(),
		})).optional(),
		order: z.number().default(0),
	}),
});

export const collections = { blog, projects };
