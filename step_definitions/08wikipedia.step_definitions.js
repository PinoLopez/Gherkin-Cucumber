const { Given, Then } = require('@cucumber/cucumber');
const assert = require('assert');
const { getPage } = require('../support/world');
const { highlightElements } = require('../support/highlight');

Given('el usuario está en la página de la Fender Stratocaster', async () => {
  await getPage().goto('https://es.wikipedia.org/wiki/Fender_Stratocaster');
  await getPage().waitForLoadState('networkidle');
});

Then('el usuario destaca los elementos "Fender" y "Leo Fender"', async () => {
  await highlightElements(getPage(), ['Fender', 'Leo Fender'], ['red', 'orange']);
});

Then('el título de la página de la Fender Stratocaster es correcto', async () => {
  const heading = getPage().locator('h1#firstHeading');
  const headingText = await heading.textContent();
  assert.ok(
    headingText.toLowerCase().includes('stratocaster'),
    `Se esperaba "stratocaster" en el encabezado h1 pero se encontró: "${headingText}"`
  );
});