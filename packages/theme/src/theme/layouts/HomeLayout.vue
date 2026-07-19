<template>
  <VPHome>
    <template #home-hero-before>
      <HomeSplash />
    </template>
  </VPHome>
</template>

<script lang="ts" setup>
import { useData } from 'vitepress'
import VPHome from 'vitepress/dist/client/theme-default/components/VPHome.vue'
import type { Ref } from 'vue'

import HomeSplash from '#/components/HomeSplash.vue'
import type { ThemeConfig } from '#/types'
import type { HomeFrontmatter } from '#/utils/frontmatter'

const data = useData<ThemeConfig>()
const frontmatter = data.frontmatter as Ref<HomeFrontmatter>
</script>
