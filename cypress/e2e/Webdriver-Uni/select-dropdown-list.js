/// <reference types="Cypress" />

describe("Interact with dropdown lists via Webdriver uni", () =>{
    it("Select specific values from dropdown list", () =>{
       
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})
      
        cy.get('#dropdowm-menu-2').as('dropdown-2')
        cy.get('#dropdowm-menu-1').select('c#')
        cy.get('@dropdown-2').select('testng').should('have.value', 'testng')
        cy.get('#dropdowm-menu-3').select('JQuery').contains('JQuery')

        cy.get('@dropdown-2').select('maven').should('have.value', 'maven')
        cy.get('@dropdown-2').select('TestNG').contains('TestNG')
       
    });
});