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
  },
})
