export class Login2 {
    loginForm (userId, password) {
        cy.get(':nth-child(1) > :nth-child(2) > input').type(userId);
        cy.get(':nth-child(2) > :nth-child(2) > input').type(password);
        cy.get('[type="submit"]').click()
    
    }

}


