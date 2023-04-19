import {Login} from '../page-objects/Login'

describe('Login Module', ()=>{
let ogin = new Login();
    beforeEach(()=> {
        cy.visit('https://www.saucedemo.com/')
    })

    it('login problem_user', () => {
        ogin.loginForm('problem_user','secret_sauce'); 
        cy.get('.shopping_cart_link')
        .should('be.visible')
    })
    
        it('login performance_glitch_user', () => {
             
            cy.get('[data-test="username"]').type('performance_glitch_user')
            cy.get('[data-test="password"]').type('secret_sauce')
            cy.get('#login-button').click()
            cy.get('.peek').click()
        })
    })
    
   
           
        
        
        
    
    
