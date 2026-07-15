import * as path from 'node:path'

import vueJsx from '@vitejs/plugin-vue-jsx'
import { defineConfig } from 'vitepress'
import { ThemeConfig } from 'vitepress-theme-miracle'
import baseConfig from 'vitepress-theme-miracle/config'

export default defineConfig<ThemeConfig>({
  extends: baseConfig,
  srcDir: 'src',

  // dev options
  vite: {
    plugins: [vueJsx()],
    resolve: {
      alias: {
        '#': path.resolve(__dirname, '..', 'packages', 'theme', 'src'),
      },
    },
  },
})
