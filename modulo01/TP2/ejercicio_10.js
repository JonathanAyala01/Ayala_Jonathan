function CantDias() {
    var numeroMes = parseInt(prompt("Ingrese numero del mes entre 1 y 12 :"));
  
    while (numeroMes < 1 || numeroMes > 12) {
      numeroMes = parseInt(prompt("Número de mes inválido. Ingrese nuevamente:"));
    }
  
    var dias;
  
    switch (numeroMes) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        dias = 31;
        break;
      case 4:
      case 6:
      case 9:
      case 11:
        dias = 30;
        break;
      case 2:
        dias = 28;
        break;
    }
  
    document.write(`El mes ${numeroMes} tiene: ${dias} dias`);
  }
  
  CantDias();