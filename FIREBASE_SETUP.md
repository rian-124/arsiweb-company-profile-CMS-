# 🔥 Firebase Backend Setup - Arsiweb Company Profile

Setup backend Firebase untuk Arsiweb Company Profile Website.

## 📁 File Structure

```
src/
├── lib/
│   └── firebase/
│       ├── config.ts          # Firebase initialization & config
│       ├── collections.ts     # TypeScript types & collection names
│       └── firestore.ts       # Helper functions untuk fetch data
│
.env.local                     # Environment variables (GIT IGNORED)
.env.example                   # Template environment variables
MIGRATION_GUIDE.md             # Panduan untuk frontend team
```

---

## ⚙️ Setup yang Sudah Dilakukan

### ✅ 1. Firebase SDK Installed
```bash
npm install firebase
```

### ✅ 2. Environment Variables
File `.env.local` sudah dibuat dengan Firebase credentials.

**⚠️ IMPORTANT:** File `.env.local` sudah masuk `.gitignore` - aman dari git push.

### ✅ 3. Firebase Config
File `src/lib/firebase/config.ts` berisi:
- Firebase initialization
- Firestore database instance
- Analytics setup (browser-only)
- Handle hot reload di Next.js development

### ✅ 4. TypeScript Types
File `src/lib/firebase/collections.ts` berisi:
- Interface untuk semua data types
- Collection names sebagai constants
- Full type safety untuk IDE autocomplete

### ✅ 5. Helper Functions
File `src/lib/firebase/firestore.ts` berisi:
- Functions untuk fetch data dari Firestore
- Built-in error handling
- Auto filter `isActive: true`
- Auto sorting by `order`

---

## 📊 Firestore Collections

Berikut collections yang perlu dibuat di Firestore (via Admin Panel):

| Collection | Purpose | Example Doc |
|------------|---------|-------------|
| `services` | Layanan yang ditawarkan | Website Wordpress, SEO, dll |
| `projects` | Portfolio projects | Client projects showcase |
| `team` | Team members | CEO, Developer, Designer, dll |
| `testimonials` | Client testimonials | Review dari clients |
| `blogs` | Blog posts | Articles, tutorials, news |
| `faq` | Frequently Asked Questions | Q&A untuk clients |
| `pricing` | Pricing plans | Basic, Pro, Enterprise |
| `quotes` | Quotes untuk slider | Inspirational quotes |
| `stats` | Company statistics | Projects done, clients, etc |
| `workflow` | Workflow steps | Step 1, 2, 3 process |
| `contact_info` | Contact information | Email, phone, address |
| `social_media` | Social media links | Facebook, Instagram, dll |

---

## 🔐 Firestore Security Rules

Rules yang perlu di-setup di Firebase Console:

```javascript
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {

    // Default: Block all
    match /{document=**} {
      allow read, write: if false;
    }

    // PUBLIC READ - Semua collection bisa di-read oleh public
    match /{collection}/{document} {
      allow read: if true;
    }

    // ADMIN WRITE - Hanya authenticated admin yang bisa write
    // (Nanti di-setup sama admin panel)
    match /{collection}/{document} {
      allow write: if request.auth != null && request.auth.token.admin == true;
    }
  }
}
```

**Penjelasan:**
- ✅ Company profile website: **READ ONLY** (fetch data untuk display)
- ✅ Admin panel: **READ + WRITE** (authenticated admin aja)
- ✅ Public: Tidak bisa write sama sekali

---

## 🛠️ Next Steps

### Untuk Backend Team:
1. ✅ Setup Firebase project - **DONE**
2. ✅ Install dependencies - **DONE**
3. ✅ Create helper functions - **DONE**
4. ⏳ Setup Firestore Security Rules (di Firebase Console)
5. ⏳ Create Firestore indexes kalau perlu (auto-generated pas error)
6. ⏳ Setup Firebase Storage (untuk upload images dari admin panel)
7. ⏳ Create Admin Panel project (Next.js app terpisah)

