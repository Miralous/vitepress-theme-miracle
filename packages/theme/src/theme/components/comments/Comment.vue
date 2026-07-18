<template>
  <h2 class="miracle-comment-styled-h2" v-if="title !== false"> 评论 </h2>
  <Giscus v-if="type === 'giscus'" />
  <Twikoo v-else-if="type === 'twikoo'" />
</template>

<script lang="ts" setup>
import Giscus from '#/components/comments/Giscus.vue'
import Twikoo from '#/components/comments/Twikoo.vue'

defineProps<{
  type: 'giscus' | 'twikoo'
  title?: boolean
}>()
</script>

<style lang="scss">
.miracle-comment-styled-h2 {
  margin: 48px 0px 36px 0px;
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  padding-top: 24px;
  border-top: 1px solid var(--vp-c-divider);
}
</style>
