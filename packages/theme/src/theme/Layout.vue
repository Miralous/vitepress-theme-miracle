<template>
  <HomeLayout v-if="frontmatter.layout === 'home'" />
  <PostLayout
    v-else-if="frontmatter.layout === 'doc' || frontmatter.layout === 'post'" />
  <Layout v-else />
</template>

<script lang="ts" setup>
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import type { Ref } from 'vue'
import { onMounted } from 'vue'

import HomeLayout from '#/layouts/HomeLayout.vue'
import type { ThemeConfig } from '#/types'
import type { Frontmatter } from '#/utils/frontmatter'

import PostLayout from './layouts/PostLayout.vue'
import { css } from './utils/style.ts'

import '#/style.scss'

const Layout = DefaultTheme.Layout
const data = useData<ThemeConfig>()
const frontmatter = data.frontmatter as Ref<Frontmatter>

onMounted(() => {
  const style = css`
    :root {
      --hue: ${data.theme.value.style?.color.hue || 280};
      --vp-border-radius-1: ${data.theme.value.style?.visual.radius}px;
      --vp-gap: ${data.theme.value.style?.visual.gap}px;
      --vp-transition-time: ${(data.theme.value.style?.visual.transition ??
        10) * 0.01}s;
      --vp-title-uppercase: ${data.theme.value.style?.visual.upperCategory
        ? 'uppercase'
        : 'capitalize'};
      --vp-use-mono: ${data.theme.value.style?.visual.mono
        ? 'var(--vp-font-family-mono)'
        : 'var(--vp-font-family-base)'};
      --vp-transparent: ${data.theme.value.style?.visual.transparent
        ? 'var(transparent)'
        : 'var(--vp-c-gutter)'};
      --vp-show-title: ${data.theme.value.style?.visual.gfmTitle
        ? 'block'
        : 'none'};
    }
  `
  console.debug(style)
  document.head.appendChild(style)
})
</script>
