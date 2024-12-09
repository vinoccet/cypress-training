describe('validate search product through API',()=>{

    it('validate tshirt search',()=>{
     cy.fixture('api/searchproduct.json').then((data)=>{
        cy.request({
            method:'POST',
            url:'https://automationexercise.com/api/searchProduct',
            form:true,
            body:data

        }).then(response=>{
            const parsedResponse=JSON.parse(response.body)
            expect(parsedResponse.products.length).to.equal(6)
            const checkTshirt=parsedResponse.products.every((product)=>product.category.category==='Tshirts')
            const checkUserType=parsedResponse.products.every((product)=>product.category.usertype.usertype==='Women')
            parsedResponse.products.forEach((product)=>{
                expect(product.category.usertype.usertype).to.equal('Women')
            })
            expect(checkUserType).to.equal(true)
            expect(checkTshirt,'Validate all tshirt products are Men').to.equal(true)
        })
    })   
    })
})