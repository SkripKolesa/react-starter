module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  ignorePatterns: ['node_modules/*'],
  extends: [
    'plugin:react/recommended',
    'standard',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  overrides: [
    {
      files: [
        '**/*.ts',
        '**/*.tsx'
      ],
      rules: {
        'no-restricted-imports': [
          'error',
          {
            patterns: [
              '@/features/*/*',
              '!@/features/*/models',
              '!@/features/*/types'
            ]
          }
        ],
        '@typescript-eslint/explicit-function-return-type': ['off'],
        '@typescript-eslint/explicit-module-boundary-types': ['off'],
        '@typescript-eslint/no-empty-function': ['off'],
        '@typescript-eslint/no-explicit-any': ['off'],
        'comma-dangle': ['off'],
        semi: ['off'],
        'object-curly-spacing': ['off'],
        'space-before-function-paren': ['off'],
      }
    }
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react',
    '@typescript-eslint'
  ],
  rules: {}
}
