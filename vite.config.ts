import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [dts(), tailwindcss()],
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
