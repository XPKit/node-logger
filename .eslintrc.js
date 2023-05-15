module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: [
    'vue'
  ],
  rules: {
    'vue/max-attributes-per-line': ['error', {
      'singleline': {
        'max': 10
      },
      'multiline': {
        'max': 10
      }
    }],
    'no-empty': ['error', { 'allowEmptyCatch': true }],
    'indent': [
      'error',
      2,
      { 'SwitchCase': 1 }
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'never'
    ],
    'comma-dangle': [
      'error', 'never'
    ],
    'vue/require-prop-types': 0
  },
  globals: {
    it: 'readonly',
    before: 'readonly',
    describe: 'readonly',
    Vue: 'readonly',
    window: 'readonly',
    screen: 'readonly'
  }
}
