class HomePage_PO {
    visitHomePage() {
        cy.visit('/', {timeout:60000});
    }

    click_on_ContactUs_button()
    {
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})
    }
}
export default HomePage_PO;