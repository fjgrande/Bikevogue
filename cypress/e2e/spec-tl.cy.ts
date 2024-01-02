describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:5173/");
    cy.findByRole("heading", { name: /your favorite bikes/i }).should("exist");
    cy.findByText(/add/i).click();
  });
});
