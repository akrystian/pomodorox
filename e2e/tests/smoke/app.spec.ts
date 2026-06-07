import { test, expect } from '../../fixtures'

test('S1 app loads and shows PomodoroX header', async ({ mainPage }) => {
  await mainPage.expectLoaded()
})

test('S2 timer mode buttons are visible', async ({ mainPage }) => {
  await expect(mainPage.timer.regularModeButton).toBeVisible()
  await expect(mainPage.timer.shortBreakModeButton).toBeVisible()
  await expect(mainPage.timer.longBreakModeButton).toBeVisible()
})

test('S3 task input field is present', async ({ mainPage }) => {
  await expect(mainPage.taskList.taskInput).toBeVisible()
  await expect(mainPage.taskList.addTaskButton).toBeVisible()
})
