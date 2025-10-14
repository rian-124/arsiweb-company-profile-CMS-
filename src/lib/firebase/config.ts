/**
 * ============================================
 * FIREBASE CONFIGURATION
 * ============================================
 *
 * File ini berisi konfigurasi dan inisialisasi Firebase.
 *
 * NOTES UNTUK TEAM FRONTEND:
 * - Firebase sudah di-setup dan siap digunakan
 * - Config menggunakan environment variables (lihat .env.local)
 * - Jangan import file ini langsung, gunakan helper functions di firestore.ts
 * - Analytics hanya jalan di browser (client-side)
 *
 * USAGE:
 * import { db } from '@/lib/firebase/config'
 */

import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics, isSupported } from 'firebase/analytics';

// Firebase configuration dari environment variables
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase (cek dulu apakah sudah ada instance)
// Ini penting untuk Next.js karena hot reload bisa bikin multiple instances
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Analytics (hanya di browser)
// Analytics ga jalan di server-side rendering
let analytics;
if (typeof window !== 'undefined') {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

export { analytics };
export default app;
