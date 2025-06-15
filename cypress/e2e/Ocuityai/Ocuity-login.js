/// <reference types="cypress" />

describe('Login into Ocuity Application', () => {
    it('Should be able to login by entering valid credentials', () => {
        cy.visit("https://autodealerportalqa.azurewebsites.net/")
        //cy.get('#contact-us').click()
        cy.origin('https://dmiautodealer.b2clogin.com', () =>{

        cy.get('#email').type("automationuser@opentrash.com")
        cy.get('#password').type("DMI@2022")
        cy.get('[type="submit"]').click()
            
        })
        cy.url().should('equal', 'https://autodealerportalqa.azurewebsites.net/dashboard')
        


    });
});