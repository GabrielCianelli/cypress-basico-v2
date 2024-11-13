Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
  cy.get('#firstName').type('Gabriel')
  cy.get('#lastName').type('Cianelli')
  cy.get('#email').type('gabrielcianelli@ex.com')
  cy.get('#open-text-area').type('ok')
  cy.contains('button', 'Enviar').click() 
})