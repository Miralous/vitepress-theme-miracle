export interface Frontmatter {
  layout: string
}

export namespace Frontmatter {
  export const is = (data: Record<string, any>): data is Frontmatter =>
    'layout' in data && typeof data.layout === 'string'
}

export interface HomePageFrontmatter extends Frontmatter {
  layout: 'home'
}

export namespace HomePageFrontmatter {
  export const is = (
    frontmatter: Record<string, any>,
  ): frontmatter is HomePageFrontmatter =>
    Frontmatter.is(frontmatter) && frontmatter.layout === 'home'
}

export default Frontmatter
