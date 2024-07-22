describe("Cookies", function() {
  beforeEach(function() {
    cy.session('preserveCookies', () => {
      cy.setCookie('nombre', 'Jhoana');
    });
  });

  it("Obtener las cookies", function() {
    cy.clearCookies();
    cy.visit("/");
    cy.getCookies().should("be.empty");
  });

  it("Agregar una cookie", function() {
    cy.setCookie("nombre", "Jhoana");
    cy.getCookies().should("have.length", 1);
  });

  it("Obtener una cookie en específico", function() {
    cy.getCookie("nombre").should("have.property", "value", "Jhoana");
  });
});
