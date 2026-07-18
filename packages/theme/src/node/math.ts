import type { UserConfig } from 'vitepress'

import type { MiracleConfig } from '../types'

export const configMath = async (
  md: Parameters<Required<Required<UserConfig>['markdown']>['config']>[0],
  miracle?: MiracleConfig,
) => {
  if (!miracle?.math) return
  const info = {
    mathjax: {
      package: '@mdit/plugin-mathjax',
      func: 'mathjax',
    },
    katex: {
      package: '@mdit/plugin-katex',
      func: 'katex',
    },
  }[miracle.math.type]

  if (!info) {
    console.error(
      '\x1b[31m✖ Miracle Math:\x1b[0m ' +
        `不支持的数学渲染类型 \x1b[33m${miracle.math.type}\x1b[0m`,
    )
    return
  }

  try {
    const module = await import(info.package)

    if (typeof module[info.func] !== 'function') {
      console.error(
        '\x1b[31m✖ Miracle Math:\x1b[0m ' +
          `插件包 \x1b[36m${info.package}\x1b[0m ` +
          `未提供函数 \x1b[33m${info.func}()\x1b[0m`,
      )
      return
    }

    md.use(module[info.func], miracle.math)
  } catch {
    console.error(
      '\x1b[31m✖ Miracle Math:\x1b[0m ' +
        `请安装依赖包 \x1b[36m${info.package}\x1b[0m ` +
        `以启用 \x1b[33m${miracle.math.type}\x1b[0m 数学渲染支持`,
    )
  }
}
