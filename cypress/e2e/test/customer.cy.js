 import { beforeEach } from 'mocha';
import {Login2} from '../page-objects/Login2';
 import {Customer} from '../page-objects/customer';

describe('Guru App', ()=> {
    let login = new Login2();
    let customer = new Customer();
    beforeEach(()=>{
        login('mngr4949175', 'UhYsyvE')
        cy.get('.menusubnav > :nth-child(2) > a').click()
    })
   
    it ('Create New Customer with valid Details', () => {
        customer.newCustomerForm() 
    })

    it ('Edit Customer', () => {

        cy.get('.menusubnav > :nth-child(3) > a').click
        cy.get('.menusubnav > :nth-child(3) > a').click
    })


   
})