import {Login} from '../page-objects/Login';

import {Product} from '../page-objects/product'

describe('Product Module', () => {
    let login = new Login();

    let product = new Product();
    
        it('Product Module', () =>{
            cy.visit('https://www.saucedemo.com/')
            login.loginForm ('standard_user','secret_sauce') 
                cy.get('.shopping_cart_link')
                .should('be.visible')
             
              product.productName('#item_4_title_link > .inventory_item_name', '[data-test="add-to-cart-sauce-labs-backpack"]')
            })
        })