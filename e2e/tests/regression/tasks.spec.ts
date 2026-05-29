import { test, expect } from '../../fixtures'
import { seedAndReload } from '../../fixtures'
import { withTasks } from '../../seeds'

test('T1 add task via + button', async ({ mainPage }) => {
  await mainPage.taskList.addTask('Task via plus')
  await expect(mainPage.page.getByText('Task via plus')).toBeVisible()
})

test('T2 add task via Enter key', async ({ mainPage }) => {
  await mainPage.taskList.typeTask('Task via enter')
  await mainPage.taskList.pressEnter()
  await expect(mainPage.page.getByText('Task via enter')).toBeVisible()
})

test('T3 remove task, delete disabled when selected', async ({ mainPage }) => {
  await mainPage.taskList.addTask('Task A')
  await mainPage.taskList.addTask('Task B')
  await mainPage.taskList.selectTask(0)
  await expect(mainPage.taskList.taskByIndex(0).locator('.float-right button.btn-danger')).toBeDisabled()
  await mainPage.taskList.removeTask(1)
  await expect(mainPage.page.getByText('Task B')).toHaveCount(0)
})

test('T4 move task up', async ({ mainPage }) => {
  await mainPage.taskList.addTask('First')
  await mainPage.taskList.addTask('Second')
  await mainPage.taskList.moveTaskUp(1)
  await expect(mainPage.taskList.taskByIndex(0)).toContainText('Second')
})

test('T5 move task down', async ({ mainPage }) => {
  await mainPage.taskList.addTask('First')
  await mainPage.taskList.addTask('Second')
  await mainPage.taskList.moveTaskDown(0)
  await expect(mainPage.taskList.taskByIndex(1)).toContainText('First')
})

test('T6 toggle task done — card turns green', async ({ mainPage }) => {
  await mainPage.taskList.addTask('Done me')
  await mainPage.taskList.toggleDone(0)
  await mainPage.taskList.assertCardBorderColor(0, 'success')
})

test('T7 select task — card turns blue, Current label updates', async ({ mainPage }) => {
  await mainPage.taskList.addTask('Select me')
  await mainPage.taskList.selectTask(0)
  await mainPage.taskList.assertCardBorderColor(0, 'primary')
  await expect(mainPage.currentTaskLabel()).toContainText('Select me')
})

test('T8 plus points on task', async ({ mainPage }) => {
  await mainPage.taskList.addTask('Points task')
  await mainPage.taskList.plusPoints(0)
  await expect(mainPage.taskList.pointsBadge(0)).toContainText('/ 1')
})

test('T9 minus points on task', async ({ mainPage }) => {
  await mainPage.taskList.addTask('Points task')
  await mainPage.taskList.plusPoints(0)
  await mainPage.taskList.minusPoints(0)
  await expect(mainPage.taskList.pointsBadge(0)).toContainText('/ 0')
})

test('T10 tasks persist to localStorage after reload', async ({ mainPage }) => {
  await seedAndReload(
    mainPage.page,
    withTasks([
      { id: 'task-1', label: 'Persisted one' },
      { id: 'task-2', label: 'Persisted two' },
    ]),
  )

  await expect(mainPage.page.getByText('Persisted one')).toBeVisible()
  await expect(mainPage.page.getByText('Persisted two')).toBeVisible()
})
