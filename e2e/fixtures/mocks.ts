import type { Page } from '@playwright/test'

const LICENSE_MIT_TEXT = `MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy`

export async function applyBrowserMocks(page: Page): Promise<void> {
  await page.addInitScript(() => {
    ;(window as any).Audio = class {
      play() {
        return Promise.resolve()
      }

      pause() {}
    }

    ;(window as any).Notification = class {
      static permission = 'granted'
      static requestPermission = () => Promise.resolve('granted')
      constructor() {}
      close() {}
    }
  })

  await page.route('https://raw.githubusercontent.com/akrystian/pomodorox/master/LICENSE', async route => {
    await route.fulfill({
      status: 200,
      contentType: 'text/plain',
      body: LICENSE_MIT_TEXT,
    })
  })
}
