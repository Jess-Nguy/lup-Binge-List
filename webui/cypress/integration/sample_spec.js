describe('My first test', () => {
  it('Gets, type and asserts', () => {
    cy.visit('https://example.cypress.io');

    cy.contains('type').click();

    cy.url().should('include', '/commands/actions');

    cy.get('.action-email').type('fake@email.com');
  });
});
