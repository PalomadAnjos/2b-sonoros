//Declaração/criação a função tocaSomPix
function tocaSom() {
    document.querySelector(idElementoAudio).play(); 
 }
//criando a referências constante listaDeTeclas e buscando a classe coletiva .tecla
 const listaDeTeclas =document.querySelectorAll('.tecla');
 //criação da repetição "while" trocado pelo "for" com variavel,condição e incremento
 for(let contador = 0; contador < listaDeTeclas.length;contador++){
  const teclas = listaDeTeclas[contador];
  const efeito = listaDeTeclas[contador].classList[1];
   const idAudio = `#som_${efeito}`;
 teclas.onclick = function(){
      tocaSom(idAudio);
   }

   }