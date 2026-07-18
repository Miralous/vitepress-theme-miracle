import { ThemeConfig } from 'vitepress-theme-miracle/config'

export default {
  author: 'silvaire-qwq',
  comment: {
    // type: 'giscus',
    // repo: 'Miralous/Miracle',
    // repoId: 'R_kgDOPz1WLw',
    // categoryId: 'DIC_kwDOPz1WL84Cvsrq',
    // theme: {
    //   light: 'catppuccin_latte',
    //   dark: 'catppuccin_mocha',
    // },
    // category: 'Announcements',
    // mapping: 'pathname',
    // reactionsEnabled: false,
    // emitMetadata: false,
    // inputPosition: 'top',
    // lang: 'zh-CN',
    type: 'twikoo',
    envId: 'https://twikoo.agxcoy.shimakaze.org',
  },
  style: {
    color: {
      hue: 330,
      global: false,
    },
    visual: {
      transition: 10, // x[s(second(s))] / 100 | e.g. 10 -> 0.1s (default)
      gap: 12, // x[px]
      radius: 13, // x[px]
      transparent: false, // transparent? (for year & artist)
      gfmTitle: true,
      upperCategory: false, // CATEGORIES / Categories
      mono: false, // use monospace font for title
      cardHover: {
        enabled: true, // enable card hover effect
        scale: 1.03,
        maxMove: 8,
        maxRotate: 5, // 3d effect |  set 0 to disable 3D
        easing: 0.5,
      },
    },
  },
} satisfies ThemeConfig
