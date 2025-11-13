import Image from 'next/image'
import Link from 'next/link'
import { Album } from '@/types/Album'

interface AlbumCardProps {
  album: Album
}

export default function AlbumCard({ album }: AlbumCardProps) {
  const firstImage = album.images[0]
  const imageCount = album.images.length

  return (
    <Link href={`/albums/${album._id}`} className="group">
      <div className="bg-zinc-800/50 border border-zinc-800 rounded-lg overflow-hidden hover:border-zinc-700 transition-all duration-300">
        {firstImage && (
          <div className="relative w-full h-64 overflow-hidden">
            <Image
              src={firstImage.url}
              alt={firstImage.alt || album.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent" />
            {imageCount > 1 && (
              <div className="absolute top-4 right-4 bg-zinc-900/80 backdrop-blur-sm px-3 py-1 rounded-md text-xs text-zinc-100">
                {imageCount} photos
              </div>
            )}
          </div>
        )}
        <div className="p-6">
          <h2 className="text-xl font-medium text-zinc-100 mb-2 group-hover:text-white transition-colors">
            {album.title}
          </h2>
          {album.date && (
            <p className="text-zinc-400 text-sm mb-2">
              {new Date(album.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          )}
          {album.description && (
            <p className="text-zinc-400 text-sm line-clamp-2 leading-relaxed">
              {album.description}
            </p>
          )}
        </div>
      </div>
    </Link>
  )
}

