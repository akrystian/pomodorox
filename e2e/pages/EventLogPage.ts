import { expect, type Locator, type Page } from '@playwright/test'

export class EventLogPage {
  readonly page: Page
  readonly clearEventsButton: Locator
  readonly eventRows: Locator
  readonly timestampColumn: Locator
  readonly labelColumn: Locator
  readonly taskColumn: Locator
  readonly statusColumn: Locator

  constructor(page: Page) {
    this.page = page
    this.clearEventsButton = page.getByRole('button', { name: 'Clear events' })
    this.eventRows = page.locator('tbody tr')
    this.timestampColumn = page.getByRole('columnheader', { name: 'Timestamp' })
    this.labelColumn = page.getByRole('columnheader', { name: 'Label' })
    this.taskColumn = page.getByRole('columnheader', { name: 'Task' })
    this.statusColumn = page.getByRole('columnheader', { name: 'Status' })
  }

  async clearEvents(): Promise<void> {
    await this.clearEventsButton.click()
  }

  async assertEventCount(count: number): Promise<void> {
    await expect(this.eventRows).toHaveCount(count)
  }

  async assertLastEvent(expected: { label?: string; task?: string; status: string }): Promise<void> {
    const last = this.eventRows.last().locator('td')
    await expect(last.nth(3)).toHaveText(expected.status, { ignoreCase: true })

    if (expected.label !== undefined) {
      await expect(last.nth(1)).toHaveText(expected.label)
    }

    if (expected.task !== undefined) {
      await expect(last.nth(2)).toHaveText(expected.task)
    }
  }

  async assertColumns(): Promise<void> {
    await expect(this.timestampColumn).toBeVisible()
    await expect(this.labelColumn).toBeVisible()
    await expect(this.taskColumn).toBeVisible()
    await expect(this.statusColumn).toBeVisible()
  }

  async assertEmptyTable(): Promise<void> {
    await expect(this.eventRows).toHaveCount(0)
  }
}
