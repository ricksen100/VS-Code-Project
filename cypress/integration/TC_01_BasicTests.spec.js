describe("Login Suite", function () {
  it("Login Test", function () {
    cy.log(this.test.parent.title);
    cy.log(this.test.title);
    cy.log(this.test);
    //Arrange
    cy.visit("https://react-redux.realworld.io/#/login?_k=g43dop");
    //////////Act
    cy.get('input[type="email"]').type("dipyaman96@gmail.com");
    cy.get('input[type="password"]').type("MakeinIndia@100");
    cy.get('button[type="submit"]').click();
    ////Assert1
    cy.contains("No articles are here... yet.").should("be.visible");
  });

  it("Second Test", () => {
    cy.log(this.test.parent.title);
  });
});
