export const albumsQuery = `*[_type == "album"] | order(date desc, _createdAt desc){
  _id,
  title,
  date,
  description,
  "images": images[]{
    "url": asset->url,
    "alt": alt,
    "caption": caption
  }
}`

