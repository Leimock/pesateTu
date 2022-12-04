import { describe, expect, it } from "vitest";
import { getImc } from "../src/util";

describe("Conjunto de tests", () => {
  it("imc peso bajo", () => {
    const imc = getImc(180, 59);
    expect(imc).toBeCloseTo(18.2);
  });

  it("imc peso normal", () => {
    const imc = getImc(170, 60);
    expect(imc).toBeCloseTo(20.8);
  });

  it("imc peso sobrepeso", () => {
    const imc = getImc(160, 70);
    expect(imc).toBeCloseTo(27.3);
  });

  it("imc peso obesidad", () => {
    const imc = getImc(150, 70);
    expect(imc).toBeCloseTo(31.1);
  });
});
