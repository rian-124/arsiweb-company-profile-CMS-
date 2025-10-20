/**
 * ============================================
 * FIRESTORE HELPER FUNCTIONS
 * ============================================
 *
 * File ini berisi fungsi-fungsi untuk fetch data dari Firestore.
 * Semua fungsi sudah include error handling dan type-safe.
 *
 * NOTES UNTUK TEAM FRONTEND:
 * - Gunakan fungsi-fungsi ini untuk fetch data dari Firestore
 * - Semua fungsi sudah typed, jadi IDE autocomplete akan muncul
 * - Error handling sudah di-handle, tinggal pakai aja
 * - Default nya sudah di-sort dan filter yang isActive: true
 *
 * CONTOH USAGE:
 * ```tsx
 * // Di component
 * const services = await getServices();
 * const projects = await getProjects();
 * ```
 *
 * MIGRATION DARI HARDCODED:
 * Lihat file MIGRATION_GUIDE.md untuk step-by-step
 */

import {
  collection,
  doc,
  getDocs,
  getDoc,
  query,
  where,
  orderBy,
  limit,
  QueryConstraint,
} from 'firebase/firestore';
import { db } from './config';
import {
  COLLECTION_NAMES,
  type Service,
  type Project,
  type TeamMember,
  type Testimonial,
  type BlogPost,
  type FAQ,
  type PricingPlan,
  type Quote,
  type Stat,
  type WorkflowStep,
  type ContactInfo,
  type SocialMedia,
} from './collections';
import { createCachedFunction, cacheKeys, CACHE_TAGS, CACHE_DURATIONS } from '@/lib/cache';

// ============================================
// HELPER FUNCTION: Convert Firestore timestamp to Date
// ============================================
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const convertTimestamps = (data: any): any => {
  const result = { ...data };
  Object.keys(result).forEach((key) => {
    const value = result[key];
    if (value && typeof value === 'object' && 'toDate' in value) {
      result[key] = value.toDate();
    }
  });
  return result;
};

// ============================================
// SERVICES
// ============================================

async function getServicesUncached(): Promise<Service[]> {
  try {
    const servicesRef = collection(db, COLLECTION_NAMES.SERVICES);
    const q = query(
      servicesRef,
      where('isActive', '==', true),
      orderBy('order', 'asc')
    );
    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...convertTimestamps(doc.data()),
    })) as Service[];
  } catch (error) {
    console.error('Error fetching services:', error);
    return [];
  }
}

export const getServices = createCachedFunction(
  getServicesUncached,
  cacheKeys.services(),
  [CACHE_TAGS.SERVICES],
  CACHE_DURATIONS.LONG
);

/**
 * Get single service by ID
 */
export async function getServiceById(id: string): Promise<Service | null> {
  try {
    const docRef = doc(db, COLLECTION_NAMES.SERVICES, id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return {
        id: docSnap.id,
        ...convertTimestamps(docSnap.data()),
      } as Service;
    }
    return null;
  } catch (error) {
    console.error('Error fetching service:', error);
    return null;
  }
}

// ============================================
// PROJECTS
// ============================================

/**
 * Get all active projects, sorted by order
 */
export async function getProjects(): Promise<Project[]> {
  try {
    const projectsRef = collection(db, COLLECTION_NAMES.PROJECTS);
    const q = query(
      projectsRef,
      where('isActive', '==', true),
      orderBy('order', 'asc')
    );
    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...convertTimestamps(doc.data()),
    })) as Project[];
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
}

/**
 * Get featured projects only
 */
export async function getFeaturedProjects(limitCount = 6): Promise<Project[]> {
  try {
    const projectsRef = collection(db, COLLECTION_NAMES.PROJECTS);
    const q = query(
      projectsRef,
      where('isActive', '==', true),
      where('isFeatured', '==', true),
      orderBy('order', 'asc'),
      limit(limitCount)
    );
    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...convertTimestamps(doc.data()),
    })) as Project[];
  } catch (error) {
    console.error('Error fetching featured projects:', error);
    return [];
  }
}

/**
 * Get projects by category
 */
