const fechadeusuario = prompt("ingrese fecha en este formato AAAA-MM-DD");
const fecha = new Date(fehchadeusuario);

if (fecha.getDate() === 24 && fecha.getMonth() === 11) {
  alert("es navidad");
} else {
  alert("no es navidad");
}
