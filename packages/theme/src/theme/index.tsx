import { useData, type Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { defineComponent } from 'vue'

import HomePage, { HomePageFrontmatter } from '#/layouts/HomePage'
import type { ThemeConfig } from '#/type'
import Frontmatter from '#/utils/frontmatter'

export default {
  extends: DefaultTheme,
  Layout: defineComponent(() => {
    const data = useData<ThemeConfig>()
    if (!Frontmatter.is(data.frontmatter.value))
      return () => <DefaultTheme.Layout />

    if (HomePageFrontmatter.is(data.frontmatter.value))
      return () => <HomePage />

    return () => <DefaultTheme.Layout />
  }),
} satisfies Theme
export type { ThemeConfig } from '#/type'
