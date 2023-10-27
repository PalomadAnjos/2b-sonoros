//Declaração/criação a função tocaSomPix
function tocaSomPix() {
    document.querySelector('#som_tecla_pix').play(); 
 }

 //criando a referências constante listaDeTeclas e buscando a classe coletiva .tecla
 const listaDeTeclas =document.querySelectorAll('.tecla');
 
 let contador = 0;
 while(contador < 9){
   listaDeTeclas[contador].onclick = tocaSomPix;
   contador = contador + 1;
   console.log(contador);
   
}