'use client';

import { User, CalendarDays, ExternalLink, Github, ArrowLeft } from 'lucide-react';
import { TProject } from '@/types';
import ProjectCardCarousel from '../../_components/ProjectCardCarosule';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { format } from 'date-fns';

const ProjectDetail = ({ project }: { project: TProject }) => {
  const router = useRouter();

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
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
              {project.title}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
              {project.description}
            </p>
            
            <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
              <span className="flex items-center gap-1.5">
                <User className="w-4 h-4" />
                Md. Nazim Uddin
              </span>
              <span className="flex items-center gap-1.5">
                <CalendarDays className="w-4 h-4" />
                {format(new Date(project.createdAt), 'MMMM d, yyyy')}
              </span>
            </div>
          </div>

          {/* Project Showcase */}
          <div className="relative w-full aspect-[16/9] mb-8 rounded-2xl overflow-hidden shadow-2xl">
            <ProjectCardCarousel project={project} />
          </div>

          {/* Project Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {project.liveSiteLink && (
              <Button 
                variant="outline" 
                className="gap-2 hover:-translate-y-1 transition-transform h-12"
                onClick={() => window.open(project.liveSiteLink, '_blank')}
              >
                <ExternalLink className="w-5 h-5" />
                Live Demo
              </Button>
            )}
            {project.clientCodeLink && (
              <Button 
                variant="outline" 
                className="gap-2 hover:-translate-y-1 transition-transform h-12"
                onClick={() => window.open(project.clientCodeLink, '_blank')}
              >
                <Github className="w-5 h-5" />
                Client Code
              </Button>
            )}
            {project.serverCodeLink && (
              <Button 
                variant="outline" 
                className="gap-2 hover:-translate-y-1 transition-transform h-12"
                onClick={() => window.open(project.serverCodeLink, '_blank')}
              >
                <Github className="w-5 h-5" />
                Server Code
              </Button>
            )}
          </div>

          {/* Project Details */}


          {/* Footer Actions */}
          <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-wrap gap-4 justify-center">
            <Button 
              variant="outline" 
              className="gap-2 hover:-translate-y-1 transition-transform"
              size="lg"
              onClick={() => window.open(project.liveSiteLink, '_blank')}
            >
              <ExternalLink className="w-5 h-5" />
              Visit Live
            </Button>
          </div>
        </article>

        {/* Sticky Sidebar */}
        <aside className="lg:w-80 space-y-8 lg:sticky lg:top-20 lg:h-fit">
          {/* Author Card */}
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
              Passionate about creating exceptional digital experiences.
            </p>
            <Button variant="outline" size="sm" className="w-full">
              View profile
            </Button>
          </div>

          {/* Metadata Card */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-800 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300">
                <CalendarDays className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Created</p>
                <p className="font-medium text-gray-900 dark:text-white">
                  {format(new Date(project.createdAt), 'MMMM d, yyyy')}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Last updated</p>
              <p className="font-medium text-gray-900 dark:text-white">
                {format(new Date(project.updatedAt), 'MMMM d, yyyy')}
              </p>
            </div>

            <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Project ID</p>
              <p className="font-mono text-gray-900 dark:text-white">
                #{project._id.slice(-6).toUpperCase()}
              </p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default ProjectDetail;