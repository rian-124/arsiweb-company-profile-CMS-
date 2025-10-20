import { unstable_cache } from 'next/cache';

/**
 * Cache configuration for different data types
 */
export const CACHE_TAGS = {
  SERVICES: 'services',
  PROJECTS: 'projects',
  TEAM: 'team',
  TESTIMONIALS: 'testimonials',
  BLOG: 'blog',
  FAQ: 'faq',
  PRICING: 'pricing',
  QUOTES: 'quotes',
  STATS: 'stats',
  WORKFLOW: 'workflow',
  CONTACT: 'contact',
  SOCIAL: 'social',
} as const;

export const CACHE_DURATIONS = {
  SHORT: 60, // 1 minute
  MEDIUM: 300, // 5 minutes
  LONG: 3600, // 1 hour
  VERY_LONG: 86400, // 24 hours
} as const;

/**
 * Creates a cached version of a function with specified cache tags and duration
 */
export function createCachedFunction<T extends (...args: unknown[]) => Promise<unknown>>(
  fn: T,
  keyParts: string[],
  tags: string[],
  revalidate: number = CACHE_DURATIONS.MEDIUM
): T {
  return unstable_cache(fn, keyParts, {
    tags,
    revalidate,
  }) as T;
}

/**
 * Cache key generators for consistent cache keys
 */
export const cacheKeys = {
  services: () => ['services', 'all'],
  serviceById: (id: string) => ['services', 'by-id', id],
  projects: () => ['projects', 'all'],
  featuredProjects: (limit: number) => ['projects', 'featured', limit.toString()],
  projectsByCategory: (category: string) => ['projects', 'category', category],
  teamMembers: () => ['team', 'all'],
  testimonials: () => ['testimonials', 'all'],
  blogPosts: (limit?: number) => ['blog', 'all', limit?.toString() || 'unlimited'],
  blogPostBySlug: (slug: string) => ['blog', 'by-slug', slug],
  blogPostsByCategory: (category: string) => ['blog', 'category', category],
  faqs: () => ['faq', 'all'],
  faqsByCategory: (category: string) => ['faq', 'category', category],
  pricingPlans: () => ['pricing', 'all'],
  quotes: () => ['quotes', 'all'],
  stats: () => ['stats', 'all'],
  workflowSteps: () => ['workflow', 'all'],
  contactInfo: () => ['contact', 'all'],
  contactInfoByType: (type: string) => ['contact', 'type', type],
  socialMedia: () => ['social', 'all'],
} as const;