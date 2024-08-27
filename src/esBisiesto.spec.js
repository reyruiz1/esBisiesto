
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
});