const { Given, Then } = require('@cucumber/cucumber');
const assert = require('assert');
const { getPage } = require('../support/world');
const { highlightElements } = require('../support/highlight');

Given('el usuario está en la página del Yamaha DX7', async () => {
  await getPage().goto('https://es.wikipedia.org/wiki/Yamaha_DX7');
  await getPage().waitForLoadState('networkidle');
});

Then('el usuario destaca los elementos "Yamaha" y "DX7"', async () => {
  await highlightElements(getPage(), ['Yamaha', 'DX7'], ['cyan', 'lime']);
});

Then('el título de la página del Yamaha DX7 es correcto', async () => {
  const heading = getPage().locator('h1#firstHeading');
  const headingText = await heading.textContent();
  assert.ok(
    headingText.toLowerCase().includes('dx7'),
    `Se esperaba "dx7" en el encabezado h1 pero se encontró: "${headingText}"`
  );
});