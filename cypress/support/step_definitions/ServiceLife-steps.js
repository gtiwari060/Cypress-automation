import { before, Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

const Accountitlenumber = '31200 Account 312 - Boiler Plant Equipment';

Given('I can navigate to the Service life analysis page for a project named {word}', (actualtext) => {
    cy.visit('https://gf-uset-dev-web01-fefffhgghqacatdu.eastus-01.azurewebsites.net/')
    cy.get('.e-touch .e-gridcontent')
    cy.get('#txt_search_projects').type(actualtext);
    cy.get('.e-search').click();
    //cy.get('.e-spinner-inner').should('not.be.visible');
    cy.get(".e-templatecell a").should(($ele) => {
        expect($ele).to.contain(actualtext);
    })
    cy.get(".e-templatecell a").click();
});

When('I click on an Account on the Service life analysis page', () => {
    cy.get("tr:nth-of-type(1) > td:nth-of-type(4)  a[role='button']").click();
})

Then('I can view the Account title and Account number in the graph panel', () => {
    cy.get('.chartCurvesSection .mt-1').should('have.text', Accountitlenumber);
})

When('I click on Add Bands button', () => {
    cy.get(".form__group button.e-control:last-of-type").click();
})

And('I select the account under which the band is to be added', () => {
    cy.get('div.e-multiselect').click();

    //Account number and title text extracted and stored in acct 
    // cy.get('.e-list-item:first-of-type').then(($el) => {
    //     const acct = $el.text();
    //     cy.log(acct);
    // })
    // cy.get('.e-list-item:first-of-type').invoke('text').then((text) => {
    //     var splitText = text.split(' ')[0];
    //     cy.log(splitText);


    // })
    cy.get('.e-list-item:first-of-type').click();
    //cy.get('.dialogContent').click();
})

And('I add all the Details with Exp Band {word} - {word} and Placement Band {word} - {word}', (expbgn, expend, placbgn, placend) => {

    cy.get("#txtExpBandBegin").type(expbgn);
    cy.get('#txtExpBandEnd').type(expend);
    cy.get('#txtPlaBandBegin').type(placbgn);
    cy.get('#txtPlaBandEnd').type(placend);
})

And('I click on Add button', () => {
    cy.get('#btn_add_band').click();
})

// Then ('I can see the successfully added toast message', () => {

//     cy.get('.e-toast-content').contains('Service band has been added successfully');

// })

//And('I can see the band should be added to the selected account with the correct Details', () => {

//  cy.get('tr[aria-rowindex="1"] .e-icon-grightarrow').click();
//  const experienceband = expbgn + " - " + expend;
//  const placementband = placbgn + " - " + placend;
//  cy.get('tr:nth-of-type(2) > td:nth-of-type(3) input#yearRangeInput').should('eq', 'experienceband')
//})

Then('I can see the toast message {word}', (message) => {

    cy.get('.e-toast-content').contains(message);

})

And('I can open and view all the bands for an account', () => {

    cy.get('.e-templatecell .pl15').get('.e-icon-grightarrow').eq(0).click();
    //('.e-detailrowcollapse').click();

})
//splitText

When('I can click on the Delete button for a band', () => {
    cy.get('.e-lastrowcell .e-trash').click();
})

When('I can click on an account and select an Account {word}', (acctnumber) => {
    cy.get("a.pl15").contains(acctnumber).click();
})

And('I can scroll to the Annual Statistics section', () => {
    //cy.get("[id*='Series_1_Point_0']").scrollIntoView().should('be.visible');  
    //cy.get('#curvesgrid').scrollIntoView();
})

Then('I can see all the Annual Stats for that account {string}', (stats) => {

    cy.get("div[class='card-body'] .col-sm-6 .e-input-group-icon").click({ force: true });
    //cy.get('#drpAnnualStatistics_options').should('not.exist');
    //cy.get('#drpAnnualStatistics').clear().type('a', {force: true});

    cy.get('#drpAnnualStatistics_options li', {force: true}).each(function ($ele, index, list) {

        const option = $ele.text();
        if (option === stats) {
            cy.wrap($ele).click({force: true});
        }

    })
});





