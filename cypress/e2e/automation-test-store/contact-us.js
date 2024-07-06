/// <reference types="Cypress" />

describe("Test Contact us form via Automation Test Store", () =>{
    before(function() {
       // cy.viewport(550,750);
        cy.fixture('userDetails').as('user');
    })
    it("Should be able to submit the contact us form", () =>{
        cy.visit("https://automationteststore.com/");
        cy.xpath("//a[contains(@href,'content/contact')]").click().then(function(itemContactText){
            cy.log("The text present is :" + itemContactText.text())
        })
        //cy,get("a[href$='contact']").click()
        cy.get('@user').then((user)=> {

            cy.get('[name="first_name"]').type(user.firstname)
        //cy.get('[name="last_name"]').type("Smith")
        cy.get('[id="ContactUsFrm_email"]').type(user.email)
        });
        cy.get('[id="ContactUsFrm_enquiry"]').type("This is a Test Comment")
        cy.xpath("//button[@title='Submit']").click()
        cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!');
    });
});