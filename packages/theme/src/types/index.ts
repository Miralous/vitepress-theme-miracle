import { DefaultTheme } from 'vitepress/theme'

import type { Author } from './author'
import type { CommentProvider } from './comments'
import type { MathProvider } from './math'

export interface ThemeConfig extends DefaultTheme.Config {
  author?: Author
  comment?: CommentProvider
}
export interface MiracleConfig {
  math?: MathProvider
}
