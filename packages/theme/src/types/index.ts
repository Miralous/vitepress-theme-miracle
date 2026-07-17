import { DefaultTheme } from 'vitepress/theme'

import { Author } from './author'
import { CommentProvider } from './comments'
import { MathProvider } from './math'

export interface ThemeConfig extends DefaultTheme.Config {
  author?: Author
  comment?: CommentProvider
}
export interface MiracleConfig {
  math?: MathProvider
}
