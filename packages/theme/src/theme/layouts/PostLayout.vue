<template>
  <VPDoc>
    <template #doc-before>
      <PostMetadataCard />
    </template>

    <template #doc-after>
      <Comment v-if="theme.comment" :type="theme.comment.type" />
    </template>
  </VPDoc>
</template>

<script lang="ts" setup>
import { useData } from 'vitepress'
import VPDoc from 'vitepress/dist/client/theme-default/components/VPDoc.vue'

import Comment from '#/components/comments/Comment.vue'
import PostMetadataCard from '#/components/PostMetadataCard.vue'
import type { ThemeConfig } from '#/types'

const { theme } = useData<ThemeConfig>()
</script>
