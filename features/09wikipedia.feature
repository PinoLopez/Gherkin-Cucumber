Feature: Búsqueda y verificación de elementos en la página del Yamaha DX7

  Scenario: Destacar elementos en la página del Yamaha DX7
    Given el usuario está en la página del Yamaha DX7
    Then el usuario destaca los elementos "Yamaha" y "DX7"

  Scenario: Verificar el título de la página del Yamaha DX7
    Given el usuario está en la página del Yamaha DX7
    Then el título de la página del Yamaha DX7 es correcto