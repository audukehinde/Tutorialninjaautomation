
describe('User login', () => { 
    beforeEach(() => {
        cy.visit('/');
    })
    it('Login with valid credentrails', () => {
      cy.userLogin()
    })
})