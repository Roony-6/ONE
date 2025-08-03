
let numeroSecreto= numeroAleatorio(1, 10);
function verificar(){
  let numeroUsuario = parseInt(document.getElementById('numeroUsuario').value);
  console.log(numeroUsuario);
  console.log(numeroSecreto);
}
function asignaarTextoElemento(elemento, texto){
    let elementoHTML=document.querySelector(elemento);
    elementoHTML.textContent=texto;
}

function numeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

asignaarTextoElemento('h1','Este es el juego de la adivinanza');
asignaarTextoElemento('p','Adivina el nmero del 1 al 10');


/*
DESAFIOS

function holaMUndo(){
    console.log('Hola mundo');
}
function saludo(nombre){
    console.log(`Hola ${nombre}`);
}
function doble(numero){
    return numero * 2;
}
function mean(dato1, dato2,dato3){
    return (dato1 + dato2 + dato3) / 3;
}
function numeroMayor(numero
, numero2){
    if(numero1 > numero2){
        return numero1;
    }else{
        return numero2;
    }
}
function potencia(numero){
    return numero * numero;
}
