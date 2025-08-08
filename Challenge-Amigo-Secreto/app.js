// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos=[];



function agregarAmigo() {
    let nombre = document.getElementById('amigo').value;
    if (nombre.trim() === "") {
        alert("Por favor, ingresa un nombre válido.");
        limpiarCampo('amigo');
        return;
    } else if (amigos.includes(nombre)) {
        alert("Tu amigo ya se encuentra agregado");
        limpiarCampo('amigo');
        return;
    } else {
        amigos.push(nombre);
        limpiarCampo('amigo');
    }
    console.log(amigos)
    mostrarAmigos();
    return;
}

function limpiarCampo(id){
    document.querySelector(`#${id}`).value = '';
}

function mostrarAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ""; // Limpiar la lista antes de agregar nuevos elementos

    for (let i = 0; i < amigos.length; i++) {
        listaAmigos.innerHTML += `<li>${amigos[i]}</li>`;
    }
}

function sortearAmigo() {
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // Limpiar resultado anterior

    if (amigos.length === 0) {
        resultado.innerHTML = '<li>No hay amigos para sortear.</li>';
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    resultado.innerHTML = `<li>El amigo sorteado es: <strong>${amigoSorteado}</strong></li>`;
}