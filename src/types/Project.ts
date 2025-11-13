export interface Project {
  _id: string
  title: string
  slug?: {
    current: string
  }
  githubURL?: string
  description?: string
  imageUrl?: string
}

