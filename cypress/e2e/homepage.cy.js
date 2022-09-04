describe('homepage flow', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/")
  })
  
  it('can visit the homepage', () => {
    cy.visit("http://localhost:3000/")
  })

  it('should see a title', () => {
    cy.contains('h1', 'Foodive')
  })

  it('should have a description', () => {
    cy.contains('p', 'Hello and welcome to Foodive! Select a Cuisine type and click the search for restaurant button to find a random restaurant near you!')
  })

  it('should have an options section', () => {
    cy.get('.options-container').get('button').contains('American').should('have.attr', 'id').should('include', 'newamerican')
    cy.get('.options-container').get('button').contains('Chinese').should('have.attr', 'id').should('include', 'chinese')
  })

  it('should have a submit button for their choice', () => {
    cy.get('.submit')
  })

  it('should have contact info', () => {
    cy.get('.footer').contains('h3', 'Contact Us')
    cy.get('.project-lead').contains('.footer-text', 'Luke Swenson')
  })
});

