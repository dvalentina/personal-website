/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path');

module.exports = {
  extends: [
    'airbnb',
    'react-app',
    'prettier',
    'plugin:react/recommended',
    'stylelint',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:i18n-json/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  root: true,
  plugins: ['import', 'react', 'prettier', 'simple-import-sort'],
  settings: {
    react: {
      version: '16.8',
    },
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', '/'],
      },
    },
  },
  env: {
    es6: true,
    jest: true,
    browser: true,
    node: true,
  },
  globals: {
    DEBUG: false,
  },
  rules: {
    'no-param-reassign': 0,
    semi: [2, 'always'],
    'no-console': 'off',
    'import/no-named-as-default': 0,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.ts', '.jsx', '.tsx'],
      },
    ],
    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'import/prefer-default-export': 0,
    'import/first': 0,
    'sort-imports': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'prettier/prettier': 'error',
    'no-restricted-imports': [
      'error',
      {
        patterns: ['@mui/*/*/*', '!@mui/material/test-utils/*'],
      },
    ],
    'node/no-missing-import': 'off',
    'node/no-extraneous-import': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    'i18n-json/identical-keys': [
      2,
      {
        filePath: path.resolve('./public/locales/en/translation.json'),
      },
    ],
  },
  overrides: [
    {
      files: ['**/*.js', '**/*.ts', '**/*.jsx', '**/*.tsx'],
      rules: {
        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              // `react` first, `next` second, then packages starting with a character
              ['^react$', '^next', '^[a-z]'],
              // Packages starting with `@`
              ['^@'],
              // Packages starting with `~`
              ['^~'],
              // Imports starting with `../`
              ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
              // Imports starting with `./`
              ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
              // Style imports
              ['^.+\\.s?css$'],
              // Side effect imports
              ['^\\u0000'],
            ],
          },
        ],
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-undef': 'off',
      },
    },
  ],
};
