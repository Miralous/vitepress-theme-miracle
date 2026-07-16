import { DefaultTheme } from 'vitepress/theme'

interface AuthorInfo {
  name: string
  email?: `${string}@${string}`
}

type Author = string | AuthorInfo | Array<AuthorInfo>

export interface ThemeConfig extends DefaultTheme.Config {
  author: Author
}

export const defineThemeConfig = (config: ThemeConfig) => config
