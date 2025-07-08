import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'DevHood',
  tagline: 'Hecho por y para devs (La mayoria, humanos)',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://devhood-tau.vercel.app/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitH  ub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'denulemos', // Usually your GitHub org/user name.
  projectName: 'devhood', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
  defaultLocale: 'es',
  locales: ['es'], // asegurate que SOLO esté 'es'
  localeConfigs: {
    es: {
      label: 'Español',
    },
  },
},
   stylesheets: [
    'https://fonts.googleapis.com/css2?family=Pacifico&display=swap',
  ],

  presets: [
    [
      'classic',
      {        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'docs',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/favicon.ico',
    navbar: {
      title: 'DevHood',
      logo: {
        alt: 'DevHood Logo',
        src: 'img/favicon.ico',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Dojos',
        },
        {
          href: 'https://github.com/denulemos/devdojo-docs',
          label: 'Github',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} DevHood, Inc. Built with Docusaurus y mucho amor.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
