
function preload(){
seaImg = loadImage("sea.png");
shipImg1 = loadAnimation ("shipImg1, shipImg2");

sea.addImage(seaImg);

//codigo para reiniciar el fondo.
if (sea.x <0) {
   sea.x=sea.width/2;
}

}

function setup(){
  createCanvas(400,400);
  
}

function draw() {
  background("blue");
 
}