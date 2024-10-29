Feature: US04 - Beneficios Section
Como visitante de la página
Quiero poder saber qué beneficios me va a brindar esta empresa.

Scenario: E1: Acceder a la sección "Beneficios"
    Given que el visitante se encuentra en la landing page
    When selecciona la opción "Beneficios" en el Navigation Bar
    Then el sistema muestra la sección "Beneficios" con información sobre las ventajas que ofrece la empresa

Scenario: E2: Ver listado de beneficios ofrecidos
    Given que el visitante está en la sección "Beneficios"
    When explora la sección
    Then debería ver una lista de beneficios detallados y su descripción
