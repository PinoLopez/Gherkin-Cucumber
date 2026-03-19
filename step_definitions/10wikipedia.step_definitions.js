const { When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
const { getPage } = require('../support/world');

// Nota: el paso Given 'el usuario está en la página principal de Wikipedia'
// está definido en 01wikipedia.step_definitions.js y se reutiliza aquí,
// lo que demuestra la compartición de pasos entre features en Cucumber.

When('el usuario busca el término {string}', async (termino) => {
  await getPage().fill('input[name="search"]', termino);
  await getPage().press('input[name="search"]', 'Enter');
  await getPage().waitForLoadState('networkidle');
});

Then('la URL de la página contiene {string}', async (textoEsperado) => {
  const url = getPage().url();
  assert.ok(
    url.includes(textoEsperado),
    `Se esperaba "${textoEsperado}" en la URL pero se encontró: "${url}"`
  );
});