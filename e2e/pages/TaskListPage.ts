import { expect, type Locator, type Page } from '@playwright/test'

export class TaskListPage {
  readonly page: Page
  readonly taskInput: Locator
  readonly addTaskButton: Locator

  constructor(page: Page) {
    this.page = page
    this.taskInput = page.locator('input.form-control').first()
    this.addTaskButton = page.getByRole('button', { name: '+' })
  }

  async typeTask(taskLabel: string): Promise<void> {
    await this.taskInput.fill(taskLabel)
  }

  async pressEnter(): Promise<void> {
    await this.taskInput.press('Enter')
  }

  async addTask(taskLabel: string): Promise<void> {
    await this.typeTask(taskLabel)
    await this.addTaskButton.click()
  }

  async removeTask(index: number): Promise<void> {
    await this.taskByIndex(index).locator('.float-right button.btn-danger').click()
  }

  async moveTaskUp(index: number): Promise<void> {
    await this.moveTask(index, 'up')
  }

  async moveTaskDown(index: number): Promise<void> {
    await this.moveTask(index, 'down')
  }

  async moveTask(index: number, direction: 'up' | 'down'): Promise<void> {
    await this.taskByIndex(index)
      .locator('.float-right .btn-group-vertical button')
      .nth(direction === 'up' ? 0 : 1)
      .click()
  }

  async toggleDone(index: number): Promise<void> {
    await this.taskByIndex(index).locator('.float-left input[type="checkbox"]').click()
  }

  async selectTask(index: number): Promise<void> {
    await this.taskByIndex(index).locator('.float-left button.btn-secondary').first().click()
  }

  async plusPoints(index: number): Promise<void> {
    await this.taskByIndex(index).locator('.float-left .btn-group-vertical button').nth(0).click()
  }

  async minusPoints(index: number): Promise<void> {
    await this.taskByIndex(index).locator('.float-left .btn-group-vertical button').nth(1).click()
  }

  async assertCardBorderColor(index: number, colorToken: 'success' | 'primary'): Promise<void> {
    await expect(this.taskByIndex(index)).toHaveClass(new RegExp(`bg-${colorToken}`))
  }

  taskByIndex(index: number): Locator {
    return this.page.locator('.m-2.card').filter({ has: this.page.locator('.float-left') }).nth(index)
  }

  pointsBadge(index: number): Locator {
    return this.taskByIndex(index).locator('.float-left .badge')
  }
}
