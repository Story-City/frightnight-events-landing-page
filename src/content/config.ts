import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const cities = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/cities' }),
  schema: z.object({
    cityName: z.string(),
    eventDate: z.coerce.date(),
    groupTicketPrice: z.string(),
    soloTicketPrice: z.string(),
    ticketSaleLink: z.string(),
    soloTicketLink: z.string().optional(),
    soloTicketTitle: z.string().default('Lone Hunter'),
    soloButtonLabel: z.string().default('Buy Ticket'),
    groupTicketTitle: z.string().default('Team Pass'),
    groupButtonLabel: z.string().default('Buy Tickets'),
    bundleCopy: z.string().optional(),
    locationTime: z.string().default('12PM to 7PM'),
    galleryVideoUrl: z.string().optional(),
  }),
})

const reviews = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/reviews' }),
  schema: z.object({
    comment: z.string(),
    rating: z.number(),
    author: z.string(),
    videoUrl: z.string().optional(),
    socials: z
      .array(
        z.object({
          platform: z.enum(['instagram', 'tiktok', 'youtube', 'twitter']),
          url: z.string(),
          followers: z.string().optional(),
        }),
      )
      .optional(),
  }),
})
export const collections = { cities, reviews }
