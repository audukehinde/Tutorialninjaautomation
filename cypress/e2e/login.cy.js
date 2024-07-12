let credentials


describe('User login', () => {
    before(() => {
        cy.on('uncaught:exception', () => {
            return false
        })
    })  
    
    beforeEach(() => {
        cy.visit('/');
        cy.fixture('credentials').then((creds) => {
            credentials = creds; // Assign fixture data to the outer scope variable
        });
    })
    it('Verify the user is able to login with valid credentials', () => {
        cy.get('.fa-user').should('exist').and('be.visible').click();
        cy.get('.dropdown-menu-right').should('exist').and('be.visible').contains('Login').click();
        cy.get('#input-email').should('exist').and('be.visible').type(credentials.email)
        cy.get('#input-password').should('exist').and('be.visible').type(credentials.password)
        cy.get("[type='submit']").should('exist').and('be.visible').click()
        cy.get('div#content h2:first').should('have.text', "My Account")
        cy.url().should('include', '/account');
    })
})