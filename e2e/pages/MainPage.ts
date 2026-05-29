import { expect, type Locator, type Page } from '@playwright/test'
import { EventLogPage } from './EventLogPage'
import { TaskListPage } from './TaskListPage'
import { TimerPage } from './TimerPage'

export class MainPage {
  readonly page: Page
  readonly header: Locator
  readonly currentTask: Locator
  readonly timer: TimerPage
  readonly taskList: TaskListPage
  readonly eventLog: EventLogPage

  constructor(page: Page) {
    this.page = page
    this.header = page.getByRole('link', { name: 'PomodoroX' })
    this.currentTask = page.locator('h1 strong').first()
    this.timer = new TimerPage(page)
    this.taskList = new TaskListPage(page)
    this.eventLog = new EventLogPage(page)
  }

  async goto(path = ''): Promise<void> {
    await this.page.goto(path)
  }

  async expectLoaded(): Promise<void> {
    await expect(this.header).toBeVisible()
  }

  currentTaskLabel(): Locator {
    return this.currentTask
  }
}
