const {pathsToModuleNameMapper} = require('ts-jest/utils');
const {compilerOptions} = require('./tsconfig');

module.exports = {
  preset: 'ts-jest',
  testPathIgnorePatterns: ['<rootDir>[/\\\\](node_modules|.next)[/\\\\]'],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
  },
  collectCoverage: false,
  roots: ['<rootDir>/src'],
  errorOnDeprecated: true,
  globals: {
    'ts-jest': {},
  },
  verbose: true,
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {prefix: '<rootDir>/src/'}),
};
