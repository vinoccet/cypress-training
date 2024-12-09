describe('Signup validations', ()=>{
  beforeEach(()=>{
    
  })
//   it('validate initial signup',()=>{
// cy.get('a[href="/login"]').click()
// debugger
// cy.get('form[action="/signup"]').within(() => {
// cy.get('[data-qa="signup-name"]').type('cypress')
// cy.get('[data-qa="signup-email"]').type('cypress@cypress.com')
// cy.get('[data-qa="signup-button"]').click()
// })

//   })

  it('signup secondpage',()=>{
    cy.visit('https://automationexercise.com')
    cy.get('a[href="/login"]').should('be.visible')
    cy.get('a[href="/login"]').click()
    debugger
    cy.get('[data-qa="signup-name"]').type('cypress')
  })
})



