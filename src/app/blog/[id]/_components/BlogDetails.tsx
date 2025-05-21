/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import Image from 'next/image';
import { User, CalendarDays, Clock, Bookmark, Share2 } from 'lucide-react';
import { TBlog } from '@/types';
import { format } from 'date-fns';
import { Button } from '@/components/ui/button';

const BlogDetail = ({ Blog }: { Blog: TBlog }) => {
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

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Main Content */}
        <article className="flex-1">
          {/* Title Section */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              {formattedTags.map((tag, index) => (
                <span 
                  key={index}
                  className="text-xs px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {Blog.title}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
              {Blog.description}
            </p>
          </div>

          {/* Cover Image */}
          {Blog.image && (
            <div className="relative w-full aspect-[16/9] mb-8 rounded-xl overflow-hidden shadow-lg">
              <Image
                src={Blog.image}
                alt={Blog.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* Content */}
          <div 
            className="prose dark:prose-invert prose-lg max-w-none
              prose-headings:font-semibold prose-headings:mt-12 prose-headings:mb-6
              prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed
              prose-a:text-blue-600 dark:prose-a:text-blue-400
              prose-blockquote:border-l-4 prose-blockquote:border-gray-300 dark:prose-blockquote:border-gray-600
              prose-blockquote:px-6 prose-blockquote:py-2
              prose-img:rounded-lg prose-img:shadow-md
              prose-ul:list-disc prose-ol:list-decimal prose-li:marker:text-gray-500
              prose-code:bg-gray-100 dark:prose-code:bg-gray-800 prose-code:px-2 prose-code:py-1 prose-code:rounded
              prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:rounded-lg prose-pre:p-4"
            dangerouslySetInnerHTML={{ __html: Blog.content }}
          />

          {/* Footer Actions */}
          <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-800 flex flex-wrap gap-4">
            <Button variant="outline" className="gap-2">
              <Bookmark className="w-4 h-4" />
              Save
            </Button>
            <Button variant="outline" className="gap-2">
              <Share2 className="w-4 h-4" />
              Share
            </Button>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="lg:w-80 space-y-8">
          {/* Author Card */}
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-800">
            <div className="flex items-center gap-4 mb-4">
              <div className="relative w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 overflow-hidden">
                {/* Replace with actual author image if available */}
                <div className="flex items-center justify-center w-full h-full text-gray-400">
                  <User className="w-6 h-6" />
                </div>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">Md. Nazim Uddin</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Author</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Experienced developer and technical writer sharing insights on modern web development.
            </p>
          </div>

          {/* Metadata */}
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-800 space-y-4">
            <div className="flex items-center gap-3">
              <CalendarDays className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Published</p>
                <p className="text-gray-900 dark:text-white">
                  {format(new Date(Blog.createdAt), 'MMMM d, yyyy')}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Reading time</p>
                <p className="text-gray-900 dark:text-white">
                  {Blog.readingTime || '5 min read'}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
              <p className="text-sm text-gray-500 dark:text-gray-400">Last updated</p>
              <p className="text-gray-900 dark:text-white">
                {format(new Date(Blog.updatedAt), 'MMMM d, yyyy')}
              </p>
            </div>
          </div>

          {/* Tags */}
          {formattedTags.length > 0 && (
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-800">
              <h3 className="font-medium text-gray-900 dark:text-white mb-3">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {formattedTags.map((tag, index) => (
                  <span 
                    key={index}
                    className="text-xs px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
};

export default BlogDetail;