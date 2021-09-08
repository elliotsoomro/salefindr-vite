module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'standard'
  ]
}
