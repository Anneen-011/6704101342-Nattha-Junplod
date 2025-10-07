import { test, expect } from '@playwright/test'

test('Basic form submit', async ({ page }) => {
  await page.goto('http://localhost:9000')
  await page.fill('input[label="Name"]', 'Nattha')
  await page.fill('input[label="Email"]', 'nattha@example.com')
  await page.fill('input[label="Password"]', '123456')
  await page.click('button:has-text("Submit")')
})
