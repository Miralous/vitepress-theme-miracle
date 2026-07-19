import type {
  DocFrontmatter as VanillaDocFrontmatter,
  HomeFrontmatter as VanillaHomeFrontmatter,
  PageFrontmatter as VanillaPageFrontmatter,
} from '#/utils/frontmatter/vanilla'

export interface FrontmatterBase {
  layout: string
}

export interface DocFrontmatter
  extends FrontmatterBase, Omit<VanillaDocFrontmatter, 'layout'> {
  layout: 'doc' | 'post'
}
export interface HomeFrontmatter
  extends FrontmatterBase, Omit<VanillaHomeFrontmatter, 'layout'> {
  layout: 'home'
}
export interface PageFrontmatter
  extends FrontmatterBase, Omit<VanillaPageFrontmatter, 'layout'> {
  layout: 'page'
}
export interface DemoFrontmatter extends FrontmatterBase {
  layout: 'demo'
}

export type Frontmatter =
  | HomeFrontmatter
  | PageFrontmatter
  | DocFrontmatter
  | DemoFrontmatter
