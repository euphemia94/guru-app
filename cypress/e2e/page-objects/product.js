
export class Product {
    productName (Items, addToCart){
        cy.get('#item_4_title_link > .inventory_item_name').click()
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    }

}