describe('API token example',()=>{

    it('without token',()=>{
        cy.request({
            method:'GET',
            url:'https://gorest.co.in/public/v2/users',
            failOnStatusCode:false,
            authorization:{
                bearer:'b1469022e0885501223f3a0fd3cc01b7a7dc9b0b2ba6f5ab5280ed0c2afb846c'
            }
        }).then((response)=>{
            expect(response.status).to.eq(200)
        })

    })
})