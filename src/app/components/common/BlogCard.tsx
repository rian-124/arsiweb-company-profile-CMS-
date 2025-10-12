import Image from "next/image";
import IconText from "./IconText";


interface BlogPost {
  id: number;
  category: string;
  title: string;
  date: string;
  description: string;
  image: string;
}

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <div className="bg-[#e6e5e1] rounded-2xl shadow-sm hover:shadow-md transition p-4 flex flex-col h-full space-y-5">
      <div className="relative w-full h-48 bg-gray-200 rounded-xl overflow-hidden">
        <Image src={post.image} alt={post.title} fill className="object-cover" />
      </div>

      <div className="flex flex-col flex-grow mt-5">
        <div className="flex items-center justify-between text-sm text-black mb-2">
          <IconText
            iconSrc="/icons/winterTherd.svg"
            text={post.category}
            color="text-black"
          />
          <span className="text-gray-500 text-xs">{post.date}</span>
        </div>

        <h3 className="text-xl font-semibold text-gray-800 font-anta mb-2">
          {post.title}
        </h3>

        <p className="text-gray-500 text-sm leading-relaxed flex-grow">
          {post.description}
        </p>

        <button className="mt-auto py-5 text-blue-600 font-medium text-sm hover:underline flex items-center gap-3">
          View Details{" "}
          <span className="p-1 bg-blue-500 rounded-full">
            <Image
              src={"/icons/raquoSecond.svg"}
              alt="raquo"
              width={14}
              height={14}
              className="rotate-[30deg]"
            />
          </span>
        </button>
      </div>
    </div>
  );
}
