import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const cities = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/cities' }),
  schema: z.object({
    city: z.string(),
    eventDate: z.coerce.date(),
    originalTicketPrice: z.string(),
    currentTicketPrice: z.string(),
    ticketSaleLink: z.string(),
  }),
})

export const collections = { cities }
