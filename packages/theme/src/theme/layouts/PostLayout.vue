<template>
  <Layout>
    <template #doc-before>
      <PostMetadataCard />
    </template>

    <template #doc-after>
      <Comment v-if="theme.comment" :type="theme.comment.type" />
    </template>
  </Layout>
</template>

<script lang="ts" setup>
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

import type { ThemeConfig } from '#/types'

import Comment from '../components/comments/Comment.vue'
import PostMetadataCard from '../components/PostMetadataCard.vue'

const Layout = DefaultTheme.Layout

const { theme } = useData<ThemeConfig>()
</script>
