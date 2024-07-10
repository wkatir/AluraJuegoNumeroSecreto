let numeroSecreto;
let intentos = 1;
let listaNumerosSorteados = [];
let numeroMaximo = 10;



function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);
    
    console.log(numeroSecreto);
    console.log(intentos);
    if(numeroSecreto === numeroUsuario){
        asignarTextoElemento("p",`Acertaste el numero en ${intentos} ${(intentos == 1 ) ? "vez" : "veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        //El usuario no acertó
        if(numeroUsuario > numeroSecreto){
            asignarTextoElemento("p","El numero secreto es menor");
        }else{
            asignarTextoElemento("p","El numero secreto es mayor");
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector("#valorUsuario").value = "";
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //Si el numero generado esta incluido en la lista
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    //Si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento("p","Ya se sortearon todos los numeros posibles");
    } else{
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento("h1", "Juego del numero secreto");
    asignarTextoElemento("p", `Indica un numero del 1 al ${numeroMaximo}`);
     //Generar un nuevo numero aleatorio
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //limpiar la caja 
    limpiarCaja();
    //Indicar mensaje de intervalo de numero
    condicionesIniciales();
    //Desabilitar el boton  de nuevo juego
    //Inicializar el numero de intentos 
    document.querySelector("#reiniciar").setAttribute("disabled","true");
}



condicionesIniciales();