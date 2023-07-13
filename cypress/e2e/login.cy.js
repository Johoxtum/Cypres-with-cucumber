describe('Login Feature', () => {
  it('Success login', () => {
    cy.visit('/')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.url().should('contain','inventory.html')
    cy.get('.title').should('have.text','Products')
  })
})