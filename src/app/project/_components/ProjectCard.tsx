"use client";

import { useRouter } from "next/navigation";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { User, CalendarDays, ExternalLink, ArrowRight } from "lucide-react";
import { TProject } from "@/types";
import ProjectCardCarousel from "./ProjectCardCarosule";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const ProjectCard = ({ project }: { project: TProject }) => {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/project/${project._id}`);
  };

  const handleLinkClick = (e: React.MouseEvent, url: string) => {
    e.stopPropagation();
    window.open(url, '_blank');
  };

  return (
    <div className="group relative h-full">
      {/* Subtle glow effect - will animate smoothly */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-teal-500/10 to-blue-500/10 opacity-0 
          transition-opacity duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] 
          group-hover:opacity-100" />
      
      <Card
        className={cn(
          "relative h-full overflow-hidden rounded-xl border border-gray-200/60 dark:border-gray-800/60",
          "bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm",
          "shadow-sm hover:shadow-lg",
          "cursor-pointer group-hover:border-teal-300/30 dark:group-hover:border-teal-500/30",
          "transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]",
          "transform-gpu", // Enable GPU acceleration
          "group-hover:-translate-y-1" // Gentle lift effect
        )}
        onClick={handleCardClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            handleCardClick();
          }
        }}
      >
        {/* Carousel with smooth zoom effect */}
        <div className="w-full aspect-video relative overflow-hidden">
          <div className="absolute inset-0 transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-105">
            <ProjectCardCarousel project={project} />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        </div>

        <CardContent className="p-4 space-y-3">
          {/* Metadata with smooth slide-up */}
          <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 
              transition-transform duration-500 ease-out group-hover:-translate-y-0.5">
            <span className="flex items-center gap-1.5 font-medium">
              <User className="w-3.5 h-3.5 transition-transform duration-300 group-hover:scale-110" />
              Md. Nazim Uddin
            </span>
            <span className="flex items-center gap-1.5">
              <CalendarDays className="w-3.5 h-3.5 transition-transform duration-300 group-hover:scale-110" />
              {new Date(project.createdAt).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
              })}
            </span>
          </div>

          {/* Title with color transition */}
          <h2 className="text-lg font-bold text-gray-900 dark:text-white 
              transition-colors duration-500 ease-in-out 
              group-hover:text-teal-600 dark:group-hover:text-teal-400 line-clamp-2">
            {project.title}
          </h2>

          {/* Description with smooth line expansion */}
          <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2 
              transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] 
              group-hover:line-clamp-3">
            {project.description.split(' ').slice(0,4).join(' ')}
          </p>

          {/* Action buttons with staggered animations */}
          <div className="flex flex-col sm:flex-row gap-2 pt-2">
            {project.liveSiteLink && (
              <Button
                variant="outline"
                size="sm"
                className="w-full flex iteblanenter gap-2 border-teal-600 text-teal-600 dark:border-teal-400 dark:text-teal-400 
                  hover:bg-teal-50 dark:hover:bg-teal-900/30
                  transition-all duration-300 ease-out 
                  translate-y-0 group-hover:translate-y-[-2px]"
                onClick={(e) => handleLinkClick(e, project.liveSiteLink)}
              >
                <ExternalLink className="w-4 h-4 transition-transform duration-300 " />
                <span className="transition-all duration-300 group-hover:font-medium">Live Demo</span>
              </Button>
            )}
           
          </div>
        </CardContent>

        {/* Footer with smooth background transition */}
        <CardFooter className="p-4 pt-0 flex items-center justify-between border-t border-gray-100 dark:border-gray-800/50 
            transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] 
            group-hover:bg-gray-50/50 dark:group-hover:bg-gray-800/30">
          <span className="text-xs text-gray-500 dark:text-gray-400 transition-all duration-300 group-hover:scale-[1.01]">
            Updated: {new Date(project.updatedAt).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric'
            })}
          </span>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1 rounded 
                transition-all duration-300 group-hover:scale-105">
              #{project._id.slice(-4).toUpperCase()}
            </span>
            <ArrowRight className="w-4 h-4 text-gray-400 dark:text-gray-500 
                transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] 
                group-hover:translate-x-1" />
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProjectCard;