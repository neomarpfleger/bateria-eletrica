function tocaSom(){
    document.querySelector().play();
}

let contador = 0

const listaDeTeclas = document.querySelectorAll('.tecla');

while( contador < listaDeTeclas.length){

    listaDeTeclas[contador].onclick = tocaSom
    contador = contador + 1

    console.log(contador)
}