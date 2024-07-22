const { beforeEach } = require("mocha")

describe('LocalStorage', () => {
  
  beforeEach(()=>{
    cy.visit("https://todo-cypress-iota.vercel.app/")
    localStorage.setItem("react_todo_ids",JSON.stringify(["Titulo de prueba"]))
    localStorage.setItem("Ttulo de prueba",JSON.stringify({
      Title:"Titulo de prueba",
      id:"Titulo de prueba",
      complete: false,
      description:"Descripcion de una prueba" 

    }))

  })
  it('crear una tarea', () => {
    cy.visit("https://todo-cypress-iota.vercel.app/")
    cy.get("#title").type("Titulo de pruebas")
    cy.get("#description").type("Descripcion de pruebas")
    cy.contains('Create').click()
    cy.contains("Titulo de prueba")

    cy.reload()

    cy.contains("Titulo de prueba").then(()=>{
      expect(localStorage.getItem("Titulo de prueba"))
    })
    cy.contains("Remove").click().then(()=>{
      expect(localStorage.getItem("Titulo de prueba")).to.not.exist;
    })
    cy.clearLocalStorage("Titulo de prueba").should(ls=>{
      expect(ls.getItem("prop1")).to.be.null
    })
    it("validar que la tarea se creo correctamente",function(){
      cy.visit("https://todo-cypress-iota.vercel.app/")
      expect(localStorage.getItem("Titulo de prueba"))
    })
  })
})