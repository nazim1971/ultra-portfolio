/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import Image from 'next/image';
import { User, CalendarDays, Clock, Bookmark, Share2, MessageSquare, ArrowLeft } from 'lucide-react';
import { TBlog } from '@/types';
import { format } from 'date-fns';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';

const BlogDetail = ({ Blog }: { Blog: TBlog }) => {
  const router = useRouter();

  const formatTags = (tags: any) => {
    if (!tags) return [];
    if (Array.isArray(tags)) return tags;
    if (typeof tags === 'string') {
      if (tags.includes(',')) return tags.split(',').map(t => t.trim());
      if (tags.includes(' ')) return tags.split(' ').map(t => t.trim());
      return [tags];
    }
    return [];
  };

  const formattedTags = formatTags(Blog.tags);
  const readingTime = Blog.readingTime || '5 min read';

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Back Button (Sticky) */}
      <div className="fixed top-6 left-6 z-20">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-all"
          onClick={() => router.back()}
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 relative">
        {/* Main Content */}
        <article className="flex-1">
          {/* Title Section */}
          <div className="mb-8 animate-fade-in">
            <div className="flex flex-wrap gap-2 mb-4">
              {formattedTags.map((tag, index) => (
                <span 
                  key={index}
                  className={cn(
                    "text-xs px-3 py-1 rounded-full font-medium",
                    index % 3 === 0 ? "bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200" :
                    index % 2 === 0 ? "bg-teal-100 text-teal-800 dark:bg-teal-900/50 dark:text-teal-200" :
                    "bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-200"
                  )}
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
              {Blog.title}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
              {Blog.description}
            </p>
            
            <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
              <span className="flex items-center gap-1.5">
                <User className="w-4 h-4" />
                Md. Nazim Uddin
              </span>
              <span className="flex items-center gap-1.5">
                <CalendarDays className="w-4 h-4" />
                {format(new Date(Blog.createdAt), 'MMMM d, yyyy')}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {readingTime}
              </span>
            </div>
          </div>

          {/* Cover Image with Parallax Effect */}
          {Blog.image && (
            <div className="relative w-full aspect-[16/9] mb-8 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={Blog.image}
                alt={Blog.title}
                fill
                className="object-cover hover:scale-105 transition-transform duration-700 ease-in-out"
                priority
                quality={90}
              />
            </div>
          )}

          {/* Content with Smooth Typography */}
          <div 
            className="prose dark:prose-invert prose-lg max-w-none
              prose-headings:font-bold prose-headings:mt-16 prose-headings:mb-6 prose-headings:scroll-mt-20
              prose-h2:text-2xl prose-h3:text-xl
              prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6
              prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:font-medium prose-a:underline-offset-4
              prose-blockquote:not-italic prose-blockquote:border-l-4 prose-blockquote:border-blue-500 
              prose-blockquote:bg-blue-50 dark:prose-blockquote:bg-blue-900/20 prose-blockquote:px-6 prose-blockquote:py-4
              prose-img:rounded-xl prose-img:shadow-lg prose-img:mx-auto prose-img:border prose-img:border-gray-200 dark:prose-img:border-gray-700
              prose-ul:list-disc prose-ol:list-decimal prose-li:marker:text-gray-500 prose-li:mb-2
              prose-code:font-mono prose-code:bg-gray-100 dark:prose-code:bg-gray-800 prose-code:px-2 prose-code:py-1 prose-code:rounded
              prose-pre:bg-gradient-to-br prose-pre:from-gray-900 prose-pre:to-gray-800 prose-pre:text-gray-100 
              prose-pre:rounded-xl prose-pre:p-4 prose-pre:shadow-lg prose-pre:border prose-pre:border-gray-800
              prose-table:border-gray-200 dark:prose-table:border-gray-700 prose-th:bg-gray-100 dark:prose-th:bg-gray-800 prose-th:px-4 prose-th:py-2
              prose-td:px-4 prose-td:py-2"
            dangerouslySetInnerHTML={{ __html: Blog.content }}
          />

          {/* Footer Actions with Floating Effect */}
          <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-wrap gap-4 justify-center">
            <Button 
              variant="outline" 
              className="gap-2 hover:-translate-y-1 transition-transform"
              size="lg"
            >
              <Bookmark className="w-5 h-5" />
              Save for later
            </Button>
            <Button 
              variant="outline" 
              className="gap-2 hover:-translate-y-1 transition-transform"
              size="lg"
            >
              <Share2 className="w-5 h-5" />
              Share article
            </Button>
            <Button 
              variant="outline" 
              className="gap-2 hover:-translate-y-1 transition-transform"
              size="lg"
            >
              <MessageSquare className="w-5 h-5" />
              Leave comment
            </Button>
          </div>
        </article>

        {/* Sticky Sidebar */}
        <aside className="lg:w-80 space-y-8 lg:sticky lg:top-20 lg:h-fit">
          {/* Author Card with Hover Effect */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-800 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-4">
              <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-teal-400 overflow-hidden shadow-md">
                <div className="flex items-center justify-center w-full h-full text-white">
                  <User className="w-6 h-6" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white">Md. Nazim Uddin</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Senior Developer</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Passionate about creating exceptional digital experiences. Follow me for more insights on modern web development.
            </p>
            <Button onClick={() => router.push('/')}  variant="outline" size="sm" className="w-full">
              View profile
            </Button>
          </div>

          {/* Table of Contents (Placeholder) */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-800">
            <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-4">Table of Contents</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <a href="#introduction" className="flex items-center gap-2">
                  <span className="text-blue-500">•</span> Introduction
                </a>
              </li>
              <li className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <a href="#getting-started" className="flex items-center gap-2">
                  <span className="text-blue-500">•</span> Getting Started
                </a>
              </li>
              <li className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <a href="#implementation" className="flex items-center gap-2">
                  <span className="text-blue-500">•</span> Implementation
                </a>
              </li>
              <li className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <a href="#conclusion" className="flex items-center gap-2">
                  <span className="text-blue-500">•</span> Conclusion
                </a>
              </li>
            </ul>
          </div>

          {/* Metadata Card */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-800 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300">
                <CalendarDays className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Published on</p>
                <p className="font-medium text-gray-900 dark:text-white">
                  {format(new Date(Blog.createdAt), 'MMMM d, yyyy')}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-teal-100 dark:bg-teal-900/50 text-teal-600 dark:text-teal-300">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Reading time</p>
                <p className="font-medium text-gray-900 dark:text-white">
                  {readingTime}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Last updated</p>
              <p className="font-medium text-gray-900 dark:text-white">
                {format(new Date(Blog.updatedAt), 'MMMM d, yyyy')}
              </p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default BlogDetail;