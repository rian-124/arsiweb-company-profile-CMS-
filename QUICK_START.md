# 🔥 Quick Start - Firebase Integration

**Untuk Team Frontend:** Panduan cepat pakai Firebase di component kalian.

---

## 📦 Setup (Satu kali aja)

```bash
# 1. Pull latest code
git pull

# 2. Restart dev server
npm run dev
```

---

## 🚀 Cara Pakai di Component

### Pattern 1: Server Component (Recommended)

```tsx
// ServiceSection.tsx
import { getServices } from '@/lib/firebase/firestore';

export default async function ServicesSection() {
  // Fetch data
  const services = await getServices();

  return (
    <section>
      {services.map((service) => (
        <ServiceCard key={service.id} {...service} />
      ))}
    </section>
  );
}
```

### Pattern 2: Client Component (Kalau butuh interactivity)

```tsx
'use client';

import { useState, useEffect } from 'react';
import { getServices } from '@/lib/firebase/firestore';
import type { Service } from '@/lib/firebase/collections';

export default function ServicesSection() {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    getServices().then(setServices);
  }, []);

  return (
    <section>
      {services.map((service) => (
        <ServiceCard key={service.id} {...service} />
      ))}
    </section>
  );
}
```

---

## 📚 Available Functions

```tsx
// Services
const services = await getServices();

// Projects
const projects = await getProjects();
const featured = await getFeaturedProjects(6); // top 6

// Team
const team = await getTeamMembers();

// Blog
const blogs = await getBlogPosts(); // all
const latest = await getBlogPosts(3); // latest 3

// Testimonials
const testimonials = await getTestimonials();

// FAQ
const faqs = await getFAQs();

// Pricing
const plans = await getPricingPlans();

// Quotes & Stats
const quotes = await getQuotes();
const stats = await getStats();

// Workflow
const steps = await getWorkflowSteps();

// Contact & Social
const contacts = await getContactInfo();
const socials = await getSocialMedia();
```

---

## 💡 Tips

1. **TypeScript Autocomplete**
   - Semua data types sudah defined
   - Ketik `service.` dan IDE akan suggest property yang available

2. **Empty Data**
   - Kalau Firestore masih kosong, functions return `[]`
   - Aman untuk di-map, ga akan crash

3. **Error Handling**
   - Sudah built-in
   - Kalau error, return `[]`

4. **Conditional Rendering**
   ```tsx
   if (services.length === 0) return null;
   ```

---

## 🐛 Troubleshooting

**Error: "Firebase config undefined"**
→ Restart dev server

**Data ga muncul**
→ Normal, Firestore masih kosong. Tunggu backend team populate data

**Build error**
→ Check import path typo

---

**Lengkapnya baca:** `MIGRATION_GUIDE.md`
