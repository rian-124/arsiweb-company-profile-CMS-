/**
 * ============================================
 * FIREBASE COLLECTION NAMES & TYPESCRIPT TYPES
 * ============================================
 *
 * File ini berisi:
 * 1. Nama-nama collection di Firestore (sebagai constants)
 * 2. TypeScript interfaces untuk semua data types
 *
 * NOTES UNTUK TEAM FRONTEND:
 * - Gunakan COLLECTION_NAMES daripada hard-code string collection
 * - Types ini akan muncul di IDE autocomplete kalian
 * - Kalau ada perubahan structure data, update disini
 *
 * USAGE EXAMPLE:
 * import { COLLECTION_NAMES, type Service } from '@/lib/firebase/collections'
 * const servicesRef = collection(db, COLLECTION_NAMES.SERVICES)
 */

// ============================================
// COLLECTION NAMES
// ============================================
export const COLLECTION_NAMES = {
  SERVICES: 'services',
  PROJECTS: 'projects',
  TEAM: 'team',
  TESTIMONIALS: 'testimonials',
  BLOGS: 'blogs',
  FAQ: 'faq',
  PRICING: 'pricing',
  QUOTES: 'quotes',
  STATS: 'stats',
  WORKFLOW: 'workflow',
  CONTACT_INFO: 'contact_info',
  SOCIAL_MEDIA: 'social_media',
} as const;

// ============================================
// TYPESCRIPT TYPES
// ============================================

/**
 * Service (Layanan)
 * Collection: services
 * Untuk section: ServicesSection
 */
export interface Service {
  id: string;
  iconSrc: string; // Path ke icon (misal: "/icons/wordpress.svg")
  title: string; // Misal: "Website Wordpress"
  description: string; // Baris pertama deskripsi
  description2: string; // Baris kedua deskripsi
  order: number; // Urutan tampil (untuk sorting)
  isActive: boolean; // Aktif/non-aktif
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Project (Portfolio)
 * Collection: projects
 * Untuk section: ProjectSection
 */
export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string; // URL gambar project
  category: string; // Misal: "Website", "Mobile App", "SEO"
  clientName?: string; // Optional
  projectUrl?: string; // Link ke project (optional)
  technologies?: string[]; // Tech stack yang dipakai
  order: number;
  isFeatured: boolean; // Untuk highlight project tertentu
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Team Member
 * Collection: team
 * Untuk section: TeamSection
 */
export interface TeamMember {
  id: string;
  name: string;
  position: string; // Jabatan (misal: "CEO", "Lead Developer")
  photoUrl: string; // URL foto
  bio?: string; // Bio singkat (optional)
  socialMedia?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
    instagram?: string;
  };
  order: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Testimonial
 * Collection: testimonials
 * Untuk section: TestimonialSection
 */
export interface Testimonial {
  id: string;
  clientName: string;
  clientPosition: string; // Jabatan client
  clientCompany: string;
  clientPhoto?: string; // URL foto client (optional)
  rating: number; // 1-5
  testimonialText: string;
  projectType?: string; // Jenis project yang dikerjakan
  order: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Blog Post
 * Collection: blogs
 * Untuk section: BlogSection
 */
export interface BlogPost {
  id: string;
  title: string;
  slug: string; // URL-friendly title
  excerpt: string; // Ringkasan
  content: string; // Full content (bisa HTML atau Markdown)
  coverImageUrl: string;
  author: {
    name: string;
    photoUrl?: string;
  };
  category: string; // Misal: "Tutorial", "News", "Case Study"
  tags?: string[];
  isPublished: boolean;
  publishedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * FAQ
 * Collection: faq
 * Untuk section: FaqSection
 */
export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category?: string; // Untuk grouping FAQ
  order: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Pricing Plan
 * Collection: pricing
 * Untuk section: PricingSection
 */
export interface PricingPlan {
  id: string;
  name: string; // Misal: "Basic", "Professional", "Enterprise"
  price: number;
  currency: string; // "IDR", "USD"
  billingPeriod: string; // "monthly", "yearly"
  description: string;
  features: string[]; // Array of features
  isPopular: boolean; // Untuk highlight plan tertentu
  ctaText: string; // Text button (misal: "Mulai Sekarang")
  ctaUrl?: string; // Link button (optional)
  order: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Quote (untuk slider quotes)
 * Collection: quotes
 * Untuk section: QuoteStatsSection
 */
export interface Quote {
  id: string;
  quoteText: string;
  authorName: string;
  authorPosition: string;
  authorCompany?: string;
  authorPhoto?: string;
  order: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Stat (statistik company)
 * Collection: stats
 * Untuk section: QuoteStatsSection
 */
export interface Stat {
  id: string;
  label: string; // Misal: "Projects Completed", "Happy Clients"
  value: number; // Angka yang akan di-count up
  suffix?: string; // Misal: "+", "K", "M"
  icon?: string; // Icon path (optional)
  order: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Workflow Step
 * Collection: workflow
 * Untuk section: WorkflowSection
 */
export interface WorkflowStep {
  id: string;
  stepNumber: number;
  title: string;
  description: string;
  icon?: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Contact Info
 * Collection: contact_info
 * Untuk Header/Footer
 */
export interface ContactInfo {
  id: string;
  type: 'email' | 'phone' | 'address' | 'whatsapp';
  label: string;
  value: string;
  icon?: string;
  order: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Social Media
 * Collection: social_media
 * Untuk Header/Footer
 */
export interface SocialMedia {
  id: string;
  platform: string; // "facebook", "instagram", "linkedin", etc
  url: string;
  icon?: string;
  order: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}
