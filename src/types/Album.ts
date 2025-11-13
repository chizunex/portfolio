export interface AlbumImage {
  url: string
  alt?: string
  caption?: string
}

export interface Album {
  _id: string
  title: string
  date?: string
  description?: string
  images: AlbumImage[]
}

