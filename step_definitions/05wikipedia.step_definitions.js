const { Given, Then } = require('@cucumber/cucumber');
const { getPage } = require('../support/world');
const { highlightElements } = require('../support/highlight');

Given('el usuario está en la página de Ibanez', async () => {
  await getPage().goto('https://es.wikipedia.org/wiki/Ibanez');
  await getPage().waitForLoadState('networkidle');
});

Then('el usuario destaca los elementos "guitarras" y "bajos"', async () => {
  await highlightElements(getPage(), ['guitarras', 'bajos'], ['salmon', 'teal']);
});