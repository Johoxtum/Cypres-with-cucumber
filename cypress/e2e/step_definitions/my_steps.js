import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given("Estoy en la página de inicio de sesión", () =>{
    cy.visit('https://www.saucedemo.com/')
})

When("Ingreso mis credenciales válidas", () =>{

    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
})

Then("Debería ver la página url {string} con un titulo de bienvenida {string}", (url,title) =>{

    cy.url().should('contain',url)
    cy.get('.title').should('have.text',title)
})

When("El usuario ingresa un nombre de usuario inválido {string} y una contraseña inválida {int}", function (username,password) {

    cy.get('#user-name').type(username)
    cy.get('#password').type(password)
    cy.get('#login-button').click()

});
Then("El usuario ve el siguiente mensaje de error {string}", function (message) {

    cy.get('h3[data-test=\'error\']').should('have.text',message)

});