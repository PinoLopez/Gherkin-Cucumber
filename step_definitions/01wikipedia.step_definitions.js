const { Given, When, Then } = require('@cucumber/cucumber');
    const { chromium } = require('playwright');
    const assert = require('assert');

    let page, browser;

    Given('el usuario está en la página principal de Wikipedia', async () => {
      browser = await chromium.launch({
        headless: false,
        viewport: { width: 1920, height: 1080 },
      });
      page = await browser.newPage();
      await page.goto('https://es.wikipedia.org/wiki/Wikipedia:Portada');
    });

    When('el usuario busca "Roland Corporation"', async () => {
      await page.fill('input[name="search"]', 'Roland Corporation');
      await page.press('input[name="search"]', 'Enter');
      await page.waitForLoadState('networkidle');
    });

    Then('el usuario busca y destaca los modelos TB-303, TR-909', async () => {
      const modelos = ['TB-303', 'TR-909'];
      const colores = ['red', 'blue'];

      for (let i = 0; i < modelos.length; i++) 
        {
        const modelo = modelos[i];
        const color = colores[i];

        const elemento = await page.locator(`text=${modelo}`).first();
        const elementHandle = await elemento.elementHandle(); // Obtener el ElementHandle

        await elemento.scrollIntoViewIfNeeded();

        // Envolver los argumentos en un objeto, pasando elementHandle
        await page.evaluate(
          ({ element, highlightColor }) => {
            element.style.backgroundColor = highlightColor;
          },
          { element: elementHandle, highlightColor: color }
        );

        await new Promise((resolve) => setTimeout(resolve, 1000));
      }

      await new Promise((resolve) => setTimeout(resolve, 2000));
      await browser.close();
    });