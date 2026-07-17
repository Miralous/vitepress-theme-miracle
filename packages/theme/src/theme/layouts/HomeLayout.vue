<template>
  <Layout>
    <template #home-hero-before>
      <HomeSplash />
    </template>
  </Layout>
</template>

<script lang="ts" setup>
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import type { Ref } from 'vue'

import HomeSplash from '#/components/HomeSplash.vue'
import type { ThemeConfig } from '#/types'
import type { HomeFrontmatter } from '#/utils/frontmatter'

const Layout = DefaultTheme.Layout
const data = useData<ThemeConfig>()
const frontmatter = data.frontmatter as Ref<HomeFrontmatter>
</script>
