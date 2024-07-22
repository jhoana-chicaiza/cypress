/*const dispositivos=[
  {viewport: "macbook-15",type:"desktop"},
  {viewport: "ipad-2",type:"mobile"},
  {viewport: [1280,720],type:"desktop"},
  {viewport: [375,667],type:"mobile"}
]*/


describe('Dispositivos moviles', function(){
  
  it('usando el viewport', function(){
    cy.viewport(1280, 720) 
    cy.visit('/')
    cy.contains('Safari').should("exist")
  })

  it('usando el viewport movil', function(){
    cy.viewport(375, 667) 
    cy.visit('/')
    cy.contains('Safari').should("not.be.visible")
  })

  it('usando el viewport desktop preset', function(){
    cy.viewport("macbook-15")
    cy.visit('/')
    cy.contains('Safari').should("exist")
  })

  it('usando el viewport movil preset', function(){
    cy.viewport("iphone-6+") 
    cy.visit('/')
    cy.contains('Safari').should("not.be.visible")
  })
})