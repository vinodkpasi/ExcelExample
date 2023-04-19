/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe("example to-do app", function () {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit("https://example.cypress.io/todo");
  });

  it("Read excel files-Default", function () {
    cy.task("readXlsx", {
      file: "cypress/fixtures/users.xlsx",
      sheet: "Sheet1",
    }).then(function (rows) {
      this.users = rows;
      for (let i = 0; i < this.users.length; i++) {
        const user = this.users[i];
        cy.log(user.firstName);
        cy.log(user.lastName);
      }
    });
  });
  it("Read excel files-Alias", function () {
    cy.task("readXlsx", {
      file: "cypress/fixtures/users.xlsx",
      sheet: "Sheet1",
    }).then(function (rows) {
      this.users = rows;
      cy.wrap(rows).as("users");
    });
    cy.get("@users").then(function (users) {
      for (let i = 0; i < users.length; i++) {
        const user = this.users[i];
        cy.log(user.firstName);
        cy.log(user.lastName);
      }
    });
  });
});
