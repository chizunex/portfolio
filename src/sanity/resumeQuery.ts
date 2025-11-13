export const resumeQuery = `*[_type == "resume" && defined(resumeFile.asset)][0]{
  _id,
  "resumeUrl": resumeFile.asset->url,
  "fileName": resumeFile.asset->originalFilename,
  "fileExtension": resumeFile.asset->extension,
  lastUpdated
}`

