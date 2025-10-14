# 🔥 Firebase Migration Guide

Panduan lengkap untuk team frontend migrate dari hardcoded data ke Firebase Firestore.

## 📋 Table of Contents
- [Setup Awal](#setup-awal)
- [Cara Migrate Component](#cara-migrate-component)
- [Contoh Real: ServiceSection](#contoh-real-servicesection)
- [Pattern untuk Server Components](#pattern-untuk-server-components)
- [Pattern untuk Client Components](#pattern-untuk-client-components)
- [Troubleshooting](#troubleshooting)

---

## ⚙️ Setup Awal

### 1. Environment Variables
Pastikan file `.env.local` sudah ada di root project (sudah dibuat oleh backend team):
```bash
# Cek file .env.local
ls -la .env.local
```

### 2. Restart Dev Server
Setelah `.env.local` ada, **WAJIB restart** dev server:
```bash
# Stop server (Ctrl+C)
# Lalu jalankan lagi
npm run dev
```

---

## 🔄 Cara Migrate Component

### Step-by-step:

#### **BEFORE (Hardcoded)**
```tsx
// ServiceSection.tsx
export default function ServicesSection() {
  return (
    <section>
      <ServiceCard
        iconSrc="/icons/wordpress.svg"
        title="Website Wordpress"
        description="Strategic Planning..."
      />
      <ServiceCard
        iconSrc="/icons/wCustome.svg"
        title="Website Custom"
        description="User-First Designs..."
      />
      {/* dst... */}
    </section>
  );
}
```

#### **AFTER (Dari Firebase)**
```tsx
// ServiceSection.tsx
import { getServices } from '@/lib/firebase/firestore';

export default async function ServicesSection() {
  // Fetch data dari Firestore
  const services = await getServices();

  return (
    <section>
      {/* Loop data dari Firebase */}
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

### ✨ Yang Berubah:
1. ✅ Import function `getServices` dari firestore helper
2. ✅ Component jadi `async` (karena fetch data)
3. ✅ Replace hardcoded JSX dengan `.map()` untuk loop data
4. ✅ Jangan lupa `key={service.id}` di loop!

---

## 📝 Contoh Real: ServiceSection

### File: `src/app/components/site/home/serviceSection/ServiceSection.tsx`

**BEFORE:**
```tsx
import IconText from "@/app/components/common/IconText";
import ServiceCard from "@/app/components/common/ServiceCard";

export default function ServicesSection({id} : {id: string}) {
  return (
    <section id={id} className="md:px-40 md:py-40 px-10 py-40">
      <IconText
        iconSrc="/icons/winterSecond.svg"
        color="text-sky-500"
        text="LAYANAN KAMI"
      />
      <div className="text-black font-anta md:text-4xl text-3xl">
        <h1 className="flex flex-col gap-2">
          Layanan Kami Yang
          <span className="text-sky-500 block">Menakjubkan</span>
        </h1>
      </div>

      <div className="md:flex md:flex-row flex flex-col text-black py-10 text-xs">
        <ServiceCard
          iconSrc="/icons/wordpress.svg"
          title="Website Wordpress"
          description="Strategic Planning to Validate &"
          description2="Launch Product Ideas Fast"
        />
        <ServiceCard
          iconSrc="/icons/wCustome.svg"
          title="Website Custome"
          description="User-First Designs to Boost and"
          description2="Conversion & Delight Users"
        />
        <ServiceCard
          iconSrc="/icons/seo.svg"
          title="SEO Spesialist"
          description="Scalable Apps Built Using Modern"
          description2="Tech Stacks"
        />
        <ServiceCard
          iconSrc="/icons/pk.svg"
          title="Paket Custome"
          description="From Code to Cloud — We Ensure"
          description2="Smooth Delivery"
          hasBorder={false}
        />
      </div>
    </section>
  );
}
```

**AFTER (Dengan Firebase):**
```tsx
import IconText from "@/app/components/common/IconText";
import ServiceCard from "@/app/components/common/ServiceCard";
// 1. Import helper function
import { getServices } from "@/lib/firebase/firestore";

// 2. Jadikan async function
export default async function ServicesSection({id} : {id: string}) {
  // 3. Fetch data dari Firestore
  const services = await getServices();

  return (
    <section id={id} className="md:px-40 md:py-40 px-10 py-40">
      <IconText
        iconSrc="/icons/winterSecond.svg"
        color="text-sky-500"
        text="LAYANAN KAMI"
      />
      <div className="text-black font-anta md:text-4xl text-3xl">
        <h1 className="flex flex-col gap-2">
          Layanan Kami Yang
          <span className="text-sky-500 block">Menakjubkan</span>
        </h1>
      </div>

      {/* 4. Loop data dari Firebase */}
      <div className="md:flex md:flex-row flex flex-col text-black py-10 text-xs">
        {services.map((service, index) => (
          <ServiceCard
            key={service.id}
            iconSrc={service.iconSrc}
            title={service.title}
            description={service.description}
            description2={service.description2}
            // Logic untuk hasBorder: false di item terakhir
            hasBorder={index !== services.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
```

**Penjelasan:**
- ✅ Fetch services pakai `getServices()` - otomatis dapat data yang `isActive: true` dan sudah sorted
- ✅ Loop pakai `.map()` - jadi dynamic, ga peduli datanya 4 atau 100 service
- ✅ Logic `hasBorder` tetap jalan - item terakhir ga ada border

---

## 🖥️ Pattern untuk Server Components

Next.js 15 App Router defaultnya **Server Components**. Cocok untuk data fetching!

```tsx
// ✅ RECOMMENDED untuk static/server-rendered pages
import { getServices } from '@/lib/firebase/firestore';

export default async function MySection() {
  // Fetch di server-side (lebih cepat, SEO-friendly)
  const data = await getServices();

  return (
    <div>
      {data.map(item => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  );
}
```

**Keuntungan:**
- ⚡ Faster initial load
- 🔍 SEO-friendly (data sudah ada di HTML)
- 🎯 Tidak butuh loading state
- 💾 Tidak perlu useState/useEffect

---

## 🎨 Pattern untuk Client Components

Kalau component perlu interactivity (useState, useEffect, onClick, dll):

```tsx
'use client'; // Tandai sebagai client component

import { useState, useEffect } from 'react';
import { getServices } from '@/lib/firebase/firestore';
import type { Service } from '@/lib/firebase/collections';

export default function MyInteractiveSection() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getServices();
        setServices(data);
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {services.map(item => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  );
}
```

**Kapan pakai Client Component?**
- ✅ Butuh useState, useEffect
- ✅ Butuh event handlers (onClick, onChange, dll)
- ✅ Butuh browser APIs (localStorage, window, dll)
- ✅ Butuh interactivity/animations

---

## 📚 Mapping Section → Function

Ini mapping section mana pakai function apa:

| Section | File | Function | Type |
|---------|------|----------|------|
| **Services** | `ServiceSection.tsx` | `getServices()` | `Service[]` |
| **Projects** | `ProjectSection.tsx` | `getProjects()` atau `getFeaturedProjects()` | `Project[]` |
| **Team** | `TeamSection.tsx` | `getTeamMembers()` | `TeamMember[]` |
| **Testimonials** | `TestimonialSection.tsx` | `getTestimonials()` | `Testimonial[]` |
| **Blog** | `BlogSection.tsx` | `getBlogPosts(3)` | `BlogPost[]` |
| **FAQ** | `FaqSection.tsx` | `getFAQs()` | `FAQ[]` |
| **Pricing** | `PricingSection.tsx` | `getPricingPlans()` | `PricingPlan[]` |
| **Quotes** | `QuoteStatsSection.tsx` | `getQuotes()` | `Quote[]` |
| **Stats** | `QuoteStatsSection.tsx` | `getStats()` | `Stat[]` |
| **Workflow** | `WorkflowSection.tsx` | `getWorkflowSteps()` | `WorkflowStep[]` |
| **Contact** | `Header.tsx` / `Footer.tsx` | `getContactInfo()` | `ContactInfo[]` |
| **Social** | `Header.tsx` / `Footer.tsx` | `getSocialMedia()` | `SocialMedia[]` |

---

## 🎯 Tips & Best Practices

### 1. **TypeScript Autocomplete**
Semua function sudah fully typed. IDE kalian akan suggest property apa aja yang ada:

```tsx
const services = await getServices();
// Kalian ketik services[0]. IDE akan suggest:
// - id
// - iconSrc
// - title
// - description
// - description2
// - order
// - isActive
// - createdAt
// - updatedAt
```

### 2. **Error Handling Sudah Built-in**
Semua function udah handle error. Kalau gagal fetch, return array kosong `[]`:

```tsx
const services = await getServices();
// Kalau error, services = []
// Jadi safe untuk .map() - ga bakal crash
```

### 3. **Filter & Sorting Otomatis**
Semua function udah auto filter `isActive: true` dan sorted by `order`:

```tsx
// Ga perlu manual filter/sort lagi!
const services = await getServices(); // Udah filtered & sorted
```

### 4. **Optional Parameters**
Beberapa function punya parameter optional:

```tsx
// Get semua blog posts
const allBlogs = await getBlogPosts();

// Get 3 blog posts terbaru aja
const latestBlogs = await getBlogPosts(3);
```

### 5. **Conditional Rendering**
Kalau data kosong, bisa hide section:

```tsx
export default async function BlogSection() {
  const blogs = await getBlogPosts(3);

  // Kalau ga ada blog, jangan render section
  if (blogs.length === 0) {
    return null;
  }

  return (
    <section>
      {blogs.map(blog => (
        <BlogCard key={blog.id} {...blog} />
      ))}
    </section>
  );
}
```

---

## 🐛 Troubleshooting

### ❌ Error: "process.env.NEXT_PUBLIC_FIREBASE_API_KEY is undefined"

**Solusi:**
1. Pastikan file `.env.local` ada di root project
2. Restart dev server (`npm run dev`)
3. Cek typo di variable names

---

### ❌ Error: "await is a reserved word"

**Solusi:**
Pastikan function pakai `async`:

```tsx
// ❌ SALAH
export default function MyComponent() {
  const data = await getServices(); // Error!
}

// ✅ BENAR
export default async function MyComponent() {
  const data = await getServices(); // OK!
}
```

---

### ❌ Error: "You're importing a component that needs useState. It only works in a Client Component"

**Solusi:**
Tambahkan `'use client'` di paling atas file:

```tsx
'use client'; // Tambahkan ini!

import { useState } from 'react';

export default function MyComponent() {
  const [state, setState] = useState();
  // ...
}
```

---

### ❌ Data kosong terus / Data ga muncul

**Solusi:**
1. Cek Firestore Database - apakah data sudah di-input oleh admin panel?
2. Cek field `isActive` - pastikan `true`
3. Cek console browser - ada error ga?
4. Test manual di console:

```tsx
// Di component, tambahkan:
console.log('Services:', services);
```

---

### ❌ Build error: "Error: Unsupported Server Component type: undefined"

**Solusi:**
Pastikan semua import path benar. Cek typo di path:

```tsx
// ✅ BENAR
import { getServices } from '@/lib/firebase/firestore';

// ❌ SALAH (typo)
import { getServices } from '@/lib/firebase/fireStore'; // Capital S
```

---

## 📞 Butuh Bantuan?

Kalau ada kendala atau butuh diskusi:
1. Check file `collections.ts` untuk lihat structure data
2. Check file `firestore.ts` untuk lihat function apa aja yang available
3. Tanya ke backend team (yang setup Firebase ini)

---

## 🚀 Next Steps

Setelah migrate semua component:
1. Test di browser - pastikan data muncul
2. Test di build (`npm run build`) - pastikan ga ada error
3. Koordinasi dengan backend team untuk populate data di Firestore via Admin Panel

---

**Happy Coding! 🎉**
