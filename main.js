
const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas[0].addEventListener("click", function(){
    document.querySelector('#som_tecla_pom').play();
})

let contador = 0

while( contador < listaDeTeclas.length){

    contador = contador + 1

    console.log(contador)
}