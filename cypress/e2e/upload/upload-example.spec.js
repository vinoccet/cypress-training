describe('Upload validations',()=>{
    it('simple upload',()=>{
cy.visit('https://the-internet.herokuapp.com/upload')
cy.get('#file-upload').selectFile('cypress/fixtures/example.json')
cy.get('#file-submit').click()
cy.get('h3').should('have.text','File Uploaded!')
cy.get('#uploaded-files').should('contain','example.json')
    })

    it('simple multifile upload',()=>{
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').selectFile(['cypress/fixtures/example.json','cypress/fixtures/userdata.json'])
        cy.get('#file-submit').click()
        cy.get('h3').should('have.text','File Uploaded!')
    })
    
    it('simple upload with option',()=>{
    cy.visit('https://the-internet.herokuapp.com/upload')
    cy.get('#file-upload').selectFile({
      contents: 'cypress/fixtures/example.json',
      fileName: 'file.png',
      mimeType: 'text/plain',
      lastModified: new Date('Feb 18 1989').valueOf(),
        })
        cy.get('#file-submit').click()
        cy.get('h3').should('have.text','File Uploaded!')
    })
    
    it.only('simple upload drag and drop',()=>{
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#drag-drop-upload').selectFile('cypress/fixtures/example.json',{
            action: 'drag-drop' 
            })
        cy.get('#drag-drop-upload').should('contain','example.json')    
        })
})

