class Contact_Us_PO {
    webdriverUni_Contactform_Submission(firstName, lastName, email, comment, $selector, texttolocate) {
        cy.get('[name="first_name"]').type(firstName)
        cy.get('[name="last_name"]').type(lastName)
        cy.get('[name="email"]').type(email)
        cy.get('[name="message"]').type(comment)
        cy.get('[type="submit"]').click()
        cy.get($selector).contains(texttolocate);
    }
}
export default Contact_Us_PO;