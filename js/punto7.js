const preguntastotales = parseInt(prompt("ingrese el total de preguntas"));
const preguntascorrectas = parseInt(
  prompt("ingrese el total de respuestas correctas")
);

const porcentaje = (preguntascorrectas * 100) / preguntastotales;
if ((porcentaje) => 90) {
  alert("nivel maximo");
} else if (porcentaje >= 75 && porcentaje < 90) {
  alert("nivel medio");
} else if (porcentaje >= 50 && porcentaje < 75) {
  alert("nivel regular");
} else if (porcentaje < 50) {
  alert("fuera de nivel");
}
