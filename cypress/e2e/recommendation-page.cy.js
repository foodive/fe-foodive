describe('Recommendation page flow', () => {

  beforeEach(() => {
    function mockLocation(latitude, longitude) {
      return {
        onBeforeLoad(win) {
          cy.stub(win.navigator.geolocation, "getCurrentPosition").callsFake((cb, err) => {
            if (latitude && longitude) {
              return cb({ coords: { latitude, longitude } });
            }
            throw err({ code: 1 });
          });
        }
      };
    }

    cy.intercept("GET", "https://foodive-be.herokuapp.com/restaurants/?location=47.6062,-122.3321&categories=breakfast_brunch", {
      fixture: "restaurant1.json",
      statusCode: 200
    })
    cy.visit("http://localhost:3000/", mockLocation(47.6062, -122.3321))
    cy.wait(5000)
    cy.get('.options-container').get('button').contains("Breakfast").click()
    cy.get('.submit').click()
  })

  it('Should take user to new page', () => {
    cy.url().should('eq', 'http://localhost:3000/recommendation/breakfast_brunch')
  })

  it('should contain name of restaurant', () => {
    cy.get('.info-header').contains('h2', 'Biscuit Bitch')
  })

  it('should contain an image preview', () => {
    cy.get('.restaurant-image').get('img').should('have.attr', 'src', 'https://s3-media2.fl.yelpcdn.com/bphoto/2fZeq9jDHjrrqPjCulGc8A/o.jpg')
  })

  it('should contain restaurant information', () => {
    cy.get('.ratings').contains('4.5')
    cy.get('.cuisine').contains('Breakfast & Brunch, Southern, Coffee & Tea')
    cy.get('.cost').contains('$$')
    cy.get('.phone-number').contains('(206) 728-2219')
    cy.get('.address').contains('2303 3rd Ave, Seattle, WA 98121')
  })
})