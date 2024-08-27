
import esBisiesto from "./esBisiesto.js";

describe("Es Bisiesto", () => {
  it("El 4 deberia considerarse como anio bisiesto", () => {
    expect(esBisiesto(4)).toEqual(true); //act assert
  });

  it("El 5 no deberia considerarse como anio bisiesto", () => {
    expect(esBisiesto(5)).toEqual(false);
  });

  it("El 2008  deberia considerarse como anio bisiesto", () => {
    expect(esBisiesto(2008)).toEqual(true);
  });

  it("El 1900 no es anio bisiesto es divisible entre 4 pero tambien por 100", () => {
    expect(esBisiesto(1900)).toEqual(false);
  });

  it("El 2100 no es anio bisiesto es divisible entre 100 pero no por 400", () => {
    expect(esBisiesto(2100)).toEqual(false);
  });

  it("El 2000 es anio bisiesto es divisible entre 400", () => {
    expect(esBisiesto(2000)).toEqual(true);
  });

  it("El 2024 es anio bisiesto", () => {
    expect(esBisiesto(2024)).toEqual(true);
  });
});