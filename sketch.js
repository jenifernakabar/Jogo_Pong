//variaveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2;

// movimentos da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostrarBolinha();
  movimentarBolinha();
  verificarColisaoBorda();

}

function mostrarBolinha(){
  circle(xBolinha, yBolinha, diametro)
}

function movimentarBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificarColisaoBorda(){
   if(xBolinha + raio > width ||
    xBolinha - raio < 0){
    velocidadeXBolinha *= -1;
    }
  
   if(yBolinha + raio > height ||
    yBolinha - raio < 0){
    velocidadeYBolinha *= -1;
    }
}

