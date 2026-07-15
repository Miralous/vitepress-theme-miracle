interface Frontmatter {
  layout: string
}
namespace Frontmatter {
  export const is = (data: Record<string, any>): data is Frontmatter =>
    'layout' in data && typeof data.layout === 'string'
}

export default Frontmatter
