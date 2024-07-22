
describe('visual testing',function(){
    it('primera prueba de regresion',function(){

        cy.visit("/")
        cy.wait(1000)
        cy.matchImageSnapshot()
    })
})