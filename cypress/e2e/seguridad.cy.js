

describe('seguridad', function(){

    let texto

    it('navegar entre diferentes dominios',function(){

        cy.visit('/')
        cy.visit('https://todo-cypress-iota.vercel.app')
        cy.get("#title").type("Titulo de prueba")
    })

    it('navegar a un dominio',function(){

        cy.visit('https://todo-cypress-iota.vercel.app')
        cy.get('h1').invoke("text").as("titulo")
    })

    it('navegar a otro dominio',function(){

        cy.visit('/')
        cy.log(this.titulo)
        cy.get('h1').invoke("text").as("titulo")
    })

    it('navegar a 2 dominios en el mismo test',function(){

        cy.visit('/')
        cy.get('h1').first().invoke('text').then(text=>{
            cypress.env({
                textito:text
            })
        })
        cy.origin('https://todo-cypress-iota.vercel.app', { args: { texto: 'hola'} }, ({ texto }) => {
            cy.visit('/');  // Navega a la página en el dominio externo
            cy.log(texto);  // Logea el texto guardado
            cy.log(Cypress.env())
        });
    });

    it.only ('compartir informacion sin usar session',function(){
        
        cy.visit('/')
        cy.get('h1').first().invoke('text').then(text=>{

            cy.task("guardar",{texto:text})
        })
    })

    it.only('compartir informacion sin usar session 2',function(){
        
        cy.visit('https://todo-cypress-iota.vercel.app')
        cy.task("obtener","texto").then(valor=>{
            cy.get('#tittle').type(valor)
        })
    })
})