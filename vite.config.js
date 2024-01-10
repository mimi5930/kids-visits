import { resolve } from 'path'
import { defineConfig } from 'vite'
import autoprefixer from 'autoprefixer'

export default defineConfig({
  base: './',
  css: {
    postcss: {
      plugins: [autoprefixer({})]
    }
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        reference: resolve(__dirname, 'references.html'),
        'js/script': resolve(__dirname, './assets/js/script.js')
      },
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`
      }
    }
  }
})
