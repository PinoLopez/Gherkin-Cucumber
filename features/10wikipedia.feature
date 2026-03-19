Feature: Verificación de la función de búsqueda en Wikipedia

  Scenario: Buscar un artículo y verificar la navegación correcta
    Given el usuario está en la página principal de Wikipedia
    When el usuario busca el término "Minimoog"
    Then la URL de la página contiene "Minimoog"

  Scenario: Buscar otro artículo y verificar la navegación correcta
    Given el usuario está en la página principal de Wikipedia
    When el usuario busca el término "Fender Stratocaster"
    Then la URL de la página contiene "Stratocaster"