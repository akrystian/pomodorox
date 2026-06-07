import { test } from '@playwright/test'

test('TDD placeholder (failing by design)', async () => {
  test.fail(true, 'TDD tests are intentionally failing and excluded from CI.')
})
