const { Given, Then } = require('@cucumber/cucumber');
const { getPage } = require('../support/world');
const { highlightElements } = require('../support/highlight');

Given('el usuario está en la página de Land Rover', async () => {
  await getPage().goto('https://es.wikipedia.org/wiki/Land_Rover');
  await getPage().waitForLoadState('networkidle', { timeout: 30000 });
});

Then('el usuario destaca los elementos "todoterreno" y "Jaguar Land Rover"', async () => {
  await highlightElements(getPage(), ['todoterreno', 'Jaguar Land Rover'], ['gold', 'silver']);
});