const { Given, Then } = require('@cucumber/cucumber');
const { getPage } = require('../support/world');
const { highlightElements } = require('../support/highlight');

Given('el usuario está en la página de Anekdoten en Wikipedia', async () => {
  await getPage().goto('https://es.wikipedia.org/wiki/Anekdoten');
  await getPage().waitForLoadState('networkidle');
});

Then('el usuario destaca los elementos "Rock progresivo", "Suecia"', async () => {
  await highlightElements(getPage(), ['Rock progresivo', 'Suecia'], ['yellow', 'lightgreen']);
});