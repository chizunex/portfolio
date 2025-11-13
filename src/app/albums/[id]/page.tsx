import { client } from '@/sanity/client'
import { albumsQuery } from '@/sanity/albumsQuery'
import { Album } from '@/types/Album'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

interface AlbumPageProps {
  params: {
    id: string
  }
}

export const revalidate = 0 // Disable caching - fetch fresh data on every request

export default async function AlbumPage({ params }: AlbumPageProps) {
  const albums: Album[] = await client.fetch<Album[]>(albumsQuery, {}, { cache: 'no-store' })
  const album = albums.find((a) => a._id === params.id)

  if (!album) {
    notFound()
  }

  return (
    <div className="container mx-auto px-6 py-16 max-w-6xl">
      <Link
        href="/albums"
        className="inline-flex items-center gap-2 text-zinc-400 hover:text-zinc-100 transition-colors mb-8 text-sm"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Back to Albums
      </Link>

      <div className="mb-12">
        <h1 className="text-5xl md:text-6xl font-light text-zinc-100 mb-4 tracking-tight">
          {album.title}
        </h1>
        {album.date && (
          <p className="text-zinc-400 text-lg font-light mb-4">
            {new Date(album.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        )}
        {album.description && (
          <p className="text-zinc-400 text-lg font-light leading-relaxed max-w-3xl">
            {album.description}
          </p>
        )}
      </div>

      {album.images.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-zinc-500">No images in this album.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {album.images.map((image, index) => (
            <div
              key={index}
              className="bg-zinc-800/50 border border-zinc-800 rounded-lg overflow-hidden"
            >
              <div className="relative w-full aspect-square">
                <Image
                  src={image.url}
                  alt={image.alt || `${album.title} - Image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
              {image.caption && (
                <div className="p-4">
                  <p className="text-zinc-400 text-sm">{image.caption}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

