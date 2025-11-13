export default {
  name: 'resume',
  title: 'Resume',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Resume',
      readOnly: true,
    },
    {
      name: 'resumeFile',
      title: 'Resume File (PDF)',
      type: 'file',
      options: {
        accept: '.pdf',
      },
      description: 'Upload your resume as a PDF file',
    },
    {
      name: 'lastUpdated',
      title: 'Last Updated',
      type: 'date',
      description: 'When was this resume last updated?',
    },
  ],
  preview: {
    select: {
      title: 'title',
      updated: 'lastUpdated',
    },
    prepare({ title, updated }: { title: string; updated: string }) {
      return {
        title: title || 'Resume',
        subtitle: updated ? `Updated: ${new Date(updated).toLocaleDateString()}` : 'No date set',
      }
    },
  },
}

