describe('flaky tests', () => {
  it('single query command', () => {
    cy.visit('/')
    cy.get('#root > div.container > div:nth-child(1) > div:nth-child(1) > div > center > div.card-header > h1'
  ).should('contain','Bulbasaur')
  cy.contains('#root > div.container > div:nth-child(1) > div:nth-child(1) > div > center > div.card-header > h1','Bulbasaaur')
  })

  it.only('alternar comandos con aserciones', function(){
    cy.visit('/')
    cy.get('submit').click()
    cy.get('#submit').should('not.to.be.disabled').click()

    cy.get("#root > div.container > div:nth-child(1) > div:nth-child(1) > div > center > div.card-header > h1"
  ).should("contain","Bulbasaur").parent().should("have.class","card-header")
  })
})