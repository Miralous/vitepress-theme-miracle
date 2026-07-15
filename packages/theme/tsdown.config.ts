import { defineConfig } from 'tsdown'

const minify = false

const common = defineConfig({
  dts: true,
  sourcemap: true,
  minify,
  unbundle: true,
  format: 'esm',
  target: 'esnext',
  platform: 'neutral',
  fixedExtension: false,
})
const theme = defineConfig({
  ...common,
  entry: 'src/theme/index.tsx',
  outDir: 'dist/theme',
  tsconfig: 'tsconfig.app.json',
})
const node = defineConfig({
  ...common,
  entry: 'src/node/config.ts',
  outDir: 'dist/node',
  tsconfig: 'tsconfig.node.json',
})

export default defineConfig([theme, node])
