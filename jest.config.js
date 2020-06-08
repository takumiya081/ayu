const {pathsToModuleNameMapper} = require('ts-jest/utils');
const {compilerOptions} = require('./tsconfig');

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: false,
  roots: ['<rootDir>/src'],
  errorOnDeprecated: true,
  globals: {
    'ts-jest': {},
  },
  verbose: true,
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {prefix: '<rootDir>/src/'}),
};
