//Declaração/criação a função tocaSomPix
function tocaSomPix() {
    document.querySelector(idElementoAudio).play(); 
 }

 //criando a referências constante listaDeTeclas e buscando a classe coletiva .tecla
 const listaDeTeclas =document.querySelectorAll('.tecla');
 
 let contador = 0;
 while(contador < listaDeTeclas.length){
   const efeito = listaDeTeclas[contador].classList[1]
   const idAuio = "#som " + efeitos;
 listaDeTeclas[contador].onclick = function(){
      tocaSom(idAuio);
   }
   contador = contador + 1;
   console.log(contador);
   }