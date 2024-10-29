Feature: US03 - Contact Us Section
Como visitante de la página
Quiero poder contactarme con la empresa vía email o mensaje.

Scenario: E1: Acceder a la sección "Contact Us"
    Given que el visitante se encuentra en la landing page
    When selecciona la opción "Contacto" en el Navigation Bar
    Then el sistema muestra el formulario de contacto en la sección "Contact Us"

Scenario: E2: Completar el formulario de contacto
    Given que el visitante se encuentra en la sección "Contact Us"
    When completa los campos de <Nombre> <Correo> <Mensaje>
    And da clic en el botón “Enviar”
    Then el sistema envía el mensaje al correo de la empresa y muestra un mensaje de confirmación

Examples: INPUT
  | Nombre   | Correo               | Mensaje                                      |
  | Ana      | ana@example.com      | Quisiera saber más sobre sus servicios       |

