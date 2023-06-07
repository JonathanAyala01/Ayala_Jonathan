
function verpar(numero) {
    if (isNaN(numero)) {
        return alert("no ingresaste un numero valido")
        
    }
    if (numero % 2 === 0) {
      return "par";
    } else {
      return "impar";
    }
  }

  
var numeroEntero = prompt("Ingresa un número entero:");
 numeroEntero = parseInt(numeroEntero);
 
 var resultado = verpar(numeroEntero);
 
 document.write(`El número ${numeroEntero} es ${resultado}`);