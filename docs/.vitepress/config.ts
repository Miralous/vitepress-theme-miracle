import * as fs from 'node:fs'
import * as path from 'node:path'

import { defineConfig } from 'vitepress'
import baseConfig, { ThemeConfig } from 'vitepress-theme-miracle/config'

import themeConfig from './theme.miracle'

export default defineConfig<ThemeConfig>({
  extends: baseConfig,
  srcDir: 'src',

  title: 'title',
  description: 'Nya',
  locales: {
    'zh-hans': {
      label: '简体中文',
      lang: 'zh-Hans',
      title: '标题',
      description: '描述',
    },
  },
  themeConfig,

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
              'node_modules',
              'vitepress-theme-miracle',
              'src',
              'theme',
            ),
            path.resolve(
              __dirname,
              '..',
              'node_modules',
              'vitepress-theme-miracle',
              'theme',
              'src',
            ),
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
