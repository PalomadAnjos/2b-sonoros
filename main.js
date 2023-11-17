//Declaração/criação a função tocaSomPix
function tocaSomPix() {
    document.querySelector(idElementoAudio).play(); 
 }
//criando a referências constante listaDeTeclas e buscando a classe coletiva .tecla
 const listaDeTeclas =document.querySelectorAll('.tecla');
 //criação da repetição "while" trocado pelo "for" com variavel,condição e incremento
 for(let contador = 0; contador < istaDeTeclas.length;contador++){
  const teclas = listaDeTeclas[contador]
  const efeito = 

 }
let contador = 0;
 while(contador < listaDeTeclas.length){
   const efeito = listaDeTeclas[contador].classList[1]
   const idAuio = "#som_" + efeito;
 listaDeTeclas[contador].onclick = function(){
      tocaSom(idAuio);
   }
   contador = contador + 1;
   console.log(contador);
   }