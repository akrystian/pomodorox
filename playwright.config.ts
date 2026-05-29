import { defineConfig, devices } from '@playwright/test'

const baseURL = process.env.BASE_URL ?? 'http://localhost:3000/pomodorox'
const useFullBrowserMatrix = process.env.FULL_BROWSER_MATRIX === 'true'
const useLocalServer = !process.env.BASE_URL || baseURL.includes('localhost')

const localServeCommand = [
  'rm -rf build/pomodorox',
  'mkdir -p build/pomodorox',
  'cp -r build/static build/pomodorox/static',
  'cp build/index.html build/asset-manifest.json build/manifest.json build/favicon.ico build/logo192.png build/logo512.png build/robots.txt build/countdown-sound.mp3 build/pomodorox/',
  'npx serve -s build -p 3000 --no-clipboard',
].join(' && ')

export default defineConfig({
  testDir: './e2e/tests',
  fullyParallel: true,
  reporter: [
    ['list'],
    ['html', { open: 'never' }],
    ...(process.env.GITHUB_ACTIONS ? [['github' as const]] : []),
  ],
  use: {
    baseURL,
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
  },
  webServer: useLocalServer
    ? {
        command: `bash -lc "${localServeCommand}"`,
        url: 'http://localhost:3000/pomodorox',
        reuseExistingServer: !process.env.CI,
      }
    : undefined,
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    ...(useFullBrowserMatrix
      ? [
          { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
          { name: 'webkit', use: { ...devices['Desktop Safari'] } },
        ]
      : []),
  ],
})
