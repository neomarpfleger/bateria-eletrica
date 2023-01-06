function tocarSom (idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

let contador = 0

const listaDeTeclas = document.querySelectorAll('.tecla');

while( contador < listaDeTeclas.length){

    listaDeTeclas[contador].onclick = tocarSom
    
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`;

    console.log(idAudio)

    tecla.onclick = function (){
        tocarSom(idAudio);
    }

    contador = contador + 1;

    console.log(contador);
}