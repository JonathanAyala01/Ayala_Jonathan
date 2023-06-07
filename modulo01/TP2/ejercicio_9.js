function Notas() {
    var cantNotas = parseInt(prompt("Ingrese la cantidad de notas:"));
    var sumaNotas = 0;
  
    for (var i = 1; i <= cantNotas; i++) {
      var nota = parseInt(prompt("Ingrese la nota " + i + ":"));
      
      while (nota < 0 || nota > 10) {
        nota = parseInt(prompt("Nota inválida. Ingrese la nota " + i + " nuevamente:"));
      }
  
      sumaNotas += nota;
    }
  
    var promedio = sumaNotas / cantNotas;
    var mensaje;
  
    if (promedio < 5) {
      mensaje = "Reprobado";
    } else if (promedio >= 6 && promedio <= 8) {
      mensaje = "Aprobado";
    } else {
      mensaje = "Sobresaliente";
    }
  
    document.write(`El promedio de notas es: ${promedio} <br>`);
    document.write(`Resultado: ${mensaje}`);
  }
  
  Notas();