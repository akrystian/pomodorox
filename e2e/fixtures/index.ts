import { expect, test as base, type Page } from '@playwright/test'
import { applyBrowserMocks } from './mocks'
import { MainPage } from '../pages/MainPage'

const APP_BASE_URL = process.env.BASE_URL ?? 'http://localhost:3000/pomodorox'

type Fixtures = {
  mainPage: MainPage
  debugPage: MainPage
}

async function prepare(page: Page, path: string): Promise<MainPage> {
  await applyBrowserMocks(page)
  await page.goto(APP_BASE_URL)
  await page.evaluate(() => window.localStorage.clear())
  await page.goto(`${APP_BASE_URL}${path}`)
  return new MainPage(page)
}

export async function seedAndReload(page: Page, state: unknown): Promise<void> {
  await page.evaluate(seed => {
    window.localStorage.setItem('state', JSON.stringify(seed))
  }, state)
  await page.reload()
}

export const test = base.extend<Fixtures>({
  mainPage: async ({ page }, use) => {
    await use(await prepare(page, ''))
  },
  debugPage: async ({ page }, use) => {
    await use(await prepare(page, '?debug=true'))
  },
})

export { expect }
