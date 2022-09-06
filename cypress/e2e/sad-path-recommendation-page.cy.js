describe("Recommendation page sad paths", () => {
  it("should display error message if the page is not found", () => {
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
      statusCode: 404
    })
    cy.visit("http://localhost:3000/recommendation/breakfast_brunch", mockLocation(47.6062, -122.3321))
    .get(".error-text").contains("Sorry, something went wrong!")
  })

  it("should display error message if the server is down", () => {
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
      statusCode: 500
    })
    cy.visit("http://localhost:3000/recommendation/breakfast_brunch", mockLocation(47.6062, -122.3321))
    .get(".error-text").contains("Sorry, something went wrong!")
  })
})

