class AutoStore_HairCare_PO {
 addProducttoBasket()
 {
    globalThis.data.productName.forEach(function(element){
        cy.addProducttoBasket(element)

    })
    cy.get('.dropdown-toggle > .fa').click()
 }
}
export default AutoStore_HairCare_PO; 