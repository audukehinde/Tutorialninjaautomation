describe('User Signup', () => { 
    beforeEach(() => {
        cy.visit('/');
    })
    
    // -- New Create Account  --
    it('Login with valid credentials', () => {
      cy.createAccount()
    })

})