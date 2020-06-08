/**
 * schema.graphqlを .ts に変換
 */
const fs = require('fs');
const path = require('path');

const template = fs.readFileSync(path.join(__dirname, 'typeDefTemplate.ts'), 'utf-8');
const schema = fs.readFileSync(
  path.resolve(__dirname, '../../schema.graphql'),
  'utf-8',
);
const typeDef = template.replace('{{%DocumentNode}}', schema);
const typeDefPath = path.resolve(
  path.join(__dirname, '../../src/functions/infrastructure/typeDef.ts'),
);
fs.writeFileSync(typeDefPath, typeDef);