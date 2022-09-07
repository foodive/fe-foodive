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
    cy.contains('p', 'Hello and welcome to Foodive! Select a Cuisine type and click the Search for Restaurant button to find a random restaurant in your city!')
  })

  it('should have an options section', () => {
    cy.get('.options-container').get('button').contains('American').should('have.attr', 'id').should('include', 'newamerican')
    cy.get('.options-container').get('button').contains('Chinese').should('have.attr', 'id').should('include', 'chinese')
  })

  it('should have a submit button for their choice', () => {
    cy.get('.submit')
  })

  it('should be able to select a cuisine', () => {
    cy.get('.options-container').get('button').contains('Mexican').click()
    cy.get('.options-container').get('button').contains('Mexican').should(($input) => {
      expect($input).to.not.have.class('unselected')
    })
  })

  it('should have contact info', () => {
    cy.get('.footer').contains('h3', 'Contact Us')
    cy.get('.project-lead').contains('.footer-text', 'Luke Swenson')
  })

  //This test will work only if you deny location on your browser.
  it.skip('should show an error message if user denies permission to location', () => {
    cy.visit('http://localhost:3000/', {
      onBeforeLoad(win) {
        const err = new Error('User denied')
        err.code = GeolocationPositionError.PERMISSION_DENIED
        cy.stub(win.navigator.geolocation, 'getCurrentPosition')
          .callsArgWith(0, err).as('getCurrentPosition')
      }
    })
    cy.get(".error-text").contains("We could not obtain your location. Please enable location permissions in settings.")
  })
});

