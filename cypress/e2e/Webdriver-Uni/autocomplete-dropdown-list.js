/// <reference types="Cypress" />

describe("Interact with dropdown lists via Webdriver uni", () =>{
    it("Select specific values from dropdown list", () =>{
       
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click({force:true})

        cy.get('#myInput').type('A')
        cy.get('#myInputautocomplete-list > *').each(($el, index, $list) => {

            const prod = $el.text();
            
            const producttoSelect = 'Avacado';

            if(prod === producttoSelect)
                {
                    cy.wrap($el).click();
                    cy.get('#submit-button').click();
                    cy.url().should('include', producttoSelect);
                }

        }).then(() => {

            cy.get('#myInput').type('G')
        cy.get('#myInputautocomplete-list > *').each(($el, index, $list) => {
            const prod = $el.text();
            const producttoSelect = 'Grapes';

        if(prod === producttoSelect){
                cy.wrap($el).click();
                cy.get('#submit-button').click();
                cy.url().should('include', producttoSelect);
            }

        })
    })
    });
});