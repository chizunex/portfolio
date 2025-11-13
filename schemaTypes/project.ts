// schemas/project.ts
export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'githubURL',
      title: 'GitHub URL',
      type: 'url',
    },
    {
      name: 'projectImage',
      title: 'Project Image',
      type: 'image',
      options: {
        hotspot: true, // Allows you to crop the image nicely
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text', // Simple text block
    },
  ],
}
