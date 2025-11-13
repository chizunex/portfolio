import { createClient } from 'next-sanity'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET

if (!projectId || !dataset) {
  console.error('Missing Sanity environment variables:', {
    projectId: projectId ? '✓' : '✗',
    dataset: dataset ? '✓' : '✗',
  })
}

// Validate and set API version - must be '1' or date in 'YYYY-MM-DD' format
const apiVersionEnv = process.env.NEXT_PUBLIC_SANITY_API_VERSION
let apiVersion = '2024-01-01' // Default fallback

if (apiVersionEnv) {
  // Check if it's '1' or a valid date format
  if (apiVersionEnv === '1' || /^\d{4}-\d{2}-\d{2}$/.test(apiVersionEnv)) {
    apiVersion = apiVersionEnv
  } else {
    console.warn(`Invalid API version format: ${apiVersionEnv}. Using default: ${apiVersion}`)
  }
}

export const client = createClient({
  projectId: projectId!,
  dataset: dataset!,
  apiVersion: apiVersion,
  useCdn: false,
})

