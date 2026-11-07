import { expect, test } from '@playwright/test';

async function openContact(page) {
  const menu = page.getByRole('img', { name: 'menu', exact: true });
  if (await menu.isVisible()) await menu.click();
  await page.getByRole('link', { name: 'Contact', exact: true }).click();
  await expect(page).toHaveURL(/#contact$/);
  await expect(page.getByRole('heading', { name: 'Contact', exact: true })).toBeInViewport();
}

test('renders the homepage and loads project previews as visitors scroll', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  const previews = page.getByRole('img', { name: /website preview$/ });
  await expect(previews.first()).toBeAttached();
  for (const preview of await previews.all()) {
    await preview.scrollIntoViewIfNeeded();
    await expect.poll(() => preview.evaluate(image => image.complete && image.naturalWidth > 0)).toBe(true);
  }
});

test('loads the globe only near Contact', async ({ page }) => {
  const models = [];
  page.on('request', request => {
    if (new URL(request.url()).pathname === '/planet/scene.gltf') models.push(request);
  });

  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  expect(models).toHaveLength(0);

  const model = page.waitForResponse(response => new URL(response.url()).pathname === '/planet/scene.gltf');
  await openContact(page);
  expect((await model).ok()).toBe(true);
});

for (const scenario of [
  { name: 'success', status: 200, body: 'OK', message: /Thank you/ },
  { name: 'failure', status: 500, body: 'Test failure', message: /something went wrong/ },
]) {
  test(`handles contact submission ${scenario.name}`, async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.route('https://api.emailjs.com/**', route => route.fulfill({
      status: scenario.status,
      body: scenario.body,
      headers: { 'access-control-allow-origin': '*' },
    }));
    await page.goto('/');
    await openContact(page);
    const name = page.getByRole('textbox', { name: 'Name', exact: true });
    await name.fill('Portfolio Test');
    await page.getByRole('textbox', { name: 'Email', exact: true }).fill('test@example.com');
    await page.getByRole('textbox', { name: 'Message', exact: true }).fill('Automated test message');

    const dialogMessage = page.waitForEvent('dialog').then(async dialog => {
      const message = dialog.message();
      await dialog.accept();
      return message;
    });
    const emailResponse = page.waitForResponse(response =>
      response.url() === 'https://api.emailjs.com/api/v1.0/email/send' &&
      response.request().method() === 'POST'
    );
    await page.getByRole('button', { name: 'Send', exact: true }).click();
    expect((await emailResponse).status()).toBe(scenario.status);
    expect(await dialogMessage).toMatch(scenario.message);
    await expect(name).toHaveValue(scenario.status === 200 ? '' : 'Portfolio Test');
  });
}