export async function getProjectsByCategory(
  category: string
): Promise<Project[]> {
  try {
    const projectsRef = collection(db, COLLECTION_NAMES.PROJECTS);
    const q = query(
      projectsRef,
      where('isActive', '==', true),
      where('category', '==', category),
      orderBy('order', 'asc')
    );
    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...convertTimestamps(doc.data()),
    })) as Project[];
  } catch (error) {
    console.error('Error fetching projects by category:', error);
    return [];
  }
}

// ============================================
// TEAM
// ============================================

/**
 * Get all active team members, sorted by order
 */
export async function getTeamMembers(): Promise<TeamMember[]> {
  try {
    const teamRef = collection(db, COLLECTION_NAMES.TEAM);
    const q = query(
      teamRef,
      where('isActive', '==', true),
      orderBy('order', 'asc')
    );
    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...convertTimestamps(doc.data()),
    })) as TeamMember[];
  } catch (error) {
    console.error('Error fetching team members:', error);
    return [];
  }
}

// ============================================
// TESTIMONIALS
// ============================================

/**
 * Get all active testimonials, sorted by order
 */
export async function getTestimonials(): Promise<Testimonial[]> {
  try {
    const testimonialsRef = collection(db, COLLECTION_NAMES.TESTIMONIALS);
    const q = query(
      testimonialsRef,
      where('isActive', '==', true),
      orderBy('order', 'asc')
    );
    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...convertTimestamps(doc.data()),
    })) as Testimonial[];
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    return [];
  }
}

// ============================================
// BLOGS
// ============================================

/**
 * Get all published blog posts, sorted by publishedAt (newest first)
 */
export async function getBlogPosts(limitCount?: number): Promise<BlogPost[]> {
  try {
    const blogsRef = collection(db, COLLECTION_NAMES.BLOGS);
    const constraints: QueryConstraint[] = [
      where('isPublished', '==', true),
      orderBy('publishedAt', 'desc'),
    ];

    if (limitCount) {
      constraints.push(limit(limitCount));
    }

    const q = query(blogsRef, ...constraints);
    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...convertTimestamps(doc.data()),
    })) as BlogPost[];
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

/**
 * Get blog post by slug
 */
export async function getBlogPostBySlug(
  slug: string
): Promise<BlogPost | null> {
  try {
    const blogsRef = collection(db, COLLECTION_NAMES.BLOGS);
    const q = query(
      blogsRef,
      where('slug', '==', slug),
      where('isPublished', '==', true)
    );
    const snapshot = await getDocs(q);
    if (!snapshot.empty) {
      const doc = snapshot.docs[0];
      if (doc) {
        return {
          id: doc.id,
          ...convertTimestamps(doc.data()),
        } as BlogPost;
      }
    }
    return null;
  } catch (error) {
    console.error('Error fetching blog post by slug:', error);
    return null;
  }
}

/**
 * Get blog posts by category
 */
export async function getBlogPostsByCategory(
  category: string
): Promise<BlogPost[]> {
  try {
    const blogsRef = collection(db, COLLECTION_NAMES.BLOGS);
    const q = query(
      blogsRef,
      where('isPublished', '==', true),
      where('category', '==', category),
      orderBy('publishedAt', 'desc')
    );
    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...convertTimestamps(doc.data()),
    })) as BlogPost[];
  } catch (error) {
    console.error('Error fetching blog posts by category:', error);
    return [];
  }
}

// ============================================
// FAQ
// ============================================

/**
 * Get all active FAQs, sorted by order
 */
export async function getFAQs(): Promise<FAQ[]> {
  try {
    const faqRef = collection(db, COLLECTION_NAMES.FAQ);
    const q = query(
      faqRef,
      where('isActive', '==', true),
      orderBy('order', 'asc')
    );
    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...convertTimestamps(doc.data()),
    })) as FAQ[];
  } catch (error) {
    console.error('Error fetching FAQs:', error);
    return [];
  }
}

/**
 * Get FAQs by category
 */
