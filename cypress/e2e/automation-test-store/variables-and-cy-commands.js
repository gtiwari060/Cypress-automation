/// <reference types="Cypress" />

describe("Variables, cy commands and jquery commands", () =>{
    it("NAvigating to specific product pages", () =>
    {
      cy.visit("https://automationteststore.com/");
      //Not Recommended
    //   const makeuplink = cy.get("a[href*='product/category&path=']").contains("Makeup")
    //   const skincarelink = cy.get("a[href*='product/category&path=']").contains("Skincare")
    //   makeuplink.click();
    //   skincarelink.click();

    //It works but not recommended
        // const makeuplink = cy.get("a[href*='product/category&path=']").contains("Makeup")
        // makeuplink.click();
        // const skincarelink = cy.get("a[href*='product/category&path=']").contains("Skincare")
        // skincarelink.click();

    //Recommended
        cy.get("a[href*='product/category&path=']").contains("Makeup").click()
        cy.get("a[href*='product/category&path=']").contains("Skincare").click()
        
     });

     it("NAvigating to specific product pages", () =>
     {
       cy.visit("https://automationteststore.com/");
       cy.get("a[href*='product/category&path=']").contains("Makeup").click()
       
       //Following Code fails
       //const header = cy.get("h1 .maintext");
       //cy.log(header.text());

       cy.get("h1 .maintext").then(($headertext) => {
        const headertext = $headertext.text()
        cy.log("Found Header text :" + headertext)
        expect(headertext).is.eq('Makeup')
       })
    });

    it.only("Contact us page - Automation test store different techniques", () =>
    {
      cy.visit("https://automationteststore.com/index.php?rt=content/contact");

      //Uses Cypress command and chaining
      cy.contains('#ContactUsFrm', 'Contact Us Form').find('#field_11').should('contain', 'First name:')

      //Jquery approach
      cy.contains('#ContactUsFrm', 'Contact Us Form').then(text =>{
        const firstnametext = text.find('#field_11').text()
        expect(firstnametext).to.contain('First name:')

        //Embedded commands (Closure)
        cy.get('#field_11').then((fxtext) =>{
          cy.log(fxtext.text())
          cy.log(fxtext)

        })

      })
      
    });  
   
});