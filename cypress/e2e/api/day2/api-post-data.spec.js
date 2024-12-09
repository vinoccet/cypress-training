describe('post data combinations',()=>{
    it('pass body as object',()=>{
        cy.request({
            method:'POST',
            url:'https://automationexercise.com/api/searchProduct',
            form:true,
            body:{
                'search_product':'tshirt'
            }}).then((response)=>{
                const parsedResponse=JSON.parse(response.body)
                expect(parsedResponse.responseCode).to.equal(200)
    })
})
    it('pass body from variable',()=>{
        const body={
            'search_product':'tshirt'
        }
        cy.request({
            method:'POST',
            url:'https://automationexercise.com/api/searchProduct',
            form:true,
            body:body}).then((response)=>{
                const parsedResponse=JSON.parse(response.body)
                expect(parsedResponse.responseCode).to.equal(200)
            })
    })   

it('pass body from fixture',()=>{
cy.fixture('api/searchproduct.json').then((data)=>{
    cy.request({
        method:'POST',
        url:'https://automationexercise.com/api/searchProduct',
        form:true,
        body:data}).then((response)=>{
            const parsedResponse=JSON.parse(response.body)
            expect(parsedResponse.responseCode).to.equal(200)
        })
})
})
    

})