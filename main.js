<<<<<<< HEAD
function tocaSom(){
    document.querySelector().play();
}

=======
function tocarSom (idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

>>>>>>> 709306399d23f0a601799efb5806cbe0e695df15
let contador = 0

const listaDeTeclas = document.querySelectorAll('.tecla');

while( contador < listaDeTeclas.length){

<<<<<<< HEAD
    listaDeTeclas[contador].onclick = tocaSom
    contador = contador + 1
=======
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
>>>>>>> 709306399d23f0a601799efb5806cbe0e695df15

    const idAudio = `#som_${instrumento}`;

    console.log(idAudio)

    tecla.onclick = function (){
        tocarSom(idAudio);
    }

    contador = contador + 1;

    console.log(contador);
}