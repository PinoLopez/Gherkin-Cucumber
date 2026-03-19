Feature: Búsqueda y verificación de elementos en la página de la Fender Stratocaster

  Scenario: Destacar elementos en la página de la Fender Stratocaster
    Given el usuario está en la página de la Fender Stratocaster
    Then el usuario destaca los elementos "Fender" y "Leo Fender"

  Scenario: Verificar el título de la página de la Fender Stratocaster
    Given el usuario está en la página de la Fender Stratocaster
    Then el título de la página de la Fender Stratocaster es correcto