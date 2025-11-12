// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://cyroth.dev',

integrations: 
    [starlight({
      //tableOfContents: false,
      favicon: '/images/radiation.png',
      logo: {
          src: './src/assets/radiation.png',
      },
      title: 'cyroth.dev',
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/cyroth/'},
        { icon: 'discord', label: 'Discord', href: 'https://discord.gg/VMMWpdsWZE'},
				{ icon: 'open-book',label: 'Blog', href: 'https://cyroth.com' }
      ],
      sidebar: [
          { slug: 'home'},
          { slug: 'links' },
          {
              label: 'Quick Guides',
              autogenerate: { directory: 'guides' },
          },
          {
              label: 'Games',
              collapsed: true,
              autogenerate: { directory: 'games' },
          },
          
          //{ label: 'NASA', link: 'https://www.nasa.gov/' },
      ],
  	}),
    ],
adapter: cloudflare()
});