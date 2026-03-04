// Luna Escobedo Andrea TDSM4A
// Exercise 3 - Interactive Counter Menu

let counter = 0;
let option;

do {
    option = prompt(
        "=== MENÚ INTERACTIVO ===\n" +
        "Valor actual del contador: " + counter + "\n\n" +
        "1. Incrementar contador\n" +
        "2. Decrementar contador\n" +
        "3. Salir\n\n" +
        "Elige una opción (1-3):"
    );

    option = parseInt(option);
    switch(option) {
        case 1:
            counter++;
            alert("Contador incrementado. Nuevo valor: " + counter);
            break;
            
        case 2:
            counter--;
            alert("Contador decrementado. Nuevo valor: " + counter);
            break;
            
        case 3:
            alert("¡Hasta luego! Valor final del contador: " + counter);
            break;
            
        default:
            alert("Opción no válida. Por favor elige 1, 2 o 3.");
    }
    
} while(option !== 3);