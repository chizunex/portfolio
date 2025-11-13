import Image from 'next/image'
import { Project } from '@/types/Project'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative bg-zinc-800/50 border border-zinc-800 rounded-lg overflow-hidden hover:border-zinc-700 transition-all duration-300">
      {project.imageUrl && (
        <div className="relative w-full h-56 overflow-hidden">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 to-transparent" />
        </div>
      )}
      <div className="p-6">
        <h2 className="text-xl font-medium text-zinc-100 mb-3 group-hover:text-white transition-colors">
          {project.title}
        </h2>
        {project.description && (
          <p className="text-zinc-400 text-sm mb-6 leading-relaxed line-clamp-3">
            {project.description}
          </p>
        )}
        {project.githubURL && (
          <a
            href={project.githubURL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-zinc-300 hover:text-zinc-100 transition-colors group/link"
          >
            <span>View on GitHub</span>
            <svg
              className="w-4 h-4 group-hover/link:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        )}
      </div>
    </div>
  )
}

