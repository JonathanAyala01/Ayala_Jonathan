function cadenainf(cadena) {
    if (cadena === cadena.toUpperCase()) {
        document.write("La cadena está formada solo por mayúsculas");
    } else if (cadena === cadena.toLowerCase()) {
        document.write("La cadena está formada solo por minúsculas");
    } else {
        document.write("La cadena está formada por una mezcla de mayúsculas y minúsculas");
    }
  }
  
  var texto = prompt("Ingresa una cadena de texto:");
  cadenainf(texto);