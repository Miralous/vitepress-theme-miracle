import { defineConfig } from 'vitepress'

import type { MiracleConfig, ThemeConfig } from '../types'

type UserConfig = Parameters<typeof defineConfig<ThemeConfig>>[0]
export interface MiracleUserConfig extends UserConfig {
  miracle?: MiracleConfig
}

const defineMiracle = (config: MiracleUserConfig) => {
  delete config.miracle
  return defineConfig<ThemeConfig>({
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
    ...config,
  })
}

export default defineMiracle
export type { MiracleConfig, ThemeConfig } from '../types'
