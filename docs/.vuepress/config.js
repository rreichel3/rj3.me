const feed_options = {
  canonical_base: 'https://rj3.me',
  title: "rj3.me | Robert Reichel",
  image: "https://avatars2.githubusercontent.com/u/976632?s=400&v=4",
  copyright: "All rights reserved 2020, Robert Reichel",
  generator: "VuePress Magic 😃",
  author: {
    name: "Robert Reichel",
    link: "https://rj3.me"
  },
};
module.exports = {
  title: 'Robert Reichel',
  description: 'Security, Tech, & Life',
  dest: 'public',
  docsDir: 'docs',
  head: [
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/assets/favicons/favicon-32x32.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/assets/favicons/favicon-16x16.png"}],
    ['link', { rel: "manifest", href: "/assets/favicons/site.webmanifest"}],
    ['link', { rel: "shortcut icon", href: "/assets/favicons/favicon.ico"}],
    ['meta', { name: "msapplication-TileColor", content: "#3a0839"}],
    ['meta', { name: "theme-color", content: "#ffffff"}],
  ],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog', link: '/blog/' },
      { text: 'GitHub', link: 'https://github.com/rreichel3' },
      { text: 'Twitter', link: 'https://twitter.com/rreichel3' },
      { text: 'Subscribe', link: 'https://mailchi.mp/be6ec727b22d/rj3me' },
      { text: 'RSS', link: 'https://rj3.me/rss.xml' },
    ],
    sidebar: {
      '/blog/': [
        'dockerized-django',
        'zero-maintenance-blogging',
        'common-commands',
        'cs-masters-degree',
        'questions-to-ask-when-transitioning-jobs',
        'reading-your-cars-obdii-output',
        'nsa-codebreaker-challenge-2016',
        'elliptic-curve-cryptography',
      ],

    }
  },
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-130701494-3'
      }
    ],
    [ 'sitemap', 
      {
        hostname: 'https://rj3.me'
      },
    ],
    [ 'feed', feed_options ]
  ]
}