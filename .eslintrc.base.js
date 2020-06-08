/**
 * typescript 以外のファイルの設定
 */

const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  extends: ['airbnb', 'prettier'],
  plugins: ['graphql', 'prettier'],
  rules: {
    'prettier/prettier': ERROR,
    'no-console': OFF,
    'no-unused-vars': OFF,
    'graphql/named-operations': [
      'error',
      {
        env: 'literal',
      },
    ],
    'graphql/required-fields': [
      'error',
      {
        env: 'apollo',
        requiredFields: ['id'],
      },
    ],
    'graphql/capitalized-type-name': [
      'error',
      {
        env: 'literal',
      },
    ],
    'graphql/no-deprecated-fields': [
      'error',
      {
        env: 'literal',
      },
    ],
    'graphql/template-strings': [
      'error',
      {
        env: 'literal',
        validators: 'all',
      },
    ],
  },
};
