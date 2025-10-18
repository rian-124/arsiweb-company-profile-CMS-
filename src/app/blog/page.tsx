"use client";

import { useState } from "react";
import Image from "next/image";
import BlogCard from "../components/common/BlogCard";
import ReactPaginate from "react-paginate";

interface BlogPost {
  id: number;
  category: string;
  title: string;
  date: string;
  description: string;
  image: string;
}

const posts: BlogPost[] = Array.from({ length: 60 }, (_, i) => ({
  id: i + 1,
  category: "Case Studies",
  title: `How We Boosted Traffic By 300% in 90 Days (${i + 1})`,
  date: "29 Apr 2025",
  description:
    "See the exact steps that led to a 300% organic traffic increase.",
  image: "/images/blog6.jpg",
}));

export default function Blog() {
  const [currentPage, setCurrentPage] = useState(0);
  const postsPerPage = 6;

  const offset = currentPage * postsPerPage;
  const currentPosts = posts.slice(offset, offset + postsPerPage);
  const pageCount = Math.ceil(posts.length / postsPerPage);

  const handlePageClick = (selectedItem: { selected: number }) => {
    setCurrentPage(selectedItem.selected);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section>
      {/* Header */}
      <div className="bg-[#93928e] text-center font-anta text-3xl p-10">
        <h1>Blog</h1>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pb-20 px-10 md:px-20 lg:px-40 md:py-10 py-10">
        {currentPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mb-10">
        <ReactPaginate
          previousLabel={
            <Image
              src="/icons/raquo.svg"
              alt="prev"
              width={14}
              height={14}
              className="rotate-180"
            />
          }
          nextLabel={
            <Image
              src="/icons/raquo.svg"
              alt="next"
              width={14}
              height={14}
            />
          }
          breakLabel="..."
          breakClassName="text-gray-500"
          pageCount={pageCount}
          marginPagesDisplayed={1}
          pageRangeDisplayed={2}
          onPageChange={handlePageClick}
          containerClassName="flex items-center gap-2"
          pageClassName="border border-blue-500 text-blue-500 rounded-full w-8 h-8 flex items-center justify-center hover:bg-blue-500 hover:text-white transition"
          activeClassName="bg-blue-500 text-white"
          previousClassName="border border-blue-500 text-blue-500 rounded-full w-8 h-8 flex items-center justify-center hover:bg-blue-500 hover:text-white transition"
          nextClassName="border border-blue-500 text-blue-500 rounded-full w-8 h-8 flex items-center justify-center hover:bg-blue-500 hover:text-white transition"
          disabledClassName="opacity-50 cursor-not-allowed border-gray-300 text-gray-400"
        />
      </div>
    </section>
  );
}
