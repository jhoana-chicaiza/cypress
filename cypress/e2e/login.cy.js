
import { loginPage } from "../pageObjects/LoginPage"

describe ('login con POM',function (){

    beforeEach(()=>{
      loginPage.visit()
    })

    it('login erroneo', function(){
      loginPage.validateLoginPage()
        loginPage.login('lalala',"lalala")
        loginPage.validateErrorLogin()
    })

    it('login exitoso  con cy.env', function(){
      loginPage.validateLoginPage()
      cy.log(Cypress.env())
      loginPage.login(Cypress.env("credentials").user,Cypress.env("credentials").password)
      loginPage.validateSuccessLogin()
  })

  it('login exitoso  con cy.env.json ', function(){
    loginPage.validateLoginPage()
    cy.log(Cypress.env())
    loginPage.login(Cypress.env("credentials").user,Cypress.env("credentials").password)
    loginPage.validateSuccessLogin()
})

    it('login erroneo desde la terminal', function(){
      loginPage.validateLoginPage()
      cy.log(Cypress.env())
      loginPage.login(Cypress.env("credentials").user,Cypress.env("credentials").password)
      loginPage.validateSuccessLogin()
  })
})

describe('Login erroneo con configuracion',{
  env:{
    usuarioErroneo:"error1",
    passwordErroneo:"error2"
  }
}, function(){
  beforeEach(()=>{
    loginPage.visit()
  })

  it('login erroneo',function(){

    loginPage.validateLoginPage()
    cy.log(Cypress.env())

    loginPage.login(
      Cypress.env("usuarioErroneo"),
      Cypress.env("passwordErroneo")
    )
      loginPage.validateErrorLogin()
  })

})

describe('login erroneo con fixture', function(){

  beforeEach(()=>{
    loginPage.visit()
  })

  it ('login erroneo', function() {
    loginPage.validateLoginPage()
    cy.fixture('credentials').then(credentials =>{
      loginPage.login(credentials.email,credentials.password)
      loginPage.validateErrorLogin()

    })
  })

  
  it ('login erroneo 2', function() {
    loginPage.validateLoginPage()
    cy.fixture('usuarios').then(credentials =>{
      loginPage.login(credentials.email,credentials.password)

      loginPage.validateErrorLogin()
    })
  })

})

const credentialsForUsers=[
  {
    nombre: "credentials",
    titulo: "Login con credentials"
  },
  {
    nombre: "usuarios",
    titulo: "Login con usuarios"
  }
]

credentialsForUsers.forEach(credentials=>{
  describe.only(credentials.titulo, function() {
    beforeEach(()=>{
      loginPage.visit()
    })
  })
  it ('login erroneo con fixtures', function() {
    loginPage.validateLoginPage()
    cy.fixture(credentials.nombre).then(credentials =>{
      loginPage.login(credentials.email,credentials.password)
      loginPage.validateErrorLogin()
    })
  })
})