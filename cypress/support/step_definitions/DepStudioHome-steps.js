import { before, Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

Given('I can navigate to the Home page of the DepStudio', () => {

    cy.visit('https://gf-uset-dev-web01-fefffhgghqacatdu.eastus-01.azurewebsites.net/')
    cy.get('.e-touch', {timeout : 30000})

    //cy,get('');
})

When('I can enter the text {word} in the search box', (actualtext) => {

    cy.get('#txt_search_projects').type(actualtext);
})

And('I can click to search icon', () => {
    
    cy.get('.e-search').click({timeout : 50000});
})

Then('I should be able to view all the searched results', () => {

   // cy.get('.pt-2 .e-spin-hide:first-of-type').should('not.exist');
    cy.get(".e-templatecell a").should(($ele) => {

        expect($ele).to.contain('Production');
    })
})

Then('I should be able to view {word} {word} {word} {word} message', (message, message1, message2, message4) => {

    const CompMessage = message + " " + message1 + " " + message2 + " " + message4;
    console.log(CompMessage)

    cy.get("td[role='rowcell']").should('have.text', CompMessage);
})
