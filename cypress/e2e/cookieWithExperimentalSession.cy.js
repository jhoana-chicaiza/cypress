describe('cookies', function() {
  
  beforeEach(()=> {
    cy.session("login",()=>{
      cy.visit('/')
      cy.setCookie("nombre","Jhoana")
      
    })
  });
  
  it("Obtener una cookie en específico", function() {
    cy.getCookie("nombre").should("have.property", "value", "Jhoana");
  });
})