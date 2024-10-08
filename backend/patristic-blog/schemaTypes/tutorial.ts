import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'tutorial',
    title: 'Tutorial',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        }),
        defineField({
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [{ type: 'block' }],
        }),
        defineField({
            name: 'difficulty',
            title: 'Difficulty',
            type: 'string',
            options: {
                list: ['Beginner', 'Intermediate', 'Advanced'],
            },
        }),
    ],
})