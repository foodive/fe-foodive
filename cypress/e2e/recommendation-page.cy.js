describe.skip('Recommendation page flow', () => {
  
  beforeEach(() => {
    cy.visit("http://localhost:3000/")
    cy.get('.options-container').get('button').contains('Mexican').click()
    cy.get('.submit').click()
  })

  it('should take the user to recommendation page', () => {
    cy.url().should('eq', 'http://localhost:3000/recommendation')
  })

  it('should contain name of restaurant', () => {
    cy.get('.info-header')
    // .contains('h2', '')
  })

  it('should contain an image preview', () => {
    cy.get('.restaurant-image').get('img')
  })

  it('should contain ', () => {
    cy.get('.restaurant-image').get('img')
  })
})