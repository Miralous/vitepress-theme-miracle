import * as fs from 'node:fs'
import * as path from 'node:path'

import { defineConfig } from 'vitepress'
import { ThemeConfig } from 'vitepress-theme-miracle'
import baseConfig from 'vitepress-theme-miracle/config'

export default defineConfig<ThemeConfig>({
  extends: baseConfig,
  srcDir: 'src',

  // dev options
  vite: {
    plugins: [
      {
        name: 'miracle-dev',
        resolveId(source) {
          if (!source.startsWith('#')) return
          const basePaths = [
            path.resolve(
              __dirname,
              '..',
              '..',
              'packages',
              'theme',
              'src',
              'theme',
            ),
            path.resolve(__dirname, '..', '..', 'packages', 'theme', 'src'),
          ]
          const searchPaths = [source, `${source}.ts`, `${source}.tsx`]

          for (const basePath of basePaths) {
            for (const searchPath of searchPaths) {
              const filePath = searchPath.replace('#', basePath)
              if (fs.existsSync(filePath)) return filePath
            }
          }
        },
      },
    ],
  },
})
