import { test, expect } from '@playwright/test';

// TC01 :Open website
test('T01', async ({ page }) => {
  await page.goto('http://localhost:8080/en/');
  await page.waitForTimeout(5000);
});

// TC02 : Open Tracking Order
test('TC02', async ({ page }) => {
    await page.goto('http://localhost:8080/en/');
    await page.getByRole('link', { name: 'TrackOrder' }).click();
    await page.waitForTimeout(5000);
  });

// TC03 : Valid Input
test('TC03', async ({ page }) => {
    await page.goto('http://localhost:8080/en/');
    await page.getByRole('link', { name: 'TrackOrder' }).click();
    await page.locator('input[name="order_reference"]').click();
    await page.locator('input[name="order_reference"]').fill('FFATNOMMJ');
    await page.locator('#guestOrderTrackingForm input[name="email"]').click();
    await page.locator('#guestOrderTrackingForm input[name="email"]').fill('pub@prestashop.com');
    await page.getByRole('button', { name: 'Send' }).click();
    await page.waitForTimeout(5000);
  });

// TC04 : ตรวจสอบสินค้า Empty order_reference
test('TC04', async ({ page }) => {
    await page.goto('http://localhost:8080/en/');
    await page.getByRole('link', { name: 'TrackOrder' }).click();
    await page.locator('input[name="order_reference"]').click();
    await page.locator('input[name="order_reference"]').fill('FFATNOMMJ');
    await page.getByRole('button', { name: 'Send' }).click();
    await page.waitForTimeout(5000);
  });

// TC05 : ตรวจสอบสินค้า Empty email
test('TC05', async ({ page }) => {
    await page.goto('http://localhost:8080/en/');
    await page.getByRole('link', { name: 'TrackOrder' }).click();
    await page.locator('#guestOrderTrackingForm input[name="email"]').click();
    await page.locator('#guestOrderTrackingForm input[name="email"]').fill('pub@prestashop.com');
    await page.getByRole('button', { name: 'Send' }).click();
    await page.waitForTimeout(5000);
  });

// TC06 : InValid Input
test('TC06', async ({ page }) => {
    await page.goto('http://localhost:8080/en/');
    await page.getByRole('link', { name: 'TrackOrder' }).click();
    await page.getByRole('button', { name: 'Send' }).click();
    await page.waitForTimeout(5000);
  });

// TC07 : InValid Order
test('TC07', async ({ page }) => {
    await page.goto('http://localhost:8080/en/');
    await page.getByRole('link', { name: 'TrackOrder' }).click();
    await page.locator('input[name="order_reference"]').click();
    await page.locator('input[name="order_reference"]').fill('FFATNOMMD');
    await page.locator('#guestOrderTrackingForm input[name="email"]').click();
    await page.locator('#guestOrderTrackingForm input[name="email"]').fill('pub@prestashop.com');
    await page.getByRole('button', { name: 'Send' }).click();
    await page.waitForTimeout(5000);
  });

// TC08 : InValid Code Order
test('TC08', async ({ page }) => {
    await page.goto('http://localhost:8080/en/');
    await page.getByRole('link', { name: 'TrackOrder' }).click();
    await page.locator('input[name="order_reference"]').click();
    await page.locator('input[name="order_reference"]').fill('FFATNO');
    await page.locator('#guestOrderTrackingForm input[name="email"]').click();
    await page.locator('#guestOrderTrackingForm input[name="email"]').fill('pub@prestashop.com');
    await page.getByRole('button', { name: 'Send' }).click();
    await page.waitForTimeout(5000);
  });

// TC09 : Valid Email
test('TC09', async ({ page }) => {
    await page.goto('http://localhost:8080/en/');
    await page.getByRole('link', { name: 'TrackOrder' }).click();
    await page.locator('input[name="order_reference"]').click();
    await page.locator('input[name="order_reference"]').fill('FFATNOMMJ');
    await page.locator('#guestOrderTrackingForm input[name="email"]').click();
    await page.locator('#guestOrderTrackingForm input[name="email"]').fill('nuttakit.t@kkumail.com');
    await page.getByRole('button', { name: 'Send' }).click();
    await page.waitForTimeout(5000);
  });