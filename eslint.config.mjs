import { createConfigForNuxt } from '@nuxt/eslint-config/flat'

export default createConfigForNuxt({
  features: {
    stylistic: {
      semi: false,
      quotes: 'single',
      indent: 2,
      commaDangle: 'never'
    }
  }
}).append({
  rules: {
    // Reglas de Standard
    'no-unused-vars': 'warn',
    'no-console': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/no-multiple-template-root': 'off',
    'space-before-function-paren': ['error', 'always'],
    'comma-dangle': ['error', 'never']
  }
})
