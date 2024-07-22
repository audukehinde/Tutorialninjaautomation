
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

// -- Valid login method  --
Cypress.Commands.add('userValidLogin', () => {
    cy.clickElement(sel.loginPage.account_button);
    cy.get(sel.loginPage.login_button).should('exist').and('be.visible').contains('Login').click();
    cy.Inputelement(sel.loginPage.emailField, credentials.validLogin.email);
    cy.Inputelement(sel.loginPage.passwordField, credentials.validLogin.password);
    cy.clickElement(sel.loginPage.submit);
    cy.verifyUrl('/account');
    cy.logout();
})

// -- Invalid login method. Email is invalid and password is invalid  --
Cypress.Commands.add('userInvalidLogin', () => {
    cy.clickElement(sel.loginPage.account_button);
    cy.get(sel.loginPage.login_button).should('exist').and('be.visible').contains('Login').click();
    cy.Inputelement(sel.loginPage.emailField, credentials.invalidLogin.email);
    cy.Inputelement(sel.loginPage.passwordField, credentials.invalidLogin.password);
    cy.clickElement(sel.loginPage.submit);
    cy.verifyUrl('/login');
})

// -- User clicks on the Login Button with empty fields --
Cypress.Commands.add('userEmptyLogin', () => {
    cy.clickElement(sel.loginPage.account_button);
    cy.get(sel.loginPage.login_button).should('exist').and('be.visible').contains('Login').click();
    cy.Inputelement(sel.loginPage.emailField, '');
    cy.Inputelement(sel.loginPage.passwordField, '');
    cy.clickElement(sel.loginPage.submit);
    cy.verifyUrl('/login');
})

// -- Logout Method --
Cypress.Commands.add('logout', () => {
    cy.clickElement(sel.loginPage.account_button);
    cy.get('ul.dropdown-menu.dropdown-menu-right').should('be.visible')
    .find('a').contains('Logout').click();
    cy.verifyUrl('/logout');
})

// -- This method clicks any button on the UI --
Cypress.Commands.add('clickElement',(ele) => {
    cy.get(ele).should('exist').and('be.visible').click();
})

// -- This method inputs data into any textbox on the UI --
Cypress.Commands.add('Inputelement',(ele, data) => {
    cy.get(ele).should('exist').and('be.visible').fill(data)
})

// -- Url verification for expected result --
Cypress.Commands.add('verifyUrl', (path) => {
    cy.url().should('include', path);
});

