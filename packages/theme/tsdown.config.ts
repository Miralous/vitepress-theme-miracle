import { defineConfig } from 'tsdown'
import Vue from 'unplugin-vue/rolldown'

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
  entry: 'src/theme/index.ts',
  outDir: 'dist/theme',
  tsconfig: 'tsconfig.app.json',
  plugins: [Vue({ isProduction: true })],
  dts: { vue: true },
})
const node = defineConfig({
  ...common,
  entry: 'src/node/config.ts',
  outDir: 'dist/node',
  tsconfig: 'tsconfig.node.json',
})

export default defineConfig([theme, node])
