import { test, expect } from '../../fixtures'
import { seedAndReload } from '../../fixtures'
import { withMode, withSelectedTask, wrongVersionState } from '../../seeds'

test('P1 selected task persists after reload', async ({ mainPage }) => {
  await seedAndReload(mainPage.page, withSelectedTask('task-2'))
  const selected = await mainPage.page.evaluate(() => JSON.parse(localStorage.getItem('state') ?? '{}').selected)
  expect(selected).toBe('task-2')
})

test('P2 timer mode persists after reload', async ({ mainPage }) => {
  await seedAndReload(mainPage.page, withMode('REGULAR'))
  const mode = await mainPage.page.evaluate(() => JSON.parse(localStorage.getItem('state') ?? '{}').mode)
  expect(mode).toEqual(['REGULAR'])
})

test('P3 state with wrong version is ignored', async ({ mainPage }) => {
  await seedAndReload(mainPage.page, wrongVersionState())
  await expect(mainPage.page.getByText('Old task')).toHaveCount(0)
})
