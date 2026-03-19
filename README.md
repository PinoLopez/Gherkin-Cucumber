# Gherkin-Cucumber

Tests automatizados de navegador usando **Cucumber.js**, **Gherkin** y **Playwright**, con Wikipedia como sitio de prueba.

Todos los tests fueron escritos y ejecutados con Visual Studio Code bajo Linux.

---

## 📊 Informe de resultados

El informe HTML con los resultados de la última ejecución está publicado en GitHub Pages:

**👉 [Ver informe de tests](https://pinolopez.github.io/Gherkin-Cucumber/report/)**

El informe se genera y publica automáticamente con cada push a `main` mediante GitHub Actions.

---

## Qué demuestra este proyecto

- Estructura de tests BDD usando Gherkin (archivos `.feature` en español)
- Definiciones de pasos en JavaScript con Cucumber.js
- Automatización de navegador con Playwright (Chromium)
- Hooks compartidos para el ciclo de vida del navegador (`Before` / `After`)
- Módulos de apoyo reutilizables para evitar duplicación de código
- Reutilización de pasos entre diferentes features (feature 10 reutiliza el Given de feature 01)
- Integración continua con GitHub Actions
- Publicación automática de informe HTML en GitHub Pages

---

## Ejecución con navegador visible (modo "con cabeza")

A diferencia de muchos proyectos de automatización que corren en modo `headless` (sin interfaz gráfica), **estos tests abren un navegador Chromium real en entorno local** y ejecutan todas las acciones de forma visible en pantalla.

Esto permite ver en tiempo real cómo el test navega a cada página de Wikipedia y resalta los elementos de texto con diferentes colores.

En entorno de integración continua (CI), los tests se ejecutan en modo `headless` (sin abrir ventana) para poder generar el informe HTML automáticamente en el servidor.

---

## Requisitos previos

- [Node.js](https://nodejs.org/) v18 o superior
- Chromium (se descarga a través de Playwright — ver instalación)

---

## Instalación

```bash
npm install
npx playwright install chromium
```

---

## Ejecutar los tests

```bash
npm test
```

Cada escenario abre una ventana de Chromium, navega a una página de Wikipedia, realiza verificaciones y/o resalta elementos de texto, y cierra el navegador al terminar.

El informe HTML se genera automáticamente en `cucumber-report/index.html`.

---

## Escenarios de prueba (14 en total)

| # | Archivo feature | Página de Wikipedia | Escenarios |
|---|---|---|---|
| 01 | `01wikipedia.feature` | Roland Corporation | Búsqueda y destacado de TB-303 y TR-909 |
| 02 | `02wikipedia.feature` | El Cabrero | Destacado de Flamenco y Cantautor |
| 03 | `03wikipedia.feature` | Algarve | Destacado de Faro y Lagos |
| 04 | `04wikipedia.feature` | Land Rover | Destacado de todoterreno y Jaguar Land Rover |
| 05 | `05wikipedia.feature` | Ibanez | Destacado de guitarras y bajos |
| 06 | `06wikipedia.feature` | Anekdoten | Destacado de Rock progresivo y Suecia |
| 07 | `07wikipedia.feature` | Sintetizador Moog | Destacado de elementos + verificación de título |
| 08 | `08wikipedia.feature` | Fender Stratocaster | Destacado de elementos + verificación de título |
| 09 | `09wikipedia.feature` | Yamaha DX7 | Destacado de elementos + verificación de título |
| 10 | `10wikipedia.feature` | Búsqueda general | Verificación de navegación por búsqueda (2 escenarios) |

---

## Estructura del proyecto

```
.
├── .github/
│   └── workflows/
│       └── cucumber-tests.yml  # Pipeline de CI/CD
├── features/                   # Archivos de escenarios Gherkin (.feature)
├── step_definitions/           # Implementaciones de los pasos Cucumber (.js)
├── support/
│   ├── hooks.js                # Hooks Before/After (apertura y cierre del navegador)
│   ├── world.js                # Estado compartido de navegador y página
│   └── highlight.js            # Función reutilizable de resaltado de elementos
├── cucumber.js                 # Configuración de Cucumber + formato de informe
└── package.json
```

---

## Autor

Juan Pino Lopez — [github.com/PinoLopez](https://github.com/PinoLopez)