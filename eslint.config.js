import antfu from '@antfu/eslint-config'

export default antfu({
  rules: {
    'no-console': 'warn',
    'curly': ['error', 'multi-line', 'consistent'],
  },
})
