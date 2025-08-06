let numeroSecreto = numeroAleatorio(1, 10);
let intentos = 1;
let listaNumerosSorteados = [];

function verificar() {
  let numeroUsuario = parseInt(document.getElementById('numeroUsuario').value);

  if (isNaN(numeroUsuario)) {
    asignarTextoElemento('p', 'Por favor, ingresa un número válido.');
    return;
  }

  if (numeroUsuario === numeroSecreto) {
    asignarTextoElemento('p', `Felicidades, adivinaste el número secreto: ${numeroSecreto} en ${intentos} ${(intentos === 1) ? "intento" : "intentos"}`);
    document.getElementById('reiniciar').disabled = false;
  } else if (numeroUsuario > numeroSecreto) {
    asignarTextoElemento('p', 'El número secreto es menor que ' + numeroUsuario);
    limpiarInput();
  } else {
    asignarTextoElemento('p', 'El número secreto es mayor que ' + numeroUsuario);
    limpiarInput();
  }
  intentos++;
}

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.textContent = texto;
}

function numeroAleatorio(min, max) {

    let numeroGenerado = Math.floor(Math.random() * (max - min + 1)) + min;
    
    if (listaNumerosSorteados.includes(numeroGenerado)) {
        return numeroAleatorio(min, max);
    }else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
         
    }
}

function limpiarInput(){

    document.querySelector('#numeroUsuario').value = '';
} 

function reiniciarJuego() {
    numeroSecreto = numeroAleatorio(1, 10);
    intentos = 1;
    limpiarInput();
    asignarTextoElemento('p', 'Adivina el número del 1 al 10');

    document.getElementById('reiniciar').disabled = true;
}
asignarTextoElemento('h1', 'Este es el juego de la adivinanza');
asignarTextoElemento('p', 'Adivina el número del 1 al 10');

/*
DESAFIOS 1

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


DESAFIOS 2
// 1. IMC
function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

// 2. Factorial
function factorial(n) {
    if (n < 0) return undefined;
    let resultado = 1;
    for (let i = 2; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}

// 3. Conversión de dólares a reales
function convertirDolarAReal(dolares) {
    const cotizacion = 4.80;
    return dolares * cotizacion;
}

// 4. Área y perímetro de sala rectangular
function areaPerimetroRectangular(altura, anchura) {
    const area = altura * anchura;
    const perimetro = 2 * (altura + anchura);
    console.log(`Área: ${area}, Perímetro: ${perimetro}`);
}

// 5. Área y perímetro de sala circular
function areaPerimetroCircular(radio) {
    const pi = 3.14;
    const area = pi * radio * radio;
    const perimetro = 2 * pi * radio;
    console.log(`Área: ${area}, Perímetro: ${perimetro}`);
}

// 6. Tabla de multiplicar
function tablaMultiplicar(numero) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

*/