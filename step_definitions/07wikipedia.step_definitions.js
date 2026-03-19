const { Given, Then } = require('@cucumber/cucumber');
const assert = require('assert');
const { getPage } = require('../support/world');
const { highlightElements } = require('../support/highlight');

Given('el usuario está en la página del Sintetizador Moog', async () => {
  await getPage().goto('https://es.wikipedia.org/wiki/Sintetizador_Moog');
  await getPage().waitForLoadState('networkidle', { timeout: 30000 });
});

Then('el usuario destaca los elementos "Minimoog" y "Robert Moog"', async () => {
  await highlightElements(getPage(), ['Minimoog', 'Robert Moog'], ['yellow', 'lightblue']);
});

Then('el título de la página del Sintetizador Moog es correcto', async () => {
  const heading = getPage().locator('h1#firstHeading');
  const headingText = await heading.textContent();
  assert.ok(
    headingText.toLowerCase().includes('moog'),
    `Se esperaba "moog" en el encabezado h1 pero se encontró: "${headingText}"`
  );
});