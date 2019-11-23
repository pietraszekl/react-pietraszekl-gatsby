context('On Load', function() {
  beforeEach(function() {
    cy.visit('/')
  })

  it('Verify tests are running', function() {
    expect(true).to.equal(true)
  })
  it('cy.window() - get the global window object', () => {
    // https://on.cypress.io/window
    cy.window().should('have.property', 'top')
  })
  it('cy.document() - get the document object', () => {
    // https://on.cypress.io/document
    cy.document()
      .should('have.property', 'charset')
      .and('eq', 'UTF-8')
  })
})
