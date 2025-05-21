"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarDays, Clock, ArrowRight } from "lucide-react";
import { TBlog } from "@/types";
import Image from "next/image";
import { generateTextFromHTML } from "../_utils/generateHtml";
import { cn } from "@/lib/utils";

const BlogCard = ({ Blog }: { Blog: TBlog }) => {
  const contentPreview = generateTextFromHTML(Blog.content)
    .split(/\s+/)
    .slice(0, 20)
    .join(" ") + "...";

  return (
    <Link 
      href={`/blog/${Blog._id}`} 
      className="group relative block h-full overflow-hidden rounded-3xl transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
    >
      {/* Glass morphism effect container */}
      <div className="absolute inset-0 rounded-3xl bg-white/80 backdrop-blur-lg dark:bg-gray-900/80" />
      
      {/* Main card */}
      <Card className="relative h-full overflow-hidden rounded-3xl border border-gray-200/50 bg-transparent shadow-lg transition-all duration-300 group-hover:shadow-xl dark:border-gray-700/50">
        {/* Image with parallax effect */}
        <div className="relative h-[250px] w-full overflow-hidden">
          <Image
            src={Blog?.image || "/default-blog.jpg"}
            alt={Blog.title}
            fill
            priority={false}
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,...[your base64 placeholder]"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          
          {/* Floating tags */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            {Blog.tags?.slice(0, 2).map((tag, index) => (
              <span 
                key={index}
                className={cn(
                  "rounded-full px-3 py-1 text-xs font-medium backdrop-blur-sm",
                  index % 2 === 0 
                    ? "bg-blue-500/10 text-blue-600 dark:text-blue-300" 
                    : "bg-emerald-500/10 text-emerald-600 dark:text-emerald-300"
                )}
              >
                {typeof tag === 'string' ? tag : 'Tag'}
              </span>
            ))}
          </div>
        </div>

        {/* Content */}
        <CardContent className="p-6">
          {/* Date and reading time */}
          <div className="mb-3 flex items-center gap-4 text-xs font-medium text-gray-500 dark:text-gray-400">
            <span className="flex items-center gap-1.5">
              <CalendarDays className="h-3.5 w-3.5" />
              {new Date(Blog.createdAt).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              {Blog.readingTime || "5 min read"}
            </span>
          </div>

          {/* Title with hover effect */}
          <h2 className="mb-3 text-xl font-bold tracking-tight text-gray-900 transition-colors duration-300 group-hover:text-primary-600 line-clamp-2 dark:text-white dark:group-hover:text-primary-400">
            {Blog.title}
          </h2>

          {/* Preview text with subtle animation */}
          <p className="mb-5 text-gray-600 line-clamp-3 transition-all duration-300 group-hover:translate-y-1 dark:text-gray-300">
            {contentPreview.split(' ').slice(0,4).join(' ')}...
          </p>

          {/* Animated read more link */}
          <div className="flex items-center">
            <span className="text-sm font-semibold text-primary-600 transition-all duration-300 group-hover:underline dark:text-primary-400">
              Continue reading
            </span>
            <ArrowRight className="ml-2 h-4 w-4 text-primary-600 transition-transform duration-300 group-hover:translate-x-1 dark:text-primary-400" />
          </div>
        </CardContent>

        {/* Hover effect border */}
        <div className="absolute inset-0 rounded-3xl border-2 border-transparent transition-all duration-500 group-hover:border-primary-500/30" />
      </Card>

      {/* Floating shadow effect */}
      <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-primary-100 to-purple-100 opacity-0 transition-opacity duration-500 group-hover:opacity-30 dark:from-primary-900/30 dark:to-purple-900/30" />
    </Link>
  );
};

export default BlogCard;