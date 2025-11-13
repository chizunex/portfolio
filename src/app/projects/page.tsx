import { client } from '@/sanity/client'
import { projectsQuery } from '@/sanity/query'
import { Project } from '@/types/Project'
import ProjectCard from '@/components/ProjectCard'

export const revalidate = 0 // Disable caching - fetch fresh data on every request

export default async function ProjectsPage() {
  let projects: Project[] = []
  
  try {
    projects = await client.fetch<Project[]>(projectsQuery, {}, { cache: 'no-store' })
    console.log('Fetched projects:', JSON.stringify(projects, null, 2))
    console.log('Number of projects:', projects.length)
  } catch (error) {
    console.error('Error fetching projects:', error)
    if (error instanceof Error) {
      console.error('Error message:', error.message)
      console.error('Error stack:', error.stack)
    }
  }

  return (
    <div className="container mx-auto px-6 py-16 max-w-7xl">
      <div className="mb-16">
        <h1 className="text-5xl md:text-6xl font-light text-zinc-100 mb-4 tracking-tight">
          Projects
        </h1>
        <p className="text-zinc-400 text-lg font-light">
          {projects.length === 0 ? 'No projects to display' : `${projects.length} project${projects.length !== 1 ? 's' : ''}`}
        </p>
      </div>
      
      {projects.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-zinc-500 mb-2">No projects found.</p>
          <p className="text-sm text-zinc-600">
            Check server console for debug information
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </div>
      )}
    </div>
  )
}

