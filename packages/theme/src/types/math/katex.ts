import type { MarkdownItKatexOptions } from '@mdit/plugin-katex'

export interface KatexMathProvider extends MarkdownItKatexOptions {
  type: 'katex'
}
