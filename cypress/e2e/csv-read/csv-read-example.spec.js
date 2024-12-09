/// <reference types="cypress" />
const neatCSV = require('neat-csv')	

describe('csv',()=>{
    let table
    beforeEach(()=>{
        cy.readFile('cypress/fixtures/userdata.csv').then(neatCSV).then(data=>{
            table=data
        })
    })
    it('csv read',()=>{
        table.forEach(data=>cy.log(data.name))
    cy.log(table[0].email)
    })
})