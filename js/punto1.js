const num1 = parseInt(prompt("ingrese un numero", ""));
const num2 = parseInt(prompt("ingrese un numero", ""));

if (num1 > num2) {
  alert(`la suma es ${num1 + num2} y la diferenciaa es ${num1 - num2}`);
} else {
  alert(
    `el producto es ${num1 * num2} y su divicion es ${num1 / num2.toFixed(2)}`
  );
}
