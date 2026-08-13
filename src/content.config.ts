import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const loc = z.object({
  en: z.string(),
  zh: z.string(),
});

const catalog = defineCollection({
  loader: glob({ pattern: '*.yml', base: './src/content/catalog' }),
  schema: z.object({
    type: z.enum(['plugin', 'skill', 'mcp']),
    name: z.string(),
    featured: z.boolean().default(false),
    job: loc,
    description: loc,
    install: z.object({
      claude_code: z.string(),
    }),
    status: z.enum(['works', 'broken', 'unverified']),
    verified_at: z.string().optional(),
    source_checked_at: z.string().optional(),
    risk: z.object({
      needs_token: z.boolean(),
      stdio: z.boolean(),
      can_write_files: z.boolean(),
      notes: loc,
    }),
    source: z.object({
      github: z.string().url().optional(),
      marketplace: z.string().optional(),
      homepage: z.string().url().optional(),
    }),
  }),
});

export const collections = { catalog };
