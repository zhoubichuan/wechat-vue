module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2015
  },
  env: {
    browser: true
  },
  rules: {
    'indent': ['error', 2],
    'quotes': ['error', 'double'],
    'semi': 0,
    'no-console': 'error',
    'arrow-parens': 0
  }
}