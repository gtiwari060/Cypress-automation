class AutoStore_HomePage_PO {
    visitAutoStore_HomePage() {
        cy.visit('https://automationteststore.com/');
    }

    click_on_HairCare_link()
    {
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
    }
}
export default AutoStore_HomePage_PO;