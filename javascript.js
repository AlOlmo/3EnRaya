//Se crea una variable por boton
var boton1 = document.getElementById("1");
var boton2 = document.getElementById("2");
var boton3 = document.getElementById("3");
var boton4 = document.getElementById("4");
var boton5 = document.getElementById("5");
var boton6 = document.getElementById("6");
var boton7 = document.getElementById("7");
var boton8 = document.getElementById("8");
var boton9 = document.getElementById("9");


//Se ponen a la escucha los distintos botones
boton1.addEventListener("click", seleccion);
boton2.addEventListener("click", seleccion);
boton3.addEventListener("click", seleccion);
boton4.addEventListener("click", seleccion);
boton5.addEventListener("click", seleccion);
boton6.addEventListener("click", seleccion);
boton7.addEventListener("click", seleccion);
boton8.addEventListener("click", seleccion);
boton9.addEventListener("click", seleccion);

document.getElementById('cambio').addEventListener("click", cambio);

boton1.addEventListener("dblclick", anular);
boton2.addEventListener("dblclick", anular);
boton3.addEventListener("dblclick", anular);
boton4.addEventListener("dblclick", anular);
boton5.addEventListener("dblclick", anular);
boton6.addEventListener("dblclick", anular);
boton7.addEventListener("dblclick", anular);
boton8.addEventListener("dblclick", anular);
boton9.addEventListener("dblclick", anular);

var player = true;
var fin = false;

window.onload = function() {
    alert("1.Click para hacer un movimiento \n2.Boton de pasar el turno tras jugar \n3.Doble click para quitar una ficha y volver a colocar con click ")
}

//Da funcionalidad al boton de cambio de jugador, que alterna la variable "player" en funcion de la cual se pinta de azul(p1) o rojo(p2), cada vez que se cambie de jugador se comprobara si ha habido 3 en raya.
function cambio() {
    if (player == true) {
        player = false;
        document.getElementById('label').innerHTML = 'Jugador 2';
    } else {
        player = true;
        document.getElementById('label').innerHTML = 'Jugador 1';
    } comprobarFin();
}

//Pinta las casillas clicadas de azul (si se juega como p1) o de rojo (si se juega como p2)
function seleccion() {
    let id = this.id;
    let botones = document.querySelectorAll('button');
    let boton = botones[id - 1];
    if (player == true) {
        boton.classList.replace("libre", "Pplayer1");
        comprobarAzul();
    } else {
        boton.classList.replace("libre", "Pplayer2");
        comprobarRojo();
    } 
}

//Con doble click borra la pintura azul (si se juega como p1) o roja (si se juega como p2)
function anular() {
    let id = this.id;
    let botones = document.querySelectorAll('button');
    let boton = botones[id - 1];
    if (player == true) {
        boton.classList.replace("Pplayer1", "libre");
    } else {
        boton.classList.replace("Pplayer2", "libre"); 
    }
}

//Despues de cada jugada del p1 se lanza este comprobador de lineas que identifica un 3 en raya
function comprobarAzul() {
    
    if((boton1.classList == "Pplayer1" && boton2.classList == "Pplayer1" && boton3.classList == "Pplayer1") ||
    (boton4.classList == "Pplayer1" && boton5.classList == "Pplayer1" && boton6.classList == "Pplayer1") ||
    (boton7.classList == "Pplayer1" && boton8.classList == "Pplayer1" && boton9.classList == "Pplayer1") ||
    (boton1.classList == "Pplayer1" && boton4.classList == "Pplayer1" && boton7.classList == "Pplayer1") ||
    (boton2.classList == "Pplayer1" && boton5.classList == "Pplayer1" && boton8.classList == "Pplayer1") ||
    (boton3.classList == "Pplayer1" && boton6.classList == "Pplayer1" && boton9.classList == "Pplayer1") ||
    (boton1.classList == "Pplayer1" && boton5.classList == "Pplayer1" && boton9.classList == "Pplayer1") ||
    (boton7.classList == "Pplayer1" && boton5.classList == "Pplayer1" && boton3.classList == "Pplayer1")) {
        alert("El Jugador 1 ha ganado el juego!");
        fin = true;
    }
}

//Despues de cada jugada del p2 se lanza este comprobador de lineas que identifica un 3 en raya
function comprobarRojo() {
    
    if((boton1.classList == "Pplayer2" && boton2.classList == "Pplayer2" && boton3.classList == "Pplayer2") ||
    (boton4.classList == "Pplayer2" && boton5.classList == "Pplayer2" && boton6.classList == "Pplayer2") ||
    (boton7.classList == "Pplayer2" && boton8.classList == "Pplayer2" && boton9.classList == "Pplayer2") ||
    (boton1.classList == "Pplayer2" && boton4.classList == "Pplayer2" && boton7.classList == "Pplayer2") ||
    (boton2.classList == "Pplayer2" && boton5.classList == "Pplayer2" && boton8.classList == "Pplayer2") ||
    (boton3.classList == "Pplayer2" && boton6.classList == "Pplayer2" && boton9.classList == "Pplayer2") ||
    (boton1.classList == "Pplayer2" && boton5.classList == "Pplayer2" && boton9.classList == "Pplayer2") ||
    (boton7.classList == "Pplayer2" && boton5.classList == "Pplayer2" && boton3.classList == "Pplayer2")) {
        alert("El Jugador 2 ha ganado el juego!");
        fin = true;
    }
}

//Comprueba si ya ha habido un 3 en raya
function comprobarFin() {
    if (fin == true) {
        bug();
    }
}

//Bugea el juego con el mensaje "Fin del juego" en bucle infinito
function bug() {
    let n = false;
    do {
        alert("Fin del juego");
    } while(!n);
}


