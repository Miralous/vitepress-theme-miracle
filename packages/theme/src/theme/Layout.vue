<template>
  <HomeLayout v-if="frontmatter.layout === 'home'" />
  <Layout v-else />
</template>

<script lang="ts" setup>
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import type { Ref } from 'vue'

import HomeLayout from '#/layouts/HomeLayout.vue'
import type { ThemeConfig } from '#/types'
import type { Frontmatter } from '#/utils/frontmatter'

const Layout = DefaultTheme.Layout
const data = useData<ThemeConfig>()
const frontmatter = data.frontmatter as Ref<Frontmatter>
</script>
