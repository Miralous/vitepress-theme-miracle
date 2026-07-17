import type { GiscusCommentProvider } from './giscus'
import type { TwikooCommentProvider } from './twikoo'

export type CommentProvider =
  | false
  | GiscusCommentProvider
  | TwikooCommentProvider
