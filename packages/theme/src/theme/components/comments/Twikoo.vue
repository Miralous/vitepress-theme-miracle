<template>
  <div ref="twikoo" />
</template>

<script lang="ts" setup>
import { init } from 'twikoo'
import { useData } from 'vitepress'
import { onMounted, nextTick, useTemplateRef } from 'vue'

import type { ThemeConfig } from '#/types'
const { theme } = useData<ThemeConfig>()

const el = useTemplateRef('twikoo')
onMounted(async () => {
  if (!window) {
    console.error('组件必须在 ClientOnly 中使用')
    return
  }
  if (!el.value) return
  if (!theme.value.comment) return
  if (theme.value.comment.type !== 'twikoo') return

  await nextTick()
  init({
    ...theme.value.comment,
    el: el.value,
  })
})
</script>
