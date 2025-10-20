/**
 * ============================================
 * FIREBASE CONFIGURATION
 * ============================================
 *
 * Type-safe Firebase configuration using validated environment variables.
 * 
 * Features:
 * - Environment validation with Zod
 * - Proper TypeScript types
 * - Hot reload safe initialization
 * - Client-side only analytics
 */

import { initializeApp, getApps, getApp, type FirebaseApp } from 'firebase/app';
import { getFirestore, type Firestore } from 'firebase/firestore';
import { getAnalytics, isSupported, type Analytics } from 'firebase/analytics';
import { env } from '@/lib/env';

// Firebase configuration using validated environment variables
const firebaseConfig = {
  apiKey: env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: env.NEXT_PUBLIC_FIREBASE_APP_ID,
  ...(env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID && { 
    measurementId: env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID 
  }),
};

// Initialize Firebase (prevent multiple instances during hot reload)
const app: FirebaseApp = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// Initialize Firestore
export const db: Firestore = getFirestore(app);

// Initialize Analytics (client-side only)
let analytics: Analytics | undefined;
if (typeof window !== 'undefined') {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  }).catch((error) => {
    console.warn('Firebase Analytics initialization failed:', error);
  });
}

export { analytics };
export default app;
