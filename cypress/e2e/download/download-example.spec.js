/// <reference types="cypress-downloadfile"/>

describe('download validations',()=>{
    it('simple downlaod',()=>{
cy.visit('https://the-internet.herokuapp.com/download')
cy.downloadFile('https://the-internet.herokuapp.com/download/manoj.m.docx','cypress/fixtures/mydownloads','manojm.docx')
    })
})