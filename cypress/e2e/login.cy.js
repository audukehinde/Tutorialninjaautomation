
describe('User login', () => { 
    beforeEach(() => {
        cy.visit('/');
    })
    
    // -- User login with Valid Credentials  --
    it('Login with valid credentials', () => {
      cy.userValidLogin()
    })

    // -- User login with Invalid credentials. Email is invalid and password is invalid  --
    it('Login with Invalid credentials', () => {
        cy.userInvalidLogin()
    })
    
    // -- User clicks on the Login Button with empty fields --
    it('User clicks on the Login Button with empty fields', () => {
        cy.userEmptyLogin()
    })
})