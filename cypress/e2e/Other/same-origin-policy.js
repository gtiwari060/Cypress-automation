/// <reference types="Cypress" />

describe("Same origin", () =>{
    it("Validate navigating two different urls", () =>{

        cy.visit('https://webdriveruniversity.com/')
        //cy.visit('https://automationteststore.com/')
        
    });

    // it("Origin policy", () =>{
   
    //     cy.origin("webdriveruniversity.com",() => {

            
    //     })
    // });
    
});