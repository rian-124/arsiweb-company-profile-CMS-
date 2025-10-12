"use client";

import { useState } from "react";
import Image from "next/image";
import IconText from "../components/common/IconText";
import BlogCard from "../components/common/BlogCard";

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
  {
    id: 3,
    category: "Google Secrets",
    title: "Mastering Long-Tail Keywords For Faster Growth",
    date: "17 Apr 2025",
    description:
      "Find out why long-tail keywords still outperform short ones in conversion and ranking speed.",
    image: "/images/blog3.jpg",
  },
  {
    id: 4,
    category: "Writing & Editing",
    title: "SEO Copywriting Tips That Convert Readers",
    date: "21 Apr 2025",
    description:
      "Practical techniques for writing persuasive SEO content that captures both people and algorithms.",
    image: "/images/blog4.jpg",
  },
  {
    id: 5,
    category: "Content Strategy",
    title: "Best SEO Tools Every Marketer Should Use",
    date: "17 Apr 2025",
    description:
      "Here are the top SEO tools that streamline analysis, backlink research, and content creation.",
    image: "/images/blog5.jpg",
  },
  {
    id: 6,
    category: "Case Studies",
    title: "How We Boosted Traffic By 300% in 90 Days",
    date: "29 Apr 2025",
    description:
      "See the exact steps that led to a 300% organic traffic increase for one of our clients.",
    image: "/images/blog6.jpg",
  },
  {
    id: 7,
    category: "Case Studies",
    title: "How We Boosted Traffic By 300% in 90 Days",
    date: "29 Apr 2025",
    description:
      "See the exact steps that led to a 300% organic traffic increase for one of our clients.",
    image: "/images/blog6.jpg",
  },
];

export default function Blog() {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  const totalPages = Math.ceil(posts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <section>
      <div className="bg-[#93928e] text-center font-anta text-3xl p-10">
        <h1>Blog</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pb-20 px-10 md:px-40 md:py-10 py-10">
        {currentPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-3 mt-10 mb-10">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            className="w-8 h-8 flex justify-center items-center border rounded-full hover:bg-blue-500 hover:text-white transition border-blue-500 text-blue-500"
          >
            <Image
              src={"/icons/raquo.svg"}
              alt="raquo"
              width={14}
              height={14}
              className="rotate-180"
            />
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              className={`w-8 h-8 flex justify-center items-center border rounded-full transition border-blue-500 text-blue-500 ${
                currentPage === i + 1
                  ? "bg-blue-500 text-white"
                  : "hover:bg-blue-500 hover:text-white"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            className="w-8 h-8 flex justify-center items-center border rounded-full border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition"
          >
            <Image
              src={"/icons/raquo.svg"}
              alt="raquo"
              width={14}
              height={14}
            />
          </button>
        </div>
      )}
    </section>
  );
}
