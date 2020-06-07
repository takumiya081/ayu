const path = require('path');

const OFF = 0;
const WARN = 1;
const ERROR = 2;

const jsExtensions = ['.js'];
const tsExtensions = ['.ts'];

const allExtensions = jsExtensions.concat(tsExtensions);

module.exports = {
  env: {
    node: true,
    es6: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  settings: {
    'import/extensions': allExtensions,
    'import/parsers': {
      '@typescript-eslint/parser': tsExtensions,
    },
    'import/docstyle': ['jsdoc', 'tomdoc'],
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.ts'],
      },
      typescript: {
        directory: path.join(__dirname, 'tsconfig.json'),
      },
    },
    react: {
      version: 'detect',
    },
  },
  parserOptions: {
    // es6 のimportを有効にする
    sourceType: 'module',
    ecmaVersion: 2020,
    project: path.join(__dirname, 'tsconfig.json'),
  },
  extends: [
    'airbnb',
    'plugin:jest/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:import/typescript',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  plugins: ['@typescript-eslint', 'jest', 'simple-import-sort', 'prettier'],
  rules: {
    'react/prop-types': OFF,
    'react/static-property-placement': OFF,
    'react/jsx-filename-extension': [ERROR, {extensions: ['.tsx']}],
    'react/jsx-wrap-multilines': ['error', {declaration: false, assignment: false}],
    'prettier/prettier': ERROR,
    '@typescript-eslint/explicit-function-return-type': OFF,
    '@typescript-eslint/explicit-module-boundary-types': OFF,
    'no-plusplus': OFF,
    '@typescript-eslint/no-unused-vars': [ERROR, {argsIgnorePattern: '^_'}],
    'react/jsx-props-no-spreading': [
      ERROR,
      {
        html: 'enforce',
        custom: 'ignore',
      },
    ],
    'import/prefer-default-export': OFF,
    'import/no-default-export': ERROR,
    'import/no-deprecated': WARN,
    'import/no-unresolved': OFF,
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
    'sort-imports': OFF,
    'simple-import-sort/sort': ERROR,
    'sort-imports': OFF,
    'import/order': OFF,
    // testのdevDependenciesはOKにする
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          'spec/**',
          'test/**',
          '**/*.test.*',
          'tests/**',
          '**/__tests__/**',
          '**/seeder/**',
        ],
        optionalDependencies: false,
      },
    ],
    'import/extensions': OFF,
    '@typescript-eslint/naming-convention': [
      ERROR,
      {
        selector: 'typeParameter',
        format: ['PascalCase'],
        custom: {
          regex: '^T[A-Z]',
          match: false,
        },
      },
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: false,
        },
      },
    ],
  },
};