### Untuk Frontend Team:
1. ✅ Environment variables ready - **DONE**
2. ✅ Helper functions ready - **DONE**
3. ✅ TypeScript types ready - **DONE**
4. 📖 Baca `MIGRATION_GUIDE.md` untuk cara migrate component
5. ⏳ Migrate components dari hardcoded ke Firestore
6. ⏳ Test dengan dummy data

---

## 📝 How to Use (Untuk Frontend)

### Simple Example:

```tsx
// src/app/components/site/home/serviceSection/ServiceSection.tsx
import { getServices } from '@/lib/firebase/firestore';

export default async function ServicesSection({id}: {id: string}) {
  // Fetch data dari Firestore
  const services = await getServices();

  return (
    <section id={id}>
      {services.map((service) => (
        <ServiceCard
          key={service.id}
          iconSrc={service.iconSrc}
          title={service.title}
          description={service.description}
          description2={service.description2}
        />
      ))}
    </section>
  );
}
```

**Lengkapnya lihat `MIGRATION_GUIDE.md`**

---

## 🔗 Architecture

```
┌─────────────────────────────────────────────────┐
│                                                 │
│   Company Profile Website (Next.js)             │
│   - Read data from Firestore                    │
│   - Display ke public                           │
│   - Server-side rendering                       │
│                                                 │
└────────────────┬────────────────────────────────┘
                 │
                 │ Firebase SDK
                 │ (Read Only)
                 │
                 ▼
┌─────────────────────────────────────────────────┐
│                                                 │
│         Firebase Firestore Database             │
│         (Single Source of Truth)                │
│                                                 │
└────────────────▲────────────────────────────────┘
                 │
                 │ Firebase SDK
                 │ (Read + Write)
                 │
                 │
┌────────────────┴────────────────────────────────┐
│                                                 │
│   Admin Panel (Next.js - Project Terpisah)     │
│   - CRUD operations                             │
│   - Authenticated admin only                    │
│   - Upload images                               │
│                                                 │
└─────────────────────────────────────────────────┘
```

**Key Points:**
- ✅ Kedua website independent (tidak saling fetch API)
- ✅ Firestore sebagai single source of truth
- ✅ Real-time updates possible
- ✅ Secure dengan Firebase Security Rules

---

## 📚 Available Functions

Semua functions ada di `src/lib/firebase/firestore.ts`:

### Services
- `getServices()` - Get all active services
- `getServiceById(id)` - Get single service

### Projects
- `getProjects()` - Get all active projects
- `getFeaturedProjects(limit?)` - Get featured projects only
- `getProjectsByCategory(category)` - Get projects by category

### Team
- `getTeamMembers()` - Get all active team members

### Testimonials
- `getTestimonials()` - Get all active testimonials

### Blog
- `getBlogPosts(limit?)` - Get published blog posts
- `getBlogPostBySlug(slug)` - Get blog post by slug
- `getBlogPostsByCategory(category)` - Get blogs by category

### FAQ
- `getFAQs()` - Get all active FAQs
- `getFAQsByCategory(category)` - Get FAQs by category

### Pricing
- `getPricingPlans()` - Get all active pricing plans

### Quotes & Stats
- `getQuotes()` - Get all active quotes
- `getStats()` - Get all active stats

### Workflow
- `getWorkflowSteps()` - Get all active workflow steps

### Contact & Social
- `getContactInfo()` - Get all contact info
- `getContactInfoByType(type)` - Get contact by type (email/phone/address/whatsapp)
- `getSocialMedia()` - Get all social media links

---

## 🐛 Troubleshooting

### Error: "Firebase config is undefined"
**Solusi:** Restart dev server setelah buat `.env.local`

### Error: "Missing or insufficient permissions"
**Solusi:** Check Firestore Security Rules di Firebase Console

### Data kosong
**Solusi:** Pastikan data sudah di-input via Admin Panel

---

## 📞 Contact

Kalau ada pertanyaan atau butuh bantuan, hubungi backend team yang setup ini.

---

**Setup by: Backend Team**
**Date: 2025**
