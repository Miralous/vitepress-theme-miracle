<template>
  <GiscusComponent
    v-if="!!theme.comment && theme.comment.type === 'giscus'"
    :id="theme.comment.id"
    :host="theme.comment.host"
    :repo="theme.comment.repo"
    :repo-id="theme.comment.repoId"
    :category="theme.comment.category"
    :category-id="theme.comment.categoryId"
    :mapping="theme.comment.mapping"
    :term="theme.comment.term"
    :theme="currentTheme"
    :strict="b(theme.comment.strict)"
    :reactions-enabled="b(theme.comment.reactionsEnabled)"
    :emit-metadata="b(theme.comment.emitMetadata)"
    :input-position="theme.comment.inputPosition"
    :lang="theme.comment.lang"
    :loading="theme.comment.loading" />
</template>

<script lang="ts" setup>
import GiscusComponent, {
  type BooleanString,
  type Theme as GiscusTheme,
} from '@giscus/vue'
import { useData } from 'vitepress'
import { computed } from 'vue'

import type { ThemeConfig } from '#/types'

const { site, theme, isDark } = useData<ThemeConfig>()

const b = (b?: boolean): BooleanString | undefined => {
  if (b === true) return '1'
  if (b === false) return '0'
  // return undefined
}

const currentTheme = computed<GiscusTheme | undefined>(() => {
  if (!theme.value.comment) return undefined
  if (theme.value.comment.type !== 'giscus') return undefined

  if (typeof theme.value.comment.theme === 'string')
    return theme.value.comment.theme

  if (isDark.value) return theme.value.comment.theme?.dark

  return theme.value.comment.theme?.light
})
</script>
