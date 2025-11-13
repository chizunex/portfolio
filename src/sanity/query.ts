export const projectsQuery = `*[_type == "project"] | order(_createdAt desc){
  _id,
  title,
  slug,
  githubURL,
  description,
  "imageUrl": projectImage.asset->url
}`

