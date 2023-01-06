function tocarSom (){
    document.querySelector('#som_tecla_pom').play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0

while( contador < listaDeTeclas.length){

    listaDeTeclas[contador].onclick = function (){
        tocarSom('')
    }

    contador = contador + 1

    console.log(contador)
}