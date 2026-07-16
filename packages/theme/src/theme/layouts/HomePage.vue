<template>
  <Layout />
</template>

<script lang="ts" setup>
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

import type { ThemeConfig } from '#/type'

const Layout = DefaultTheme.Layout
const { frontmatter } = useData<ThemeConfig>()
</script>
