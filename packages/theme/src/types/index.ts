import { DefaultTheme } from 'vitepress/theme'

import { Author } from './author'
import { MathProvider } from './math'

export interface ThemeConfig extends DefaultTheme.Config {
  author?: Author
}
export interface MiracleConfig {
  math?: MathProvider
}
