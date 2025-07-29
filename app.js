//variables//
let numeroSecreto = math.floor(Math.random() * 100) + 1; // Genera un número secreto entre 1 y 100
console.log(numeroSecreto); // Muestra el número secreto en la consola para depuración
let numeroUsuario = 0;
let intentos = 1;
let palabraVeces = "vez";
let maximosintentos = 3;
while (numeroSecreto != numeroUsuario) {
    numeroUsuario = parseInt(prompt("Me indicas un número por favor:"));

    console.log(typeof(numeroUsuario));
    /*
    codigo de comparación
    */
    if (numeroUsuario == numeroSecreto) {
        alert( `Acertaste el número secreto ${numeroUsuario}, lo conseguiste en ${intentos} ${palabraVeces}`);
    } else {
        if (numeroUsuario < numeroSecreto) {
            alert('El número es mayor que el que has indicado');
        } else { if (numeroUsuario > numeroSecreto) {
            alert('El número es menor que el que has indicado');}
        }}
        intentos = intentos +1;
        palabraVeces = (intentos == 1) ? "vez" : "veces";
        if (intentos > maximosintentos) {
            alert(`Llegaste al número máximo de intentos ${maximosintentos}`);
            break;
        }
        // alert('Lo siento, no acertaste el numero');}
    }
//fin del while// 
