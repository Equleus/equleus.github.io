import antfu from '@antfu/eslint-config'

export default antfu(
  {
    astro: true,
    unocss: true,
    formatters: true,
  },
  {
    ignores: [
      '.astro/**',
      'dist/**',
      'node_modules/**',
      'public/**',
      '**/*.md',
    ],
    rules: {
      'style/no-tabs': 'off',

      'ts/no-empty-object-type': 'off',

      'no-labels': 'off',
      'no-unused-expressions': 'off',
    },
  },
)
