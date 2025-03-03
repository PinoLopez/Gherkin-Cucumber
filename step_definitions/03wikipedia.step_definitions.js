const { Given, Then } = require('@cucumber/cucumber');
    const { chromium } = require('playwright');

    let page, browser;

    Given('el usuario está en la página de Algarve', async () => {
      browser = await chromium.launch({
        headless: false,
        viewport: { width: 1920, height: 1080 },
      });
      page = await browser.newPage();
      await page.goto('https://es.wikipedia.org/wiki/Algarve');
      await page.waitForLoadState('networkidle');
    });

    Then('el usuario destaca los elementos "Faro" y "Lagos"', async () => {
      const elementos = ['Faro', 'Lagos'];
      const colores = ['orange', 'purple'];

      for (let i = 0; i < elementos.length; i++) {
        const elemento = elementos[i];
        const color = colores[i];

        const locator = await page.locator(`text=${elemento}`).first();
        const elementHandle = await locator.elementHandle();

        await locator.scrollIntoViewIfNeeded();

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