describe('navegando entre diferentes tabs', function() {
  
  it('visitar link con el target _blank', function() {
  
    cy.visit('https://demoqa.com/links')
    cy.get('#simpleLink').click({ force: true })

  })
})