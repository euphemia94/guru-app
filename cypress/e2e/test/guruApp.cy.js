 import {Login2} from '../page-objects/Login2';
 import {Customer} from '../page-objects/customer';

describe ('Guru App', ()=> {

    let login2 = new Login2();

    let customer = new Customer();

    it('Login Module', () =>{
cy.visit('https://demo.guru99.com/v4/');
login2.loginForm('mngr476645', 'qErUbEs');

    })

    it ('Home page', () => {

        cy.get('.menusubnav > :nth-child(2) > a').click()
    })

    it ('New Customer Details', () => {

        customer.newCustomerName()
        customer.selectGender()
        customer.dateOfbirth()
        customer.address()
        customer.city()
        customer.state()
        customer.PIN()
        customer.mobileName()
        customer.email()
        customer.passward()
        customer.submit()
    })

    it ('Edit Customer', () => {

        cy.get('.menusubnav > :nth-child(3) > a').click
        cy.get('.menusubnav > :nth-child(3) > a').click
    })


   
})