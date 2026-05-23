import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'
import vicinage from '@vicinage/eslint-plugin'
import stylex from '@stylexjs/eslint-plugin'

export default defineConfig([
  globalIgnores(['dist']),

  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      //
    ],
    languageOptions: {
      globals: globals.browser,
    },
  },

  {
    files: ['**/*.tsx'],
    extends: [
      vicinage.configs.recommended,
      //
    ],
  },

  {
    plugins: {
      '@stylexjs': stylex,
    },
    rules: {
      '@stylexjs/no-lookahead-selectors': 'warn',
      '@stylexjs/enforce-extension': 'off',
    },
  },
])
