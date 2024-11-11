import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom', // Needed to run DOM tests
    setupFiles: './src/setupTests.ts', // For setup configuration
  },
});
