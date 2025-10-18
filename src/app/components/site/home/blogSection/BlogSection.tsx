import BlogCard from "@/app/components/common/BlogCard";
import BlogHeader from "./BlogHeader";

interface BlogPost {
  id: number;
  category: string;
  title: string;
  date: string;
  description: string;
  image: string;
}

const posts: BlogPost[] = [
  {
    id: 1,
    category: "Campaign Magic",
    title: "Top SEO Strategies That Still Work In 2025",
    date: "21 Apr 2025",
    description:
      "Learn how to improve rankings with the latest SEO techniques that still bring traffic this year.",
    image: "/images/blog1.jpg",
  },
  {
    id: 2,
    category: "SEO Trends",
    title: "How Google's AI Changes Affect Your Rankings",
    date: "21 Apr 2025",
    description:
      "A detailed breakdown of Google's AI-driven updates and how they impact SEO performance.",
    image: "/images/blog2.jpg",
  },
];

export default function BlogSection() {
  return (
    <section>
      <div className="flex justify-center items-center flex-col">
        <BlogHeader />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-10 md:px-20 lg:px-40 md:py-6 py-4 mb-10 lg:mb-20">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
