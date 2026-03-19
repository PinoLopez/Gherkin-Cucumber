const { Given, When, Then } = require('@cucumber/cucumber');
const { getPage } = require('../support/world');
const { highlightElements } = require('../support/highlight');

Given('el usuario está en la página principal de Wikipedia', async () => {
  await getPage().goto('https://es.wikipedia.org/wiki/Wikipedia:Portada');
});

When('el usuario busca "Roland Corporation"', async () => {
  await getPage().fill('input[name="search"]', 'Roland Corporation');
  await getPage().press('input[name="search"]', 'Enter');
  await getPage().waitForLoadState('networkidle');
});

Then('el usuario busca y destaca los modelos TB-303, TR-909', async () => {
  await highlightElements(getPage(), ['TB-303', 'TR-909'], ['red', 'blue']);
});