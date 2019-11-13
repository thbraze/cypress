
describe('My First Test', function() {
    it('Test something', function() {
        cy.visit('https://example.cypress.io');
        cy.log("url visited").debug();

        cy.contains('type').click();
        cy.log("type clicked").debug();

        cy.url().should('include', '/commands/actions');
        cy.log("new url valid").debug();

        cy.get('.action-email')
            .type('fake@email.com')
            .should('have.value', 'fake@email.com');
        cy.log("value is well prompted").debug();
    });
});
