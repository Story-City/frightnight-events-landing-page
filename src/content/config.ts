import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const cities = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/cities' }),
  schema: z.object({
    cityName: z.string(),
    eventDate: z.coerce.date(),
    originalTicketPrice: z.string(),
    currentTicketPrice: z.string(),
    ticketSaleLink: z.string(),
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
