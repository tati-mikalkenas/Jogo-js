// variáveis do carro

let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros =[46, 100, 156, 210, 270, 318];
let velocidadeCarros = [2, 2.5, 3.2, 5, 3.3, 2.3];
let comprimentoCarro = 50;
let alturaCarro = 40;


function mostraCarro(){
  for (let i = 0; i < imagensCarros.length; i = i + 1){
    image(imagensCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
} 
  
function movimentaCarro(){
  for (let i= 0; i < imagensCarros.length; i++){
  xCarros[i] -= velocidadeCarros[i];
}
}

function posicaoInicialDoCarro(){
  for (let i=0; i < imagensCarros.length; i++){
    if (passouTela(xCarros[i])){
  xCarros[i] = 600;
}
}
}


function passouTela(xCarros){
  return xCarros < -50

}