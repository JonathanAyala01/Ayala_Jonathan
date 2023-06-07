var numEntero = 5;
var factorial = 1;

for (var i = numEntero; i >= 1; i--) {
  factorial *= i;
}

document.write(`El factorial de ${numEntero} es: ${factorial}`);