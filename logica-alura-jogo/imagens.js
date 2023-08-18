// imagens do jogo

let imagemDaEstrada;
let imagemDoCarro1, imagemCarro2, imagemCarro3;
let imagemDoAtor;

let somDaTrilha;
let somDaColisao;
let somDoPonto;


function preload(){
  imagemDaEstrada = loadImage("imagens/estrada.png");
  imagemDoAtor = loadImage("imagens/ator-1.png");
  imagemDoCarro1 = loadImage("imagens/carro-1.png");
  imagemCarro2 = loadImage("imagens/carro-2.png");
  imagemCarro3 = loadImage("imagens/carro-3.png");  
  imagensCarros = [imagemDoCarro1, imagemCarro2, imagemCarro3, imagemDoCarro1, imagemCarro2, imagemCarro3];
  
  somDaTrilha = loadSound("sons/trilha.mp3");
  somDaColisao = loadSound("sons/colidiu.mp3");
  somDoPonto = loadSound ("sons/pontos.wav");
  }