// https://docs.cypress.io/guides/testing-strategies/google-authentication#Custom-Command-for-Google-Authentication

describe('Navigation header', () => {
  it('Login button exists', () => {
    cy.visit('http://localhost:5000/');
    cy.get('[data-cy=login-link]').should('have.text', ' Login with Google');
  });

  //   it('Google auth url', () => {
  //     cy.visit('http://localhost:8000/auth/google');
  //     cy.get('#Email').type('qabingelist@gmail.com').should('have.value', 'qabingelist@gmail.com');
  //     cy.get('#next').click();
  //     cy.get('#password').type('v3i8gq55rsq4hnsjaok2e6lp7tdu2fce');
  //     cy.get('#submit').click();
  //     // v3i8gq55rsq4hnsjaok2e6lp7tdu2fce
  //     // cy.contains('type').click();

  //     // cy.url().should('include', '/commands/actions');

  //     // cy.get('.action-email').type('fake@email.com');
  //   });

  ///
});
