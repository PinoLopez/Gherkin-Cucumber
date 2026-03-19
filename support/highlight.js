/**
 * Desplaza la vista hacia cada elemento, lo resalta con el color indicado,
 * espera 1 segundo entre resaltados y 2 segundos al finalizar.
 *
 * @param {import('playwright').Page} page
 * @param {string[]} elementos - textos visibles a localizar en la página
 * @param {string[]} colores   - valores CSS de color, uno por elemento
 */
async function highlightElements(page, elementos, colores) {
  for (let i = 0; i < elementos.length; i++) {
    const locator = page.locator(`text=${elementos[i]}`).first();
    const elementHandle = await locator.elementHandle();

    await locator.scrollIntoViewIfNeeded();

    await page.evaluate(
      ({ element, highlightColor }) => {
        element.style.backgroundColor = highlightColor;
      },
      { element: elementHandle, highlightColor: colores[i] }
    );

    await new Promise((resolve) => setTimeout(resolve, 1000));
  }

  await new Promise((resolve) => setTimeout(resolve, 2000));
}

module.exports = { highlightElements };