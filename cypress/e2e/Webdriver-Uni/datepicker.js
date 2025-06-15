/// <reference types="cypress" />

describe("Test Datepicker via Webdriver uni", () =>{
    it("Select date from datepicker", () =>{
       
        cy.visit('/')
        cy.get('#datepicker').invoke('removeAttr', 'target').click({force:true})
        cy.get('#datepicker').click();

        // let date = new Date();
        // date.setDate(date.getDate()) //Current Date
        // cy.log(date.getDate())

        // let date2 = new Date();
        // date2.setDate(date.getDate() + 5)
        // cy.log(date2.getDate())

        var date = new Date();
        date.setDate(date.getDate() + 365);

        var futureyear = date.getFullYear();
        var futuremonth = date.toLocaleString('default', {month: "long"});
        var futureday = date.getDate();

        cy.log(futureyear)
        cy.log(futuremonth)
        cy.log(futureday)

        function selectYearAndMonth() {
            cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then((currentDate) => {
                if(!currentDate.text().includes(futureyear)){
                    cy.get('.next').first().click()
                    selectYearAndMonth();
                }
            }).then(()=>{
                cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then((currentdate) => {
                    if(!currentdate.text().includes(futuremonth)){
                        cy.get('.next').first().click()
                        selectYearAndMonth();
                    }
                })

            })

        }
        function selectDay(){
            cy.get('[class="day"]').contains(futureday).click();
        }
        selectYearAndMonth();
        selectDay();
    });
});