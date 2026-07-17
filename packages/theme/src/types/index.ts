import { DefaultTheme } from 'vitepress/theme'

import { Author } from './author'

export interface ThemeConfig extends DefaultTheme.Config {
  author?: Author
}
