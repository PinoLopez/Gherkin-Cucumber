const { Given, Then } = require('@cucumber/cucumber');
const { getPage } = require('../support/world');
const { highlightElements } = require('../support/highlight');

Given('el usuario está en la página de Algarve', async () => {
  await getPage().goto('https://es.wikipedia.org/wiki/Algarve');
  await getPage().waitForLoadState('networkidle');
});

Then('el usuario destaca los elementos "Faro" y "Lagos"', async () => {
  await highlightElements(getPage(), ['Faro', 'Lagos'], ['orange', 'purple']);
});