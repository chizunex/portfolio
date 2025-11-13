export default {
  name: 'album',
  title: 'Album',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Album Title',
      type: 'string',
      description: 'Name of the album',
    },
    {
      name: 'date',
      title: 'Date',
      type: 'date',
      description: 'Date of the album',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Optional description of the album',
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
              description: 'Alternative text for the image',
            },
            {
              name: 'caption',
              title: 'Caption',
              type: 'string',
              description: 'Optional caption for the image',
            },
          ],
        },
      ],
      description: 'Upload images for this album',
    },
  ],
  preview: {
    select: {
      title: 'title',
      date: 'date',
      media: 'images.0',
    },
    prepare({ title, date, media }: { title: string; date: string; media: any }) {
      return {
        title: title || 'Untitled Album',
        subtitle: date ? new Date(date).toLocaleDateString() : 'No date',
        media: media,
      }
    },
  },
  orderings: [
    {
      title: 'Date, Newest',
      name: 'dateDesc',
      by: [{ field: 'date', direction: 'desc' }],
    },
    {
      title: 'Date, Oldest',
      name: 'dateAsc',
      by: [{ field: 'date', direction: 'asc' }],
    },
  ],
}

