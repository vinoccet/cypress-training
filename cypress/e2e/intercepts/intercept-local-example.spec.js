describe('intercept local example', () => {
    beforeEach(() => {
        cy.visit('intercept-local/intercept.html')
    })
    it('intercepts local requests', () => {
     
        cy.intercept({
            pathname: '/users',
            query: {
                _limit: '3'
            }
        })
     .as('getUsers')
     cy.get('#load-users').click()

     cy.wait('@getUsers')
     cy.get('@getUsers').then((response)=>{
        cy.log(JSON.stringify(response))
     })
     cy.get('.user').should('have.length',3)

    })})
    