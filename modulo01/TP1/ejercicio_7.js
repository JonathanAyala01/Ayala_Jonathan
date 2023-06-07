
let dato, resultado; // Definimos dos variables llamadas "dato" y "resultado".
val1 = window.prompt("Introduce tu nombre", "..."); // Mostramos una ventana de diálogo que le pide al usuario que introduzca su nombre y lo guardamos en la variable "val1".
val2 = window.prompt("Introduce tu apellido", "..."); // Mostramos otra ventana de diálogo que le pide al usuario que introduzca su apellido y lo guardamos en la variable "val2".
resultado = `Concatenado tu nombre y apellido es: ${val1} ${val2} ` ; // Concatenamos el nombre y el apellido del usuario y guardamos el resultado en la variable "resultado".
document.write(resultado); // Mostramos el resultado en la página web utilizando la función document.write().