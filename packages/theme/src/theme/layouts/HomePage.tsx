import { Content } from 'vitepress'
import { defineComponent } from 'vue'

import type Frontmatter from '#/utils/frontmatter'

export interface HomePageFrontmatter extends Frontmatter {
  layout: 'home'
}
export namespace HomePageFrontmatter {
  export const is = (
    frontmatter: Frontmatter,
  ): frontmatter is HomePageFrontmatter => frontmatter.layout === 'home'
}

export default defineComponent(() => {
  return () => <Content />
})
