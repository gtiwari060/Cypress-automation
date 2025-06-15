/// <reference types="cypress" />

describe("Validate Navigation", () =>{
    it("Validation navigating from different links", () =>{
        //cy.visit("http://webdriveruniversity.com/Contact-Us/contactus.html")
        cy.visit('http://webdriveruniversity.com/')
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})
        
        cy.url().should('include', 'contactus') //Asserting that we are on contact us page

        cy.go('back')
        cy.reload()
        cy.url().should('include', 'http://webdriveruniversity.com')
        // cy.reload('true') //Reload without using cache

        cy.go('forward')
        cy.url().should('include', 'contactus')


        // Navigate back to home page and move to login portal
        cy.go('back')
        cy.get('#login-portal').invoke('removeAttr', 'target').click({force:true})
        cy.url().should('include', 'Login-Portal')
        cy.go('back')

        //Navigate to To Do List page, validate url and come back
        cy.get('#to-do-list').invoke('removeAttr', 'target').click({force:true})
        cy.url().should('include', 'To-Do-List')
        cy.go('back')
        
    });
    
});