import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import pluginImport from 'eslint-plugin-import';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import pluginSimpleImportSort from 'eslint-plugin-simple-import-sort';
import pluginUnusedImports from 'eslint-plugin-unused-imports';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores(['dist']),
  {
    ignores: ['node_modules', 'coverage', '.idea', '.vscode']
  },
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser
    },
    plugins: {
      'simple-import-sort': pluginSimpleImportSort,
      prettier: eslintPluginPrettier,
      import: pluginImport,
      'unused-imports': pluginUnusedImports
    },
    rules: {
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^(\\u0000|@?\\w)'],
            ['^~/(components|containers|hooks|ds-components)/'],
            ['^(~/(utils|constants|styles|types)/|\\.)']
          ]
        }
      ],
      'simple-import-sort/exports': 'error'
    }
  }
]);
