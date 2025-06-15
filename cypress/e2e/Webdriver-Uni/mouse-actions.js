/// <reference types="cypress" />

describe("Validate Mouse Actions", () =>{
    it("Scroll element into view", () =>{
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force:true})
    })

    it("Should be able to drag and drop a draggable item", () =>{
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force:true})

        cy.get('#draggable').trigger('mousedown', {which: 1});
        cy.get('#droppable').trigger('mousemove').trigger('mouseup', {force:true})
    })

    it("Should be able to double click an element", () =>{
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force:true})

        cy.get('#double-click').dblclick().should('have.class', 'div-double-click double');

    })

    it("Should be able to Click and hold an element", () =>{
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force:true})

        cy.get('#click-box').trigger('mousedown', {which: 1}).then(($element) => {
            expect($element).to.have.css('background-color', 'rgb(0, 255, 0)')

        })

    })
    
});