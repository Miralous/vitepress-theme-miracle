<template>
  <HomePage v-if="HomePageFrontmatter.is(frontmatter)" />
  <Layout />
</template>

<script lang="ts" setup>
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

import HomePage from '#/layouts/HomePage.vue'
import type { ThemeConfig } from '#/type'
import { HomePageFrontmatter } from '#/utils/frontmatter'

const Layout = DefaultTheme.Layout
const { frontmatter } = useData<ThemeConfig>()
</script>
