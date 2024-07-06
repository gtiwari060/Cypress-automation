/// <reference types="Cypress" />

describe("Alias and Invoke", () => {
    it("Validate a specific hair care product", () => {
        cy.visit("https://automationteststore.com/");
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click()
        cy.get('.fixed_wrapper .prdocutname').eq(0).invoke('text').as('ProductThumbnail')
        cy.get('@ProductThumbnail').its('length').should('be.gt', 5)
        cy.get('@ProductThumbnail').should('include', 'Seaweed Conditioner')
    
        
    });

    it("Validate Product thumbnail", () => {
        cy.visit("https://automationteststore.com/");
        cy.get('.thumbnail').as('productThumbnail')
        cy.get('@productThumbnail').should('have.length', 16)
        cy.get('@productThumbnail').find('.productcart').invoke('attr','title').should('include', 'Add to Cart')
    });

    it("Calculate total of normal and sale products", () => {
        cy.visit("https://automationteststore.com/");
        cy.get('.thumbnail').as('productThumbnail')
       // cy.get('@productThumbnail').find('.oneprice').each(($el, index, $list) => {
       //     cy.log($el.text())
       // })

       cy.get('.thumbnail').find('.oneprice').invoke('text').as('itemprice')
       cy.get('.thumbnail').find('.pricenew').invoke('text').as('saleitemprice')

       var itemTotal = 0;

       // Normal Item price calculation
       cy.get('@itemprice').then($linktext => 
        {
         var itemPriceTotal = 0
         var itemprice = $linktext.split('$')
         for(var i=0; i< itemprice.length; i++) {
            itemPriceTotal += Number(itemprice[i])
         } 
         itemTotal += itemPriceTotal
         cy.log("Non Sale items price is " + itemPriceTotal)
        });
        
     

// Sale Items logic price calculation
       cy.get('@saleitemprice').then($linkstext => 
        {
         var saleitempriceTotal = 0
         var saleitemprice = $linkstext.split('$')
         for(var j=0; j< saleitemprice.length; j++)
          {
            //cy.log(saleitemprice[j])
            saleitempriceTotal += Number(saleitemprice[j])
          }
          cy.log("Sale items price is " + saleitempriceTotal)
          itemTotal += saleitempriceTotal
          
        })
        .then(()=> {
            cy.log("The Total price of all products is " + itemTotal)
            expect(itemTotal).to.equal(648.5)

        })
      
    
    });


});
