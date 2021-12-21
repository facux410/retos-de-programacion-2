const comparativa1 = parseInt(prompt("ingrese un numero"));
const comparativa2 = parseInt(prompt("ingrese un numero"));
const comparativa3 = parseInt(prompt("ingrese un numero"));

if (comparativa1 > comparativa2 && comparativa1 > comparativa3) {
  alert(`${comparativa1} es mayor que ${comparativa2} y ${comparativa3} `);
}

if (comparativa2 > comparativa1 && comparativa2 > comparativa3) {
  alert(`${comparativa2} es mayor que ${comparativa1} y ${comparativa3} `);
}

if (comparativa3 > comparativa2 && comparativa3 > comparativa1) {
  alert(`${comparativa3} es mayor que ${comparativa2} y ${comparativa1} `);
}
