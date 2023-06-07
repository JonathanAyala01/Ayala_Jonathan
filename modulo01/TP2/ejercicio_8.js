function NumerosAleatorios() {
    var numeros = [];
    var min = 1;
    var max = 100;
  
    
    while (numeros.length < 100) {
      var numero = Math.floor(Math.random() * (max - min + 1)) + min;
      if (!numeros.includes(numero)) {
        numeros.push(numero);
      }
    }
  
    
    for (var i = 0; i < numeros.length; i++) {
      document.write(numeros[i] + "<br>");
    }
  }
  
 NumerosAleatorios();