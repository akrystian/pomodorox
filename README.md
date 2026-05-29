# PomidoroX [![CI for pomidorox by @akrystian](https://github.com/akrystian/pomidorox/actions/workflows/ci.yaml/badge.svg)](https://github.com/akrystian/pomidorox/actions/workflows/ci.yaml)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode at [http://localhost:3000](http://localhost:3000).

### `npm test`

Runs unit tests in watch mode.

### `npm run build`

Builds the app for production into `build/`.

### `npm run test:e2e`

Runs Playwright smoke and regression suites.

### `npm run test:e2e:smoke`

Runs only smoke Playwright tests in `e2e/tests/smoke`.

### `npm run test:e2e:regression`

Runs only regression Playwright tests in `e2e/tests/regression`.

### `npm run test:e2e:ui`

Opens Playwright UI mode.

### `npm run test:all`

Runs unit tests and Playwright smoke/regression suites.

## E2E setup

1. Install dependencies:

   ```bash
   npm ci
   ```

2. Install Playwright browsers:

   ```bash
   npx playwright install --with-deps
   ```

3. Build the application:

   ```bash
   npm run build
   ```

4. Run E2E tests:

   ```bash
   npm run test:e2e
   ```

Playwright configuration is in `/tmp/workspace/akrystian/pomodorox/playwright.config.ts`.

## CI and required checks

The CI workflow runs three jobs in parallel:

- `build_test`
- `smoke`
- `regression`

Recommended branch protection required status checks:

- `build_test`
- `smoke`
- `regression`

Nightly browser-matrix E2E runs are in `.github/workflows/nightly.yml` against `https://akrystian.github.io/pomodorox`.

## Deploy website to gh-pages

### `npm run deploy`

Deploys by `gh-pages` package.
