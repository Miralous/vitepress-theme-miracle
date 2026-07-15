import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { defineComponent } from 'vue'

export type { ThemeConfig } from '#/type'

export default {
  extends: DefaultTheme,
  Layout: defineComponent<{}>(() => {
    return () => (
      <>
        <DefaultTheme.Layout />
      </>
    )
  }),
} satisfies Theme
