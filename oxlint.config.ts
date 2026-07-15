import { defineConfig } from 'oxlint'

export default defineConfig({
  categories: {
    correctness: 'warn',
  },
  rules: {
    'eslint/no-unused-vars': 'error',
  },
  plugins: ['vue', 'typescript', 'oxc', 'promise'],
})
