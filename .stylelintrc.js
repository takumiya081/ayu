module.exports = {
  processors: [
    [
      'stylelint-processor-styled-components',
      {
        moduleName: '@emotion/styled',
      },
    ],
  ],
  extends: ['stylelint-config-recommended', 'stylelint-config-styled-components'],
  rules: {
    'value-no-vendor-prefix': true,
    'font-weight-notation': 'numeric',
    'shorthand-property-no-redundant-values': true,
    // styled-componentなので詳細度で混乱することはないと判断
    'no-descending-specificity': null,
  },
};
