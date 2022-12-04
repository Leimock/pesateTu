describe("empty spec", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:5173/");
  });

  it("default", () => {
    cy.get("#resultado").contains("27.7 (Sobrepeso)");
  });

  it("peso bajo", () => {
    cy.get("#height").clear();
    cy.get("#height").type(180);
    cy.get("#range").invoke("val", 59).trigger("input");
    cy.get("#resultado").contains("18.2 (Peso Bajo)");
  });

  it("peso normal", () => {
    cy.get("#height").clear();
    cy.get("#height").type(180);
    cy.get("#range").invoke("val", 64).trigger("input");
    cy.get("#resultado").contains("19.8 (Normal)");
  });

  it("sobrepeso", () => {
    cy.get("#height").clear();
    cy.get("#height").type(180);
    cy.get("#range").invoke("val", 84).trigger("input");
    cy.get("#resultado").contains("25.9 (Sobrepeso)");
  });

  it("obesidad", () => {
    cy.get("#height").clear();
    cy.get("#height").type(180);
    cy.get("#range").invoke("val", 115).trigger("input");
    cy.get("#resultado").contains("35.5 (Obesidad)");
  });

  it("fallo altura", () => {
    cy.get("#height").clear();
    cy.get("#height").type(190);
    cy.get("#range").invoke("val", 115).trigger("input");
    cy.get("#resultado").contains(
      "La altura debe estar entre 1cm y 180cm, y el peso entre 1kg y 300kg"
    );
  });
});
