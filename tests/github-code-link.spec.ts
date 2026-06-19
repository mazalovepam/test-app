import { test, expect } from '@playwright/test';

test('open GitHub repository code tab and verify file list is visible', async ({ page }) => {
  await page.goto('https://github.com/mazalovepam/test-app/tree/main');

  await page.getByRole('link', { name: /^code$/i }).click();

  await expect(page.getByRole('heading', { name: /folders and files/i })).toBeVisible();
  await expect(page.getByText(/readme\.md/i)).toBeVisible();
});