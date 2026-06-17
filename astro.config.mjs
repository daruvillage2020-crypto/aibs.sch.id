import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://aibs.sch.id',
  integrations: [tailwind()],
});
