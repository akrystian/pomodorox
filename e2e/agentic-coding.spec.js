const { test, expect } = require('@playwright/test')

test('adds a task', async ({ page }) => {
    await page.addInitScript(() => localStorage.clear())
    await page.goto('/')

    const taskName = 'Agentic coding task'

    await page.getByRole('textbox').fill(taskName)
    await page.getByRole('button', { name: '+' }).click()

    await expect(page.getByText(taskName)).toBeVisible()
})
