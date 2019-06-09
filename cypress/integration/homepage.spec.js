context('Homepage', function() {
  beforeEach(function() {
    cy.visit('/')
  })
  it('Title should include "Senior Frontend', () => {
    // https://on.cypress.io/title
    cy.title().should('include', 'Senior Frontend ')
  })
  it('Title should contain "Lukasz Pietraszek"', () => {
    // https://on.cypress.io/title
    cy.title().should('include', 'Lukasz Pietraszek')
    cy.screenshot()
  })
})
