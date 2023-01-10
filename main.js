function tocarSom (idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++){

    listaDeTeclas[contador].onclick = tocarSom
    
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function (){
        tocarSom(idAudio);
    }

    tecla.onkeydown = function (evento){

        //console.log(evento.code) Este comando serve para identificar a tecla que foi clicada com a ajuda do DEVTOOLS

        if(evento.code ==='Space'|| evento.code ==='Enter'){
            tecla.classList.add('ativa');
        }
    }
    tecla.onkeyup = function(){
        tecla.classList.remove ('ativa')
    
    }
}
