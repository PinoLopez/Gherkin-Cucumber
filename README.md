# Gherkin-Cucumber

Tests automatizados de navegador usando **Cucumber.js**, **Gherkin** y **Playwright**, con Wikipedia como sitio de prueba.

Todos los tests fueron escritos y ejecutados con Visual Studio Code bajo Linux.

---

## Qué demuestra este proyecto

- Estructura de tests BDD usando Gherkin (archivos `.feature` en español)
- Definiciones de pasos en JavaScript con Cucumber.js
- Automatización de navegador con Playwright (Chromium)
- Hooks compartidos para el ciclo de vida del navegador (`Before` / `After`)
- Módulos de apoyo reutilizables para evitar duplicación de código entre escenarios

---

## Ejecución con navegador visible (modo "con cabeza")

A diferencia de muchos proyectos de automatización que corren en modo `headless` (sin interfaz gráfica), **estos tests abren un navegador Chromium real** y ejecutan todas las acciones de forma visible en pantalla.

Esto permite ver en tiempo real cómo el test navega a cada página de Wikipedia y resalta los elementos de texto con diferentes colores. Es una decisión deliberada para hacer la demostración más clara e ilustrativa.

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

Cada escenario abre una ventana de Chromium, navega a una página de Wikipedia, resalta elementos de texto con colores específicos y cierra el navegador al terminar.

---

## Escenarios de prueba

| # | Archivo feature | Página de Wikipedia | Elementos resaltados |
|---|---|---|---|
| 1 | `01wikipedia.feature` | Roland Corporation | TB-303 (rojo), TR-909 (azul) |
| 2 | `02wikipedia.feature` | El Cabrero | Flamenco (amarillo), Cantautor (cian) |
| 3 | `03wikipedia.feature` | Algarve | Faro (naranja), Lagos (morado) |
| 4 | `04wikipedia.feature` | Land Rover | todoterreno (dorado), Jaguar Land Rover (plateado) |
| 5 | `05wikipedia.feature` | Ibanez | guitarras (salmón), bajos (verde azulado) |
| 6 | `06wikipedia.feature` | Anekdoten | Rock progresivo (amarillo), Suecia (verde claro) |

---

## Estructura del proyecto

```
.
├── features/               # Archivos de escenarios Gherkin (.feature)
├── step_definitions/       # Implementaciones de los pasos Cucumber (.js)
├── support/
│   ├── hooks.js            # Hooks Before/After (apertura y cierre del navegador)
│   ├── world.js            # Estado compartido de navegador y página
│   └── highlight.js        # Función reutilizable de resaltado de elementos
├── cucumber.js             # Configuración de Cucumber
└── package.json
```

---

## Autor

Juan Pino Lopez — [github.com/PinoLopez](https://github.com/PinoLopez)