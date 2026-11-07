import { defineConfig, devices } from '@playwright/test';

const baseURL = 'http://127.0.0.1:4174';

export default defineConfig({
  testDir: './tests',
  forbidOnly: Boolean(process.env.CI),
  workers: process.env.CI ? 1 : 2,
  reporter: [['list'], ['html', { open: 'never' }]],
  use: { baseURL, trace: 'retain-on-failure' },
  projects: [
    { name: 'desktop', use: { ...devices['Desktop Chrome'] } },
    { name: 'mobile', use: { ...devices['Pixel 7'] } },
  ],
  webServer: {
    command: 'npm run build -- --mode e2e --outDir dist-e2e && npm run preview -- --host 127.0.0.1 --port 4174 --strictPort --outDir dist-e2e',
    url: baseURL,
    timeout: 120_000,
    env: {
      VITE_APP_EMAILJS_SERVICE_ID: 'test-service',
      VITE_APP_EMAILJS_TEMPLATE_ID: 'test-template',
      VITE_APP_EMAILJS_PUBLIC_KEY: 'test-key',
    },
  },
});
