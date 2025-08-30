import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    exclude: [
      'demo/**',
      'data/**',
      'node_modules/**',
      'dist/**',
      'coverage/**',
    ],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      // Only measure source files:
      include: ['src/**/*.{ts,tsx,js,jsx}'],
      exclude: [
        'demo/**',
        'notes/**',
        'node_modules/**',
        'dist/**',
        'coverage/**',
        '**/*.d.ts',
        '**/vitest.config.*',
      ],
    },
  },
});
