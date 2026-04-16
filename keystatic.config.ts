import { collection, config, fields } from '@keystatic/core'

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    cities: collection({
      label: 'Cities',
      slugField: 'city',
      path: 'src/content/cities/*',
      // Default collection format is YAML-only files (.yaml). Astro uses .md with
      // frontmatter; map that by storing YAML data + markdown body in one .md file.
      format: { data: 'yaml', contentField: 'body' },
      columns: ['eventDate'],
      schema: {
        city: fields.slug({ name: { label: 'City' } }),
        cityName: fields.text({ label: 'City name' }),
        eventDate: fields.date({ label: 'Date of event' }),
        originalTicketPrice: fields.text({ label: 'Original ticket price' }),
        currentTicketPrice: fields.text({ label: 'Current ticket price' }),
        ticketSaleLink: fields.url({ label: 'Ticket sale link' }),
        locationTime: fields.text({ label: 'Location time' }),
        body: fields.emptyContent({ extension: 'md' }),
      },
    }),
    reviews: collection({
      label: 'Reviews',
      slugField: 'reviewSlug',
      path: 'src/content/reviews/*',
      format: { data: 'yaml', contentField: 'body' },
      schema: {
        reviewSlug: fields.slug({ name: { label: 'Review slug' } }),
        comment: fields.text({ label: 'Comment' }),
        rating: fields.number({ label: 'Rating', defaultValue: 5, validation: { min: 1, max: 5 } }),
        author: fields.text({ label: 'Author' }),
        body: fields.emptyContent({ extension: 'md' }),
      },
      columns: ['comment', 'rating', 'author'],
    }),
  },
})
