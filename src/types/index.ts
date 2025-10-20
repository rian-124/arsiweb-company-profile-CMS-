/**
 * Centralized Type Definitions
 * 
 * This file exports all shared types used throughout the application.
 * Import specific types from their respective modules for better organization.
 */

// Re-export Firebase collection types
export type {
  Service,
  Project,
  TeamMember,
  Testimonial,
  BlogPost,
  FAQ,
  PricingPlan,
  Quote,
  Stat,
  WorkflowStep,
  ContactInfo,
  SocialMedia,
} from '@/lib/firebase/collections';

// Common UI component props
export interface BaseComponentProps {
  id?: string;
  className?: string;
  children?: React.ReactNode;
}

export interface SectionProps extends BaseComponentProps {
  id: string;
}

// API Response types
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

export interface ApiError {
  message: string;
  code?: string;
  details?: unknown;
}

// Loading and error states
export interface LoadingState {
  isLoading: boolean;
  error: string | null;
}

// Navigation types
export interface NavLink {
  name: string;
  href: string;
  isExternal?: boolean;
}

// SEO and metadata types
export interface SEOData {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  canonical?: string;
}