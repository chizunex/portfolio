import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'resume',
  title: 'Resume',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Resume',
      readOnly: true,
    }),
    defineField({
      name: 'resumeFile',
      title: 'Resume File (PDF)',
      type: 'file',
      options: {
        accept: '.pdf',
      },
      description: 'Upload your resume as a PDF file',
    }),
    defineField({
      name: 'lastUpdated',
      title: 'Last Updated',
      type: 'date',
      description: 'When was this resume last updated?',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      updated: 'lastUpdated',
    },
    prepare(selection) {
      const {title, updated} = selection as {title?: string; updated?: string}
      return {
        title: title || 'Resume',
        subtitle: updated ? `Updated: ${new Date(updated).toLocaleDateString()}` : 'No date set',
      }
    },
  },
})

