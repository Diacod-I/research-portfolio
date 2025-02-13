import { defineField, defineType } from 'sanity';

export default defineField({
	name: 'photos',
	title: 'Image Gallery',
	type: 'document',
	description:
		'My photo gallery including images, captions, and alternative text.',
	fields: [
		defineField({
			name: 'photo',
			title: 'Photo',
			type: 'image',
			options: {
				hotspot: true,
			},
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'alt',
			title: 'Alternative Text',
			type: 'string',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'caption',
			title: 'Caption',
			type: 'string',
			validation: (Rule) => Rule.required(),
		}),
	],
});

/*
    type: 'array',
    of: [
        {
            type: 'object',
            name: 'galleryImage',
            fields: [
                {
                    name: 'image',
                    title: 'Image',
                    type: 'image',
                    options: {
                        hotspot: true,
                    },
                    validation: (Rule) => Rule.required(),
                    fields: [
                        {
                            name: 'alt',
                            type: 'string',
                            title: 'Alternative Text',
                            validation: (Rule) => Rule.required(),
                        },
                    ],
                },
                {
                    name: 'caption',
                    title: 'Caption',
                    type: 'string',
                    validation: (Rule) => Rule.required(),
                },
            ],
        },
    ],
})
*/
