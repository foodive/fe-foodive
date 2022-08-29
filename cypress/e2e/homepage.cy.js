describe('homepage flow', () => {
  it('can visit the homepage', () => {
    cy.visit("http://localhost:3000/");
  });

  it('can visit the recommendation page when the search button is clicked', () => {
    cy.visit("http://localhost:3000/")
      .get('.submit').click()
      .url().should('eq', 'http://localhost:3000/recommendation');
  });
});