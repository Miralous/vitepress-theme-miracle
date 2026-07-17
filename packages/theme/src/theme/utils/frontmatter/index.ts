import type {
  DocFrontmatter as VanillaDocFrontmatter,
  HomeFrontmatter as VanillaHomeFrontmatter,
  PageFrontmatter as VanillaPageFrontmatter,
} from '#/utils/frontmatter/vanilla'

export interface FrontmatterBase {
  layout: string
}

export interface DocFrontmatter extends FrontmatterBase, VanillaDocFrontmatter {
  layout: 'doc'
}
export interface HomeFrontmatter
  extends FrontmatterBase, VanillaHomeFrontmatter {
  layout: 'home'
}
export interface PageFrontmatter
  extends FrontmatterBase, VanillaPageFrontmatter {
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
