export class Login {
    loginForm (username, password){
        cy.get('[data-test="username"]').type(username);
        cy.get('[data-test="password"]').type(password)
        cy.get('#login-button').click();

    }
    
}