/// <reference types="Cypress" />
describe("Handling Data via webdriveruni", () => {
    beforeEach(() => {
      cy.visit("https://webdriveruniversity.com/");
      cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
    })
    it("Calculate and assert the age of all the users", () => {
        var userdetails = [];
        let numb = 0
      cy.get('#thumbnail-1 td').each(($el, index, $list) => {
        userdetails[index] = $el.text();

      }).then(() =>{
        var i =0;
        for (i=0; i< userdetails.length; i++)
        {
            if(Number(userdetails[i]))
                {
                    numb += Number(userdetails[i])
                }

               //cy.log(userdetails[i])
        }
        cy.log('Total age is :'+ numb)
        expect(numb).to.eq(322)

      })
    });

    it("Calculate and assert the age a given user using last name", () => {
     cy.get('#thumbnail-1 td:nth-child(2)').each(($el, index, $list) =>{
        const text = $el.text()
        if(text.includes("Woods")){
            cy.get('#thumbnail-1 td:nth-child(2)').eq(index).next().then(function(Age) {
                const userage = Age.text()
                expect(userage).to.equal("80");
            })  
        }
     })

    
    });

    it("Calculate and assert the age a given user using First name", () => {
       cy.get('#thumbnail-1 td:nth-child(1)').each(($el, index, $list) => {
        const newtext = $el.text();
        if(newtext.includes("Sarah")) {
            cy.get('#thumbnail-1 td:nth-child(1)').eq(index).next().next().then(function(age) {
                const newage = age.text()
                expect(newage).to.equal('56')
            })  


        }



       })
    
   
       
     });
});
  