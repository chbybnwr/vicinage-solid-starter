import { defineConfig } from 'vite'
import vicinage from '@vicinage/unplugin'
import stylex from '@stylexjs/unplugin'
import tailwindcss from '@tailwindcss/vite'
import solid from 'vite-plugin-solid'
import devtools from 'solid-devtools/vite'

export default defineConfig({
  plugins: [
    vicinage.vite({
      applyAs: 'attrs',
    }),

    stylex.vite({
      runtimeInjection: process.env['NODE_ENV'] === 'development',
      useCSSLayers: {
        before: ['reset', 'theme'],
        prefix: 'stylex',
      },
    }),

    devtools(),
    solid(),
    tailwindcss(),
    //
  ],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
})
