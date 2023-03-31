import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	// Enable Vue to support Vue components.
	integrations: [mdx(), sitemap(), vue()],
	site: 'https://potato47.github.io',
});
