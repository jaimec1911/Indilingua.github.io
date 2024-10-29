Feature: US02 - About Us Section
Como visitante de la página web
Quiero tener información de la empresa como su origen y sus servicios que brinda.

Scenario: E1: Acceder a la sección "About Us"
    Given que el visitante se encuentra en la landing page
    When selecciona la opción "About Us" en el Navigation Bar
    Then el sistema muestra la sección "About Us" con información sobre el origen de la empresa y sus servicios
    
Scenario: E2: Ver detalles de los servicios en la sección "About Us"
    Given que el visitante está en la sección "About Us"
    When explora la sección
    Then debería ver una lista detallada de los servicios que la empresa brinda
