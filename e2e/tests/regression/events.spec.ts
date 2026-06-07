import { test } from '../../fixtures'

test.beforeEach(async ({ mainPage }) => {
  await mainPage.taskList.addTask('Event task')
})

test('E1 selecting task creates STARTED event', async ({ mainPage }) => {
  await mainPage.taskList.selectTask(0)
  await mainPage.eventLog.assertEventCount(1)
  await mainPage.eventLog.assertLastEvent({ label: 'Event task', status: 'started' })
})

test('E2 switching timer mode creates STARTED event', async ({ mainPage }) => {
  await mainPage.taskList.selectTask(0)
  await mainPage.timer.selectMode('Regular')
  await mainPage.eventLog.assertEventCount(2)
  await mainPage.eventLog.assertLastEvent({ label: 'No label', task: 'REGULAR', status: 'started' })
})

test('E3 clear events button empties event table', async ({ mainPage }) => {
  await mainPage.taskList.selectTask(0)
  await mainPage.eventLog.assertEventCount(1)
  await mainPage.eventLog.clearEvents()
  await mainPage.eventLog.assertEmptyTable()
})

test('E4 event table shows Timestamp, Label, Task, Status columns', async ({ mainPage }) => {
  await mainPage.eventLog.assertColumns()
})
