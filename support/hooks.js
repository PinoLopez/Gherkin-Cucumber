const { Before, After } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const { setBrowser, setPage, getBrowser } = require('./world');

// Se lanza un navegador Chromium real antes de cada escenario.
// El viewport se configura en newPage(), que es el lugar correcto en Playwright.
// Los tests corren en modo CON cabeza (headless: false), lo que significa que
// el navegador se abre visualmente y todas las acciones se ven en tiempo real.
Before({ timeout: 30000 }, async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage({
    viewport: { width: 1920, height: 1080 }
  });
  setBrowser(browser);
  setPage(page);
});

// Se cierra el navegador tras cada escenario, incluso si el test falla.
// El timeout se amplía a 30s para que browser.close() finalice correctamente
// tras escenarios con múltiples resaltados y tiempos de espera.
After({ timeout: 30000 }, async () => {
  const browser = getBrowser();
  if (browser) await browser.close();
});