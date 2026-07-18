<template>
  <div class="miracle-post-metadata" v-if="frontmatter.title">
    <div class="card-style">
      <div v-if="frontmatter.image" class="image-container">
        <img :src="frontmatter.image" />
      </div>
      <div class="metadata-container">
        <div class="meta-bar" v-if="frontmatter.published">
          <div class="meta-item">
            <Icon class="icon" icon="ph:pencil-bold" />
            <span>{{ formatRelativeDate(frontmatter.published) }}</span>
          </div>

          <div class="meta-item" v-if="frontmatter.updated">
            <Icon class="icon" icon="lucide:clock" />
            <span>{{ formatRelativeDate(frontmatter.updated) }}</span>
          </div>

          <div class="meta-item" v-if="frontmatter.category">
            <Icon class="icon" icon="ph:book-bookmark-bold" />
            <a
              class="hover-link"
              :href="`/archives?category=${frontmatter.category}`">
              {{ frontmatter.category }}
            </a>
          </div>

          <!-- 以后再说 -->
          <!-- <div v-if="postInfo?.wordCount" class="meta-item hide-on-mobile">
            <Icon class="icon" icon="ph:text-aa-bold" />
            <span>
              {{ postInfo.wordCount }}
              字
            </span>
          </div> -->

          <div v-if="frontmatter.origin" class="meta-item">
            <Icon class="icon" icon="ph:link-bold" />
            <a class="hover-link" :href="frontmatter.origin" target="_blank">{{
              formatUrl(frontmatter.origin)
            }}</a>
          </div>
        </div>
        <!-- ee -->
        <h1 class="title">
          {{ frontmatter.title }}
        </h1>
      </div>
    </div>
    <div class="desc-box" v-if="frontmatter.description">
      <p class="desc">
        <Icon
          icon="ph:sparkle-duotone"
          style="
            margin-right: calc(var(--vp-gap) / 1.5);
            position: relative;
            top: -1px;
          " />
        {{ frontmatter.description }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue'
import { useData } from 'vitepress'

import { formatUrl, formatRelativeDate } from '#/utils/format'

import '#/style.scss'

const { page } = useData()
const frontmatter = page.value?.frontmatter || {}
</script>

<style lang="scss" scoped>
.miracle-post-metadata {
  display: block;
  z-index: 9999;
  margin-bottom: 30px;
}

/* 头图样式保持 */
.image-container img {
  width: 100% !important;
  height: 40vh !important;
  object-fit: cover;
  background-repeat: no-repeat;
  border-radius: var(--vp-border-radius-1) var(--vp-border-radius-1) 0 0;
  transition: all var(--vp-transition-time);
  box-shadow: var(--vp-shadow);
}

/* 🌟 卡片整体样式 */
.card-style {
  background-color: var(
    --vp-c-bg-soft
  ); /* 匹配 Vitepress 的柔和背景色，浅色灰，深色暗 */
  border-radius: var(--vp-border-radius-1); /* 圆角 */

  & .metadata-container {
    padding: calc(var(--vp-gap) * 1.5); /* 增加留白 */
  }
}

// /* 调整移动端间距 */
// @media screen and (max-width: 600px) {
//   .card-style {
//   }
// }

/* 顶部元数据栏 */
.meta-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 4px calc(var(--vp-gap) * 1.25);
  margin-bottom: 28px;
  span,
  a {
    color: var(--vp-c-text-2); /* 柔和的次级文字颜色 */
    opacity: 0.8;
  }
  font-size: 14.5px;
  * {
    font-weight: 400 !important;
  }
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 6px;

  & .icon {
    width: 16px;
    height: 16px;
    opacity: 0.8;
  }
}

.hover-link {
  color: var(--vp-c-text-1);
  &:hover {
    opacity: 1 !important;
    color: var(--vp-c-brand-1) !important;
  }
}

// 不然还是留着8
.separator {
  margin: 0 4px;
  opacity: 0.4;
}

/* 📰 标题样式 */
.title {
  font-size: 2.2rem;
  font-weight: 700;
  line-height: 1.4;
  color: var(--vp-c-text-1);
  /* 使用衬线体来模拟图片里的优雅质感 */
  font-family: var(--vp-font-family-title);
  letter-spacing: 0.5px;
}

/* ✨ 描述区域样式 */
.desc-box {
  display: flex;
  align-items: flex-start;
  gap: var(--vp-gap);
  padding: 0 calc(var(--vp-gap) / 2);
  color: var(--vp-c-text-3);
  opacity: 0.8;

  & .desc {
    font-size: 15px;
    line-height: 1.7;
    font-weight: 400;
  }
}

.iconify {
  opacity: 1 !important;
}
</style>
