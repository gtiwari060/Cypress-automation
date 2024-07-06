import AutoStore_HomePage_PO from "../../support/pageObjects/automationtestStore/AutoStore_Homepage_PO";
import AutoStore_HairCare_PO from "../../support/pageObjects/automationtestStore/AutoStore_HairCare_PO";
/// <reference types="Cypress" />

describe("Iterate over elements in Automation test store", () => {
    const autoStore_HomePage_PO = new AutoStore_HomePage_PO();
    const autoStore_HairCare_PO = new AutoStore_HairCare_PO();
    
    before(function() {
        cy.fixture('products').then(function(data) {
            globalThis.data = data;
        })
    })
    beforeEach(function () {
        autoStore_HomePage_PO.visitAutoStore_HomePage();
        autoStore_HomePage_PO.click_on_HairCare_link();
    })
    it("Log information of all hair care products", () => {
      autoStore_HairCare_PO.addProducttoBasket();
    });
});