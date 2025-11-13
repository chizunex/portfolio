import { client } from '@/sanity/client'
import { albumsQuery } from '@/sanity/albumsQuery'
import { Album } from '@/types/Album'
import AlbumCard from '@/components/AlbumCard'

export const revalidate = 0 // Disable caching - fetch fresh data on every request

export default async function AlbumsPage() {
  let albums: Album[] = []

  try {
    albums = await client.fetch<Album[]>(albumsQuery, {}, { cache: 'no-store' })
    console.log('Fetched albums:', JSON.stringify(albums, null, 2))
    console.log('Number of albums:', albums.length)
  } catch (error) {
    console.error('Error fetching albums:', error)
    if (error instanceof Error) {
      console.error('Error message:', error.message)
      console.error('Error stack:', error.stack)
    }
  }

  return (
    <div className="container mx-auto px-6 py-16 max-w-7xl">
      <div className="mb-16">
        <h1 className="text-5xl md:text-6xl font-light text-zinc-100 mb-4 tracking-tight">
          Albums
        </h1>
        <p className="text-zinc-400 text-lg font-light">
          {albums.length === 0 ? 'No albums yet' : `${albums.length} album${albums.length !== 1 ? 's' : ''}`}
        </p>
      </div>

      {albums.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-zinc-500 mb-2">No albums found.</p>
          <p className="text-sm text-zinc-600">
            Check server console for debug information
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {albums.map((album) => (
            <AlbumCard key={album._id} album={album} />
          ))}
        </div>
      )}
    </div>
  )
}

