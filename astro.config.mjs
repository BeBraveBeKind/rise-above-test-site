import { defineConfig } from 'astro/config';

export default defineConfig({
  // ... your other config
  vite: {
    resolve: {
      alias: {
        '@components': '/src/components',
        '@layouts': '/src/layouts',
        '@data': '/src/data'
      }
    }
  }
});