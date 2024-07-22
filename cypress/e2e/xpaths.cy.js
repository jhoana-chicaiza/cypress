describe('Trabajar con xpaths', function(){
  it('obtener con un css selector', () => {
    cy.visit('/')
    cy.get('#root > div.container > div:nth-child(1) > div:nth-child(1) > div > center > div.card-header > h1'
    ).should('contain','Bulbasaur')
  })

  it('obtener con un xpath', function(){
    cy.visit('/')
    //cy.xpath('//h1[contains(text(),"Bulbasaur")]').should('contain','Bulbasaur')
    cy.contains('Bulbasaur').should('be.visible')

  })
})