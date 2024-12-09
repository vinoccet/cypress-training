describe('multi tab validation',()=>{
    it('generic way it will fail',()=>{
cy.visit('https://the-internet.herokuapp.com/windows')
cy.get('[href="/windows/new"]').click()
cy.get('h3').should('have.text','New Window')
    })


    it.only('Handle new tab',()=>{
        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.get('[href="/windows/new"]').invoke('removeAttr', 'target').click()
        cy.get('h3').should('have.text','New Window')
        cy.go('back')
})
        
})    