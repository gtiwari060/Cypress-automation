/// <reference types="cypress" />

describe("Verify radiobuttons via Webdriver uni", () =>{
    before(function() {
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true}) 
    })
    it("Validate specific radio button is selected", () =>{
        cy.get('#radio-buttons').find("[type='radio']").first().check()
        cy.get('#radio-buttons').find("[type='radio']").eq(1).check() 
    });

    it("Validate the states of specific radio buttons", () =>{ 
        
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true}) 
        cy.get('[value="lettuce"]').should('not.be.checked')
        cy.get('[value="pumpkin"]').should('be.checked')
        cy.get('[value="cabbage"]').should('be.disabled')
      
        cy.get('[value="lettuce"]').check().should('be.checked')
        cy.get('[value="pumpkin"]').should('not.be.checked')

    });

   


    
});