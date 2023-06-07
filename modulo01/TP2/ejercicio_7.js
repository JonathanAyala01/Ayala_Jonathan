var texto = prompt("Ingresa un texto:");
var textoInvertido = invertirTexto(texto);

document.write(textoInvertido);

function invertirTexto(texto) {
  var arregloCaracteres = texto.split("");
  var arregloInvertido = arregloCaracteres.reverse();
  var textoInvertido = arregloInvertido.join("");
  return `El texto invertido seria : ${textoInvertido}`;
}