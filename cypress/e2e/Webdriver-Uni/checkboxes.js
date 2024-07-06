/// <reference types="Cypress" />

describe("Verify Checkboxes via Webdriver uni", () =>{
    beforeEach(()=> {
        cy.navigateTo_WebdriverUni_CheckboxPage();
    })
    it("Check and Validate Checkbox", () =>{
        //cy.get('#checkboxes > :nth-child(1) > input').check().should('be.checked')
        cy.get('#checkboxes > :nth-child(1) > input').as('option-1')
        cy.get('@option-1').check().should('be.checked');
    });

    it("Uncheck option-3 in checkbox and validete if unchecked", () =>{
        cy.get(':nth-child(5) > input').as('option-2')
        cy.get('@option-2').uncheck().should('not.be.checked')
    });

    it("Check Multiple Checkboxes", () =>{
        cy.get("input[type='checkbox']").check(["option-1", "option-2","option-3", "option-4"]).should('be.checked')
    });


    
});