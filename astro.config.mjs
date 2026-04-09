import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import markdoc from '@astrojs/markdoc'
import keystatic from '@keystatic/astro'
import tailwindcss from '@tailwindcss/vite'

const SKIP_KEYSTATIC = process.env.NODE_ENV === 'production'

// https://astro.build/config
export default defineConfig({
  integrations: [react(), markdoc(), SKIP_KEYSTATIC ? null : keystatic()],
  build: {
    // Inline page CSS so Lighthouse does not flag a blocking `/_astro/*.css` request.
    inlineStylesheets: 'always',
  },
  vite: {
    plugins: [tailwindcss()],
  },
})
