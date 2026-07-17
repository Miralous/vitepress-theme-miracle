<template>
  <HomeLayout v-if="frontmatter.layout === 'home'" />
  <PostLayout v-else-if="frontmatter.layout === 'doc'" />
  <Layout v-else />
</template>

<script lang="ts" setup>
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import type { Ref } from 'vue'

import HomeLayout from '#/layouts/HomeLayout.vue'
import type { ThemeConfig } from '#/types'
import type { Frontmatter } from '#/utils/frontmatter'

import PostLayout from './layouts/PostLayout.vue'

import '#/style.scss'

const Layout = DefaultTheme.Layout
const data = useData<ThemeConfig>()
const frontmatter = data.frontmatter as Ref<Frontmatter>
</script>
