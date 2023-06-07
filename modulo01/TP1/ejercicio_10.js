let meses = ['enero', 'febrero', 'marzo', 
'abril', 'mayo', 'junio', 'julio', 'agosto', 
'septiembre', 'octubre', 'noviembre', 'diciembre'];

let _numeromes = prompt("Ingresa un número del 1 al 12 para obtener el nombre del mes: ");
let _mesindicado = parseInt(_numeromes);

if (_numeromes <=12 ) {
    document.write(`El numero ingresado: ${_mesindicado} corresponde al mes ${meses[_numeromes -1]} `)
;
} else {alert("INGRESE UN NUMERO VALIDO DE 1 A 12")
    
};

