import type { MarkdownItMathjaxOptions } from '@mdit/plugin-mathjax'

export interface MathjaxMathProvider extends MarkdownItMathjaxOptions {
  type: 'mathjax'
}
