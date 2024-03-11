let cor;

function setup() {
  createCanvas(1000, 1000);
  background("red"); 
  cor = color(random(0, 1000), random(0, 1000), random(0, 1000));
  posicaoHorizontal = 200;
  posicaoVertical = 200;
  
}

function draw() {
  fill("write");
  circle(posicaoHorizontal, posicaoVertical, 70);
if(mouseX < posicaoHorizontal) {
posicaoHorizontal--;
}
if(mouseX > posicaoHorizontal) {
posicaoHorizontal++;
}
if(mouseY < posicaoVertical) {
posicaoVertical--;
}
if(mouseY > posicaoVertical) {
posicaoVertical++;
}
if(mouseIsPressed) {
cor = color(random(0, 300), random(0, 300), random(0, 300), random(0, 300));
}
}
