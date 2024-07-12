const credentials = "credentials"


describe('User login', () => {
    before(() => {
        cy.on('uncaught:exception', () => {
            return false
        })
    })  
    
    beforeEach(() => {
        cy.visit('/');
    })
    it('Verify the user is able to login with valid credentials', () => {
        cy.get('.fa-user').should('exist').and('be.visible').click();
        cy.get('.dropdown-menu-right').should('exist').and('be.visible').contains('Login').click();
        cy.get('#input-email').should('exist').and('be.visible').type('scandiumaccessment34@yopmail.com')
        cy.get('#input-password').should('exist').and('be.visible').type('Scandium@123')
        cy.get("[type='submit']").should('exist').and('be.visible').click()
        cy.get('div#content h2:first').should('have.text', "My Account")



    })
})