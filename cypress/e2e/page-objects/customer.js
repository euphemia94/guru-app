export class Customer {

    newCustomerName(){
        
        cy.get('tbody > :nth-child(4) > :nth-child(2)').type('uche')

    }
selectGender() {

    cy.get(':nth-child(4) > :nth-child(2) > input'); cy.get('[value="f"]').click 
}
dateOfbirth (){
    cy.get('tbody > :nth-child(6) > :nth-child(1)'); cy.get('#dob').click
}
address() {

    cy.get('tbody > :nth-child(7) > :nth-child(1)'); cy.get('textarea').type('Govt. Land, Road')
}
city() {
    cy.get('tbody > :nth-child(8) > :nth-child(1)'); cy.get(':nth-child(8) > :nth-child(2) > input').type('Gora')
}
state() {
    cy.get('tbody > :nth-child(9) > :nth-child(1)'); cy.get(':nth-child(9) > :nth-child(2) > input').type('Nigeria')
}

PIN() {
    cy.get('tbody > :nth-child(10) > :nth-child(1)'); cy.get(':nth-child(10) > :nth-child(2) > input').type('800232')
}
mobileName () {
    cy.get('tbody > :nth-child(11) > :nth-child(1)'); cy.get(':nth-child(11) > :nth-child(2) > input').type('07069029596')
}
email() {
    cy.get('tbody > :nth-child(12) > :nth-child(1)'); cy.get(':nth-child(12) > :nth-child(2) > input').type('euphemiauc94@gmail.com')
}
passward() {
    cy.get('tbody > :nth-child(13) > :nth-child(1)'); cy.get(':nth-child(13) > :nth-child(2) > input').type('uche94');  
}
submit(){
    cy.get('[type="submit"]').click
    cy.get('[type="reset"]').click
}
}