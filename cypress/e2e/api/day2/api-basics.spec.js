describe('Basic API requests',()=>{
    it('Get operation',()=>{
cy.request({
    method:'GET',
    url:'https://automationexercise.com/api/productsList'
}).then((response)=>{
    const parsedResponse=JSON.parse(response.body)
    expect(parsedResponse.responseCode).to.equal(200)
})
    })

    it('Post operation',()=>{
        cy.request({
            method:'POST',
            url:'https://automationexercise.com/api/searchProduct',
            form:true,
            body:{
                'search_product':'tshirt'
            }
        }).then((response)=>{
            const parsedResponse=JSON.parse(response.body)
            expect(parsedResponse.responseCode).to.equal(200)
        })
            })
            it('Post operation negative validation',()=>{
                cy.request({
                    method:'POST',
                    url:'https://automationexercise.com/api/searchProduct',
        
                }).then((response)=>{
                    const parsedResponse=JSON.parse(response.body)
                    expect(parsedResponse.responseCode).to.equal(400)
                    expect(parsedResponse.message).to.equal("Bad request, search_product parameter is missing in POST request.")
                })
                    })       
                    
it('PUT operation',()=>{
cy.request({
    method:'PUT',
    url:'https://jsonplaceholder.typicode.com/posts/1',
    body:{
        id: 1,
        title: 'foo',
        body: 'bar',
        userId: 1,
    }
}).its('status').should('equal', 200)
})

it('Delete operation',()=>{
    cy.request({
        method:'DELETE',
        url:'https://jsonplaceholder.typicode.com/posts/1',
    }).its('status').should('equal', 200)
    })
})