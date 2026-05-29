import { test, expect } from '../../fixtures'

test('TM1 Regular mode disabled without selected task', async ({ mainPage }) => {
  await mainPage.taskList.addTask('Timer task')
  await mainPage.timer.assertModeDisabled('Regular')
})

test('TM2 selecting task enables timer mode buttons', async ({ mainPage }) => {
  await mainPage.taskList.addTask('Timer task')
  await mainPage.taskList.selectTask(0)
  await mainPage.timer.assertModeEnabled('Regular')
  await mainPage.timer.assertModeEnabled('Short break')
  await mainPage.timer.assertModeEnabled('Long break')
})

test('TM3 switching to Regular shows 25:00', async ({ mainPage }) => {
  await mainPage.taskList.addTask('Timer task')
  await mainPage.taskList.selectTask(0)
  await mainPage.timer.selectMode('Regular')
  await mainPage.timer.assertTime('25:00')
})

test('TM4 play button starts the timer', async ({ mainPage }) => {
  await mainPage.taskList.addTask('Timer task')
  await mainPage.taskList.selectTask(0)
  await mainPage.timer.selectMode('Regular')
  const before = await mainPage.timer.timerDisplay.textContent()
  await mainPage.timer.play()
  await mainPage.timer.assertRunning(before ?? '25:00')
})

test('TM5 pause button stops the timer', async ({ mainPage }) => {
  await mainPage.taskList.addTask('Timer task')
  await mainPage.taskList.selectTask(0)
  await mainPage.timer.selectMode('Regular')
  await mainPage.timer.play()
  await mainPage.page.waitForTimeout(1300)
  await mainPage.timer.pause()
  const stopped = (await mainPage.timer.timerDisplay.textContent()) ?? '24:59'
  await mainPage.page.waitForTimeout(1200)
  await mainPage.timer.assertStopped(stopped)
})

test('TM6 reset button restores timer to 05:00', async ({ mainPage }) => {
  await mainPage.taskList.addTask('Timer task')
  await mainPage.taskList.selectTask(0)
  await mainPage.timer.selectMode('Short break')
  await mainPage.timer.play()
  await mainPage.page.waitForTimeout(1200)
  await mainPage.timer.reset()
  await mainPage.timer.assertTime('05:00')
})

test('TM7 TEST_BREAK button appears only with ?debug=true', async ({ mainPage }) => {
  await mainPage.taskList.addTask('Timer task')
  await mainPage.taskList.selectTask(0)
  await expect(mainPage.timer.debugModeButton).toHaveCount(0)

  await mainPage.page.goto((process.env.BASE_URL ?? 'http://localhost:3000/pomodorox') + '?debug=true')
  await mainPage.taskList.addTask('Debug task')
  await mainPage.taskList.selectTask(0)
  await expect(mainPage.timer.debugModeButton).toBeVisible()
})

test('TM8 TEST_BREAK completes in 10s and increments task points', async ({ debugPage }) => {
  await debugPage.page.getByRole('button', { name: '.' }).click()
  await debugPage.taskList.addTask('Break task')
  await debugPage.taskList.selectTask(0)
  await expect(debugPage.timer.debugModeButton).toBeVisible()
  await debugPage.timer.selectMode('TEST_BREAK')
  await debugPage.timer.play()
  await debugPage.timer.waitForTimerExpiry('00:00')
  await expect(debugPage.taskList.pointsBadge(0)).toContainText('/ 1')
})
