export default {
  '*.{js,ts,tsx,css,cjs,mjs}': ['eslint --fix', 'prettier --write'],
  '*.{json,md,yml}': ['prettier --write']
};
