/**
 * @file Vitepress 默认主题的 frontmatter
 */

interface Hero {
  /**
   * @description `text` 上方的字符，带有品牌颜色 预计简短，例如产品名称
   */
  name?: string

  /**
   * @description Hero 部分的主要文字， 被定义为 `h1` 标签
   */
  text: string

  /**
   * @description `text` 下方的标语
   */
  tagline?: string

  /**
   * @description Text 和 tagline 区域旁的图片
   */
  image?: ThemeableImage

  /**
   * @description 主页 hero 部分的操作按钮
   */
  actions?: HeroAction[]
}

type ThemeableImage =
  | string
  | { src: string; alt?: string }
  | { light: string; dark: string; alt?: string }

interface HeroAction {
  /**
   * @description 按钮的颜色主题，默认为 `brand`
   */
  theme?: 'brand' | 'alt'

  /**
   * @description 按钮的标签
   */
  text: string

  /**
   * @description 按钮的目标链接
   */
  link: string

  /**
   * @description 链接的 target 属性
   */
  target?: string

  /**
   * @description 链接的 rel 属性
   */
  rel?: string
}

interface Feature {
  /**
   * @description 在每个 feature 框中显示图标
   */
  icon?: FeatureIcon

  /**
   * @description Feature 的标题
   */
  title: string

  /**
   * @description Feature 的详情
   */
  details: string

  /**
   * @description 点击 feature 组件时的链接，可以是内部链接，也可以是外部链接。
   */
  link?: string

  /**
   * @description Feature 组件内显示的链接文本，最好与 `link` 选项一起使用
   */
  linkText?: string

  /**
   * @description `link` 选项的链接 rel 属性
   */
  rel?: string

  /**
   * @description `link` 选项的链接 target 属性
   */
  target?: string
}

type FeatureIcon =
  | string
  | { src: string; alt?: string; width?: string; height: string }
  | {
      light: string
      dark: string
      alt?: string
      width?: string
      height: string
    }

export interface FrontmatterBase {
  /**
   * @description 指定页面的布局。
   *
   * @default 'doc'
   */
  layout: 'doc' | 'home' | 'page' | false
  /**
   * @description 是否显示[导航栏](https://vitepress.dev/reference/default-theme-nav)。
   *
   * @default true
   */
  navbar?: boolean
  /**
   * @description 是否显示[侧边栏](https://vitepress.dev/zh/reference/default-theme-sidebar)。
   *
   * @default true
   */
  sidebar?: boolean
  /**
   * @description 大纲中显示的标题级别。它与 config.themeConfig.outline.level 相同，它会覆盖站点级的配置。
   *
   * @default 2
   */
  outline?: number | [number, number] | 'deep' | false
  /**
   * @description 是否在当前页面的页脚中显示[最后更新时间](https://vitepress.dev/zh/reference/default-theme-last-updated)的文本。
   * 如果指定了日期时间，则会显示该日期时间而不是上次 `git` 修改的时间戳。
   *
   * @default true
   */
  lastUpdated?: boolean | Date
  /**
   * @description 是否在当前页的页脚显示[编辑链接](https://vitepress.dev/zh/reference/default-theme-edit-link)。
   *
   * @default true
   */
  editLink?: boolean
  /**
   * @description 是否显示[页脚](https://vitepress.dev/zh/reference/default-theme-footer)。
   *
   * @default true
   */
  footer?: boolean
  /**
   * @description 将额外的类名称添加到特定页面。 然后可以在 `.vitepress/theme/custom.css` 文件中自定义该特定页面的样式
   */
  pageClass?: string
}
export interface DocFrontmatter extends FrontmatterBase {
  layout: 'doc'
  /**
   * @description 定义侧边栏组件在 `'doc'` 布局中的位置。
   * - 将此值设置为 `false` 可禁用侧边栏容器。
   * - 将此值设置为 `true` 会将侧边栏渲染到右侧。
   * - 将此值设置为 `'left'` 会将侧边栏渲染到左侧。
   *
   * @default true
   */
  aside?: boolean | 'left'
}
export interface HomeFrontmatter extends FrontmatterBase {
  layout: 'home'
  /**
   * @description 当 `layout` 设置为 `'home'` 时，定义主页 `hero`
   * 部分的内容。更多详细信息：[默认主题：主页](https://vitepress.dev/reference/default-theme-home-page)。
   */
  hero?: Hero
  /**
   * @description 定义当 `layout` 设置为 `'home'` 时要在 `features`
   * 部分中显示的项目。更多详细信息：[默认主题：主页](https://vitepress.dev/reference/default-theme-home-page)。
   */
  features?: Feature[]
}
export interface PageFrontmatter extends FrontmatterBase {
  layout: 'page'
}

export type Frontmatter = HomeFrontmatter | PageFrontmatter | DocFrontmatter
