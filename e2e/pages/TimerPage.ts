import { expect, type Locator, type Page } from '@playwright/test'

export class TimerPage {
  readonly page: Page
  readonly regularModeButton: Locator
  readonly shortBreakModeButton: Locator
  readonly longBreakModeButton: Locator
  readonly debugModeButton: Locator
  readonly timerDisplay: Locator
  readonly playButton: Locator
  readonly pauseButton: Locator
  readonly resetButton: Locator
  readonly timerStoppedBadge: Locator

  constructor(page: Page) {
    this.page = page
    this.regularModeButton = page.locator('label:has-text("Regular")')
    this.shortBreakModeButton = page.locator('label:has-text("Short break")')
    this.longBreakModeButton = page.locator('label:has-text("Long break")')
    this.debugModeButton = page.locator('label:has-text("TEST_BREAK")')
    this.timerDisplay = page.locator('code h1').first()

    const timerButtons = page
      .locator('.m-2.card')
      .filter({ has: page.locator('code h1') })
      .first()
      .locator('button.btn.btn-primary')

    this.playButton = timerButtons.nth(0)
    this.pauseButton = timerButtons.nth(1)
    this.resetButton = timerButtons.nth(2)
    this.timerStoppedBadge = page.getByRole('heading', { name: 'Timer Stopped' })
  }

  async assertModeDisabled(mode: 'Regular' | 'Short break' | 'Long break'): Promise<void> {
    await expect(this.modeButton(mode).locator('input')).toBeDisabled()
  }

  async assertModeEnabled(mode: 'Regular' | 'Short break' | 'Long break'): Promise<void> {
    await expect(this.modeButton(mode).locator('input')).toBeEnabled()
  }

  async selectMode(mode: 'Regular' | 'Short break' | 'Long break' | 'TEST_BREAK'): Promise<void> {
    await this.modeButton(mode).click()
  }

  async assertTime(time: string): Promise<void> {
    await expect(this.timerDisplay).toHaveText(time)
  }

  async play(): Promise<void> {
    await this.playButton.click()
  }

  async pause(): Promise<void> {
    await this.pauseButton.click()
  }

  async reset(): Promise<void> {
    await this.resetButton.click()
  }

  async assertRunning(previousTime: string): Promise<void> {
    await expect.poll(async () => this.timerDisplay.textContent()).not.toBe(previousTime)
  }

  async assertStopped(currentTime: string): Promise<void> {
    await expect(this.timerDisplay).toHaveText(currentTime)
  }

  async waitForTimerExpiry(finalTime = '00:00'): Promise<void> {
    await expect(this.timerDisplay).toHaveText(finalTime, { timeout: 15_000 })
  }

  private modeButton(mode: 'Regular' | 'Short break' | 'Long break' | 'TEST_BREAK'): Locator {
    switch (mode) {
      case 'Regular':
        return this.regularModeButton
      case 'Short break':
        return this.shortBreakModeButton
      case 'Long break':
        return this.longBreakModeButton
      case 'TEST_BREAK':
        return this.debugModeButton
    }
  }
}
