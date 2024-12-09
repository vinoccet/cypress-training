describe('Testing locally', () => {
    it('Assertion basic 1', () => {
      cy.visit('./assertions.html')
      cy.get('#assertion-table').find('tbody .success td').first().should('have.text', 'John')
    })

    it('Assertion basic 2', () => {
      cy.visit('./assertions.html')
     cy.get('#assertion-table')
      .find('tbody tr:last')
      .should('have.class', 'success')
      .find('td')
      .first()
      // checking the text of the  element in various ways
      .should('have.text', 'John')
    })
    it('Assertion basic 3', () => {
        cy.visit('./assertions.html')
        cy.contains('John').parent().should('have.class', 'success')
      })
    
      it.only('Assertion basic 4', () => {
        const employee = {
            person: {
              name: {
                firstName: 'Joe',
                lastName: 'Smith',
              },
            },
          }
        
          cy.wrap(employee)
          .then(((emp=>{
            expect(emp.person.name.firstName,`validating firstname ${emp.person.name.firstName}`).to.equal('Joe')
            expect(1).to.equal(1)
          })))
      })
      it('Assertion basic 5', () => {
        cy.visit('./assertions.html')
        cy.get('#user-ssn').should('have.prop','value','123-45-6789')
        cy.get('#user-ssn').should('have.prop','value').should('match',/^\d\d\d-\d\d-\d\d\d\d$/)
      })

      it('Assertion basic 6',()=>{
        const employee = {
          person: {
            name: {
              first: 'Joe',
              last: 'Smith',
            },
          },
        }
        cy.wrap(employee).should('have.property', 'person')
      })
    
    it('Assertion basic 6',()=>{
      cy.visit('./assertions.html')
      cy.contains('ul','apples')
    })  
  })