export async function getFAQsByCategory(category: string): Promise<FAQ[]> {
  try {
    const faqRef = collection(db, COLLECTION_NAMES.FAQ);
    const q = query(
      faqRef,
      where('isActive', '==', true),
      where('category', '==', category),
      orderBy('order', 'asc')
    );
    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...convertTimestamps(doc.data()),
    })) as FAQ[];
  } catch (error) {
    console.error('Error fetching FAQs by category:', error);
    return [];
  }
}

// ============================================
// PRICING
// ============================================

/**
 * Get all active pricing plans, sorted by order
 */
export async function getPricingPlans(): Promise<PricingPlan[]> {
  try {
    const pricingRef = collection(db, COLLECTION_NAMES.PRICING);
    const q = query(
      pricingRef,
      where('isActive', '==', true),
      orderBy('order', 'asc')
    );
    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...convertTimestamps(doc.data()),
    })) as PricingPlan[];
  } catch (error) {
    console.error('Error fetching pricing plans:', error);
    return [];
  }
}

// ============================================
// QUOTES
// ============================================

/**
 * Get all active quotes, sorted by order
 */
export async function getQuotes(): Promise<Quote[]> {
  try {
    const quotesRef = collection(db, COLLECTION_NAMES.QUOTES);
    const q = query(
      quotesRef,
      where('isActive', '==', true),
      orderBy('order', 'asc')
    );
    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...convertTimestamps(doc.data()),
    })) as Quote[];
  } catch (error) {
    console.error('Error fetching quotes:', error);
    return [];
  }
}

// ============================================
// STATS
// ============================================

/**
 * Get all active stats, sorted by order
 */
export async function getStats(): Promise<Stat[]> {
  try {
    const statsRef = collection(db, COLLECTION_NAMES.STATS);
    const q = query(
      statsRef,
      where('isActive', '==', true),
      orderBy('order', 'asc')
    );
    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...convertTimestamps(doc.data()),
    })) as Stat[];
  } catch (error) {
    console.error('Error fetching stats:', error);
    return [];
  }
}

// ============================================
// WORKFLOW
// ============================================

/**
 * Get all active workflow steps, sorted by stepNumber
 */
export async function getWorkflowSteps(): Promise<WorkflowStep[]> {
  try {
    const workflowRef = collection(db, COLLECTION_NAMES.WORKFLOW);
    const q = query(
      workflowRef,
      where('isActive', '==', true),
      orderBy('stepNumber', 'asc')
    );
    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...convertTimestamps(doc.data()),
    })) as WorkflowStep[];
  } catch (error) {
    console.error('Error fetching workflow steps:', error);
    return [];
  }
}

// ============================================
// CONTACT INFO
// ============================================

/**
 * Get all active contact info, sorted by order
 */
export async function getContactInfo(): Promise<ContactInfo[]> {
  try {
    const contactRef = collection(db, COLLECTION_NAMES.CONTACT_INFO);
    const q = query(
      contactRef,
      where('isActive', '==', true),
      orderBy('order', 'asc')
    );
    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...convertTimestamps(doc.data()),
    })) as ContactInfo[];
  } catch (error) {
    console.error('Error fetching contact info:', error);
    return [];
  }
}

/**
 * Get contact info by type
 */
export async function getContactInfoByType(
  type: 'email' | 'phone' | 'address' | 'whatsapp'
): Promise<ContactInfo[]> {
  try {
    const contactRef = collection(db, COLLECTION_NAMES.CONTACT_INFO);
    const q = query(
      contactRef,
      where('isActive', '==', true),
      where('type', '==', type),
      orderBy('order', 'asc')
    );
    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...convertTimestamps(doc.data()),
    })) as ContactInfo[];
  } catch (error) {
    console.error('Error fetching contact info by type:', error);
    return [];
  }
}

// ============================================
// SOCIAL MEDIA
// ============================================

/**
 * Get all active social media links, sorted by order
 */
export async function getSocialMedia(): Promise<SocialMedia[]> {
  try {
    const socialRef = collection(db, COLLECTION_NAMES.SOCIAL_MEDIA);
    const q = query(
      socialRef,
      where('isActive', '==', true),
      orderBy('order', 'asc')
    );
    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...convertTimestamps(doc.data()),
    })) as SocialMedia[];
  } catch (error) {
    console.error('Error fetching social media:', error);
    return [];
  }
}
