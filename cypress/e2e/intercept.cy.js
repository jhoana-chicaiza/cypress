describe('interceptando network request', function() {

  it('repaso del request ', function() {
    cy.request("https://pokeapi.co/api/v2/pokemon/ditto").then(response =>{

      expect(response.body).to.have.property("name","ditto")
      expect(response.status).to.eq(200)
      cy.log(response.body)
    })
  })
  it('interceptando el request', function() {
    cy.intercept('GET', 'https://pokeapi.co/api/v2/pokemon-species/1').as('bulbasaur')
    cy.visit("/")
    cy.contains("Bulbasaur").parent().parent().within(element=>{

      cy.wrap(element).contains("Más detalles").click()
    })
    cy.wait('@bulbasaur').then(interception =>{
      cy.log(interception)
      expect(interception.response.body).to.have.property("name","bulbasaur")
      expect(interception.response.status).to.eq(200)
    })
  })

  it('Probar el intercept  forzar a que falle',function(){

    cy.intercept('GET', 'https://pokeapi.co/api/v2/pokemon-species/1',{
      forceNetworkError: true
    }).as("error")
    cy.visit("/")
    cy.contains("Bulbasaur").parent().parent().within(element=>{

      cy.wrap(element).contains("Más detalles").click()

      cy.wait("error").should('have.property',property("error"))
    })
  })

  it.only('prueba intercept cambiando el body', function(){

    cy.intercept('GET', 'https://pokeapi.co/api/v2/pokemon-species/1',{
      statusCode:200,
      body:{
        "name": "Bulbasaur",
      }
    }).as("error")
  })
})