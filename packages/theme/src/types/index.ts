import { DefaultTheme } from 'vitepress/theme'

import type { Author } from './author'
import type { CommentProvider } from './comments'
import type { MathProvider } from './math'
import type { StyleInfo } from './style'

export interface ThemeConfig extends DefaultTheme.Config {
  author?: Author
  comment?: CommentProvider
  style?: StyleInfo
}
export interface MiracleConfig {
  math?: MathProvider
}
