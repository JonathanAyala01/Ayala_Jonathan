var texto = prompt("Ingresa un texto:-----");
var posicion = -1;

for (var i = 0; i < texto.length; i++) {
  var caracter = texto[i].toLowerCase();

  if (caracter === "a" || caracter === "e" || caracter === "i" || caracter === "o" || caracter === "u") {
    posicion = i + 1;
    break;
  }
}

if (posicion !== -1) {
  document.write(`La primera vocal introducido esta en la posicion : ${posicion}`);
} else {
  document.write("No se encontraron vocales en el texto.");
}




