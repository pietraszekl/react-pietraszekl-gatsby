context('Click actions', () => {
  const CV_URL = 'https://media.graphcms.com/EaNxAopdR1W31zPEZmzA'
  beforeEach(() => {
    cy.visit('/')
  })
  it('Download CV button', () => {
    cy.get('.button').contains('Download CV')
    cy.get('.button').should('have.attr', 'href', CV_URL)
  })
  it('Each project thumbnail should link to page', () => {
    cy.get('.project-thumbnail').each(function($el) {
      cy.get($el).should('have.attr', 'href')
    })
  })
})
