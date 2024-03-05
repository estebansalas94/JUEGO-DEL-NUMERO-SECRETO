let numeroSecreto = 0;
let numeroIntentos = 0;
let listaNumeroSorteados = [];
let numeroMaximo = 10;

//asignar un texto a elementos de HTML
function asignarTextoElementos(elemento,texto) {
     let elementoHTML = document.querySelector(elemento,);
     elementoHTML.innerHTML = texto;
     return;
}
function verificarIntento() {
     let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
     
     if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElementos('p',`Acertaste el número en ${numeroIntentos} ${(numeroIntentos === 1) ? 'intento' : 'intentos'}`)
        document.getElementById('reiniciar').removeAttribute('disabled')
     } else {
        //el usuario no asertó
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElementos('p','El numero screto es menor');
        } else {
            asignarTextoElementos('p',('El número secreto es mayor'));
        } 
        numeroIntentos++;
        limpiarCaja();
     }
     return;
}

function limpiarCaja(){
     document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    //generar numeros secretos
     let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

     console.log(numeroGenerado);
     console.log(listaNumeroSorteados);
     //si ya sorteamos todos los numeros
     if (listaNumeroSorteados.length === numeroMaximo) {
         asignarTextoElementos('p','Ya se sortearon todos los números posibles');
     } else {
        //si el numero generado esta incluido en la lista 
         if (listaNumeroSorteados.includes(numeroGenerado)) {
              return generarNumeroSecreto();
         } else {
              listaNumeroSorteados.push(numeroGenerado);
              return numeroGenerado;
         }
     }
}

function condicionesIniciales() {
     asignarTextoElementos('h1','Juego del número secreto');
     asignarTextoElementos('p',`Indica un número del 1 al ${numeroMaximo}`);
     numeroSecreto = generarNumeroSecreto();
     numeroIntentos = 1;
}

function reiniciarJuego() {
     //limpiar la caja
     limpiarCaja();
     //indicar mensaje de intervalos de numero
     //generar el numero aleatorio
     //iniciar el numero de intentos
     condicionesIniciales();
    //deshabilitar el boton de nuevo juego
     document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();


