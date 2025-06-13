import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [dts()],
  css: {
    postcss: './postcss.config.js'
  },
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'lib-svg-icons',
      formats: ['es'],
      fileName: () => 'index.es.js'
    },
    rollupOptions: {
      external: [/^lit/]
    }
  }
});
