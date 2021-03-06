describe("Positive case Customer Login Test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("customer can see login form", () => {
    cy.get("[data-test='txt-username']").should("be.visible");
    cy.get("[data-test='txt-password']").should("be.visible");
    cy.get("[data-test='btn-submit']").should("be.visible");
  });

  it("customer can login", () => {
    cy.loginAsCustomer();
    cy.logOut();
  });
});

describe("Negative case Customer Login", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("show error when both input empty", () => {
    cy.get("[data-test='btn-submit']").click();
    cy.findByText(/insert username/i);
    cy.findByText(/insert password/i);
  });

  it("show error when username input empty", () => {
    cy.get("[data-test='txt-password']").type("123456");
    cy.get("[data-test='btn-submit']").click();
    cy.findByText(/insert username/i);
  });

  it("show error when password input empty", () => {
    cy.get("[data-test='txt-username']").type("myuser");
    cy.get("[data-test='btn-submit']").click();
    cy.findByText(/insert password/i);
  });

  it("show error when username and password wrong", () => {
    cy.get("[data-test='txt-username']").type("myuser");
    cy.get("[data-test='txt-password']").type("1234567");
    cy.get("[data-test='btn-submit']").click();
    cy.findByText(/password\/username is incorrect/i);
  });
});
