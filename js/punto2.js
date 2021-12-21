const nota1 = parseInt(prompt("ingresar una nota de Musica"));

const nota2 = parseInt(prompt("ingresar una nota de Matematica"));
const nota3 = parseInt(prompt("ingresar una nota de ingles"));

const promedio = (nota1 + nota2 + nota3) / 3;

if (promedio >= 7) {
  alert(`promocionaste con ${promedio.toFixed(2)}`);
}
