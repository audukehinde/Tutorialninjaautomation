// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
let sel
let credentials
 before(() => {
    cy.on('uncaught:exception', () => {
        return false
    })
    cy.fixture('selector').then((data) => {
        sel = data
    })
}) 

beforeEach(() => {
    cy.visit('/');
    cy.fixture('credentials').then((creds) => {
        credentials = creds;
    });
})
// -- This is a parent command --
Cypress.Commands.add('userLogin', () => {
    cy.ClickElement(sel.account_button);
    cy.get(sel.login_button).should('exist').and('be.visible').contains('Login').click();
    cy.Inputelement(sel.emailField, credentials.email);
    cy.Inputelement(sel.passwordField, credentials.password);
    cy.ClickElement(sel.submit);
    cy.url().should('include', '/account');
})


//
//
// -- This is a click action --
Cypress.Commands.add('ClickElement',(ele) => {
    cy.get(ele).should('exist').and('be.visible').click();
})

Cypress.Commands.add('Inputelement',(ele, data) => {
    cy.get(ele).should('exist').and('be.visible').fill(data)
})
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })