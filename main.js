function tocaSom (seletorAudio){
    const elemento = document.querySelector(seletorAudio);

    if (elemento != null && elemento.localName === 'audio'){
        elemento.play();
    }else{
        alert("Elementço não encontrado ou seletor inválido!")
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++){

    listaDeTeclas[contador].onclick = tocaSom
    
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function (){
        tocaSom(idAudio);
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
