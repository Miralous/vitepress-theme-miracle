import { defineConfig } from 'vitepress'

import type { ThemeConfig } from '../type'

const defaultConfig = defineConfig<ThemeConfig>({
  srcDir: 'docs',
  outDir: 'dist',
  assetsDir: 'assets',
  cacheDir: '.cache',
  appearance: true,
  lastUpdated: true,
  vite: {
    configFile: false,
  },
  mpa: false,
  metaChunk: true,
  cleanUrls: true,
})

export default defaultConfig
export type { ThemeConfig } from '../type'
