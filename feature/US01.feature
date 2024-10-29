Feature: US01 - Navigation Bar
Como visitante de la página web
Quiero poder observar el navegador para conocer el contenido que me brindará la página.

Scenario: E1: Visualizar el Navigation Bar en la landing page
    Given que el visitante se encuentra en la landing page
    When carga la página principal
    Then debería poder visualizar el Navigation Bar con las secciones principales: “About Us”, “Beneficios” y “Contacto”
    
Scenario: E2: Acceder a una sección a través del Navigation Bar
    Given que el visitante se encuentra en la landing page
    When selecciona la opción <Sección> en el Navigation Bar
    Then el sistema lo redirecciona a la sección seleccionada

    Examples: Sección
    | Sección       |
    | About Us      |
    | Beneficios    |
    | Contacto      |

