module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  settings: {
    version: 'detect'
  },
  env: {
    jest: true,
    browser: true,
    webextensions: true
  },
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off'
  }
};
