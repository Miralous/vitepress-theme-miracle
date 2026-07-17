import type {
  Repo,
  Mapping,
  Theme,
  InputPosition,
  AvailableLanguage,
  Loading,
} from '@giscus/vue'

export interface GiscusCommentProvider {
  type: 'giscus'
  id?: string
  host?: string
  repo: Repo
  repoId: string
  category?: string
  categoryId?: string
  mapping: Mapping
  term?: string
  theme?:
    | Theme
    | {
        light: Theme
        dark: Theme
      }
  strict?: boolean
  reactionsEnabled?: boolean
  emitMetadata?: boolean
  inputPosition?: InputPosition
  lang?: AvailableLanguage
  loading?: Loading
}
