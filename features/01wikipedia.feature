Feature: Búsqueda y destacado de modelos Roland

Scenario: Buscar y destacar modelos Roland
  Given el usuario está en la página principal de Wikipedia
  When el usuario busca "Roland Corporation"
  Then el usuario busca y destaca los modelos TB-303, TR-909