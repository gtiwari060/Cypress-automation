import HomePage_PO from "../../support/pageObjects/webdriverUni/HomePage_PO";
import Contact_Us_PO from "../../support/pageObjects/webdriverUni/Contact_Us_PO";
/// <reference types="Cypress" />

describe("Test Contact us form via WebdriverUni", () => {
    Cypress.config('defaultCommandTimeout', 20000) //Explicit Timeout
    const Homepage_PO = new HomePage_PO();
    const contact_us_PO = new Contact_Us_PO();


    before(function () {
        cy.fixture("example").then(function (data) {
            globalThis.data = data;
        })
    })

    beforeEach(() => {
        Homepage_PO.visitHomePage();
        Homepage_PO.click_on_ContactUs_button();
    })

    it("Should be able to submit the contact us form", () => {
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
        cy.title().should('include', 'WebDriver | Contact Us')
        cy.url().should('include', 'contactus');
        contact_us_PO.webdriverUni_Contactform_Submission(Cypress.env('first_name'), data.last_name, data.email, 'This is a Test Comment', 'h1', 'Thank You for your Message!')

    });

    it("Should not be able to submit if all the fields are not filled", () => {
        contact_us_PO.webdriverUni_Contactform_Submission(data.first_name, data.last_name, " ", 'This is a Test Comment', 'body', 'Invalid email address')
    });

});