/// <reference types="cypress" />

describe("Handle Js Alerts", () =>{
    it("Confirm js alerts contains the correct text", () =>{
        //cy.visit("http://webdriveruniversity.com/Contact-Us/contactus.html")
        cy.visit('http://webdriveruniversity.com/')
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true})
        cy.get('#button1').click()

        cy.on('window:alert', (str) => {
           expect(str).to.equal('I am an alert box!')
        })        
    });

    it("Validate if confirm alert box works correctly when clicked on ok ", () =>{
        //cy.visit("http://webdriveruniversity.com/Contact-Us/contactus.html")
        cy.visit('http://webdriveruniversity.com/')
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true})
        cy.get('#button4').click()

        cy.on('window:confirm', (str) => {
           return true;
        })  
        
        cy.get('#confirm-alert-text').contains('You pressed OK!')
    });

    it("Validate if confirm alert box works correctly when clicked on Cancel ", () =>{
        //cy.visit("http://webdriveruniversity.com/Contact-Us/contactus.html")
        cy.visit('http://webdriveruniversity.com/')
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true})
        cy.get('#button4').click()

        cy.on('window:confirm', (str) => {
           return false;
        })  
        
        cy.get('#confirm-alert-text').contains('You pressed Cancel!')
    });

    it("Validate if confirm alert box works correctly using Stub ", () =>{
        //cy.visit("http://webdriveruniversity.com/Contact-Us/contactus.html")
        cy.visit('http://webdriveruniversity.com/')
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true})
        
        const stub = cy.stub()
        cy.on('window:confirm', stub)
        cy.get('#button4').click().then (()=>{
            expect(stub.getCall(0)).to.be.calledWith('Press a button!')
        }).then(() =>{
            return true
        }).then(() =>{
            cy.get('#confirm-alert-text').contains('You pressed OK!')
        })
    });
    
});