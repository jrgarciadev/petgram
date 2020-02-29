/* global describe, it, cy */

describe("Petgram", function() {
  it("para ver app funciona", function() {
    cy.visit("/")
  })
  it("navegamos a una categoria y vemos fotos", function() {
    cy.visit("/pet/1")
    cy.get("article")
  })
  it("si podemos navegar por la navabr a la home", function() {
    cy.visit("/pet/1")
    cy.get("nav a")
      .first()
      .click()
    cy.url().should("include", "/")
  })
  it("slos usuarios no registrados ven el formulario de registro e inicio de sesion al ir a favs", function() {
    cy.visit("/favs")
    cy.get("form").should("have.length", 1)
  })
})
