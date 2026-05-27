const { defineConfig } = require('@playwright/test')

module.exports = defineConfig({
    testDir: './e2e',
    use: {
        baseURL: 'http://127.0.0.1:3000',
        trace: 'on-first-retry',
    },
    webServer: {
        // CRA4/webpack4 needs this on modern Node/OpenSSL during local+CI test runs.
        command: 'NODE_OPTIONS=--openssl-legacy-provider BROWSER=none npm start',
        url: 'http://127.0.0.1:3000',
        reuseExistingServer: !process.env.CI,
        timeout: 120 * 1000,
    },
})
