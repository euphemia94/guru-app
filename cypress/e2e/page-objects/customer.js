export class Customer {

    newCustomerForm(name, dob, addr, city, state, pin, mn, email, psw){
        cy.get('tbody > :nth-child(4) > :nth-child(2)').type(name)
     
        cy.get('[value="f"]').click()

        cy.get('#dob').type(dob)
 
        cy.get('textarea').type(addr)

        cy.get(':nth-child(8) > :nth-child(2) > input').type(city)

        cy.get(':nth-child(9) > :nth-child(2) > input').type(state)
   
        cy.get(':nth-child(10) > :nth-child(2) > input').type(pin);
     
        cy.get(':nth-child(11) > :nth-child(2) > input').type(mn);

        cy.get(':nth-child(12) > :nth-child(2) > input').type(email);

        cy.get(':nth-child(13) > :nth-child(2) > input').type(psw);  
 
        cy.get('[type="submit"]').click()
    }
}