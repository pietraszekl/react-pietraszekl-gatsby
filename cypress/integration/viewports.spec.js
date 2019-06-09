/// <reference types="Cypress" />

context('Viewport', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('above the fold should contain name', () => {
    // https://on.cypress.io/viewport
    cy.viewport('iphone-6')
    cy.get('.section.hero').should('be.visible')
  })
  it('footer should be visible', () => {
    cy.get('footer').scrollIntoView() // Scrolls 'footer' into view
  })
})
