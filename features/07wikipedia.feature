Feature: Búsqueda y verificación de elementos en la página del Sintetizador Moog

  Scenario: Destacar elementos en la página del Sintetizador Moog
    Given el usuario está en la página del Sintetizador Moog
    Then el usuario destaca los elementos "Minimoog" y "Robert Moog"

  Scenario: Verificar el título de la página del Sintetizador Moog
    Given el usuario está en la página del Sintetizador Moog
    Then el título de la página del Sintetizador Moog es correcto