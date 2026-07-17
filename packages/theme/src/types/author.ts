export interface AuthorInfo {
  name: string
  email?: `${string}@${string}`
}

export type Author = string | AuthorInfo | Array<AuthorInfo>
