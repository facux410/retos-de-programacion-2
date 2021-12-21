const numero = prompt("ingrese un numero de 0 a 99");
if (numero.length > 1 && numero.length < 3) {
  alert("tiene 2 digitos");
} else if (numero.length > 0 && numero.length < 2) {
  alert("tiene 1 digitos");
}
