//texto mas largo

var valores = [true, false, 2, "hola", "mandioca", 3, "char"];
let mayor = "";

for (const dato of valores) {
    if (dato.length > mayor.length) {
        mayor = dato;
    }
}

document.write(`El texto mas largo es ${mayor } <br>`);


//orden mayor a menor

var soloTexto = valores.filter(function (elemento) {
  return typeof elemento === "string";
});

soloTexto = soloTexto.sort(function (a, b) {
  return a.length - b.length;
});

document.write(`Textos ordenados de menor a mayor : ${soloTexto} <br>` );

//operaciones matemáticas

var num = valores.filter(function (elemento) {
  return typeof elemento === "number";
});

var suma = num[0] + num[1];
var resta = num[0] - num[1];
var multiplicacion = num[0] * num[1];
var division = num[0] / num[1];

document.write( `Suma: ${suma} <br>`);
document.write(`Resta: ${resta}<br>`);
document.write(`Multip: ${multiplicacion} <br>`);
document.write(`Division: ${division}`);