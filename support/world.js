// Estado compartido para las instancias de navegador y página.
// Usar variables a nivel de módulo evita duplicar la lógica de lanzamiento
// en cada archivo de definición de pasos y previene conflictos entre variables.

let browser;
let page;

module.exports = {
  getBrowser: () => browser,
  getPage:    () => page,
  setBrowser: (b) => { browser = b; },
  setPage:    (p) => { page = p; }
};