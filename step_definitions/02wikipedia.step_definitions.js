const { Given, Then } = require('@cucumber/cucumber');
const { getPage } = require('../support/world');
const { highlightElements } = require('../support/highlight');

Given('el usuario está en la página de El Cabrero', async () => {
  await getPage().goto('https://es.wikipedia.org/wiki/El_Cabrero');
  await getPage().waitForLoadState('networkidle', { timeout: 30000 });
});

Then('el usuario destaca los elementos "Flamenco", "Cantautor"', async () => {
  await highlightElements(getPage(), ['Flamenco', 'Cantautor'], ['yellow', 'cyan']);
});