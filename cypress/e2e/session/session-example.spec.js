import Login from "../../pages/login"

const login=new Login()
describe('session validations',()=>{
    it('session example to click polo',()=>{
        cy.visit('/')
cy.login('cypressautomation-bathc1@automation.com','cy_training_b1','cy')
cy.visit('/')
cy.get('[href="/brand_products/Polo"]').click()
cy.get('.title').should('have.text','Brand - Polo Products')
    })

    it.only('session example to click Madame ',()=>{
        cy.visit(Cypress.env('devBaseurl'))
        // cy.login('cypressautomation-bathc1@automation.com','cy_training_b1','cy')
        // cy.visit('/')
        // cy.get('[href="/brand_products/Madame"]').click()
        // cy.get('.title').should('have.text','Brand - Madame Products')
            })
})