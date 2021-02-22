// let's write a program that creates rock paper scissors logic using circle, square, triangle
//global variables
let player;
let mouseCoords = [];


// gets mouse position when clicked

addEventListener('mousedown', mouseClick);

function mouseClick(e) {
  console.log( `
    Screen X/Y: ${e.screenX}, ${e.screenY}
	Client X/Y: ${e.clientX}, ${e.clientY}`);
	mouseCoords =  [e.clientX, e.clientY];
}


//initializing variables to create a canvas 
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

//set choices
let choices =  ["rock", "paper", "scissors"];

if ["rock"] (x>1)
  
  if ["paper"] (x>0)

   if ["scissors"] (x<0.5)

function randChoice(x){
    return Math.floor(Math.random()*x);
}
  return Math.floor(Math.random()*x);
    Math.random(x)
let cpuChoice = randChoice(choices.length);
 
console.log(choices[cpuChoice]);

if (cpuChoice == 0){
  drawCircle();
}
// else if (cpuChoice == 1){
//   drawSquare();
// }
// else {
//   drawTriangle();
// }

//init a function to draw a triangle on the canvas
function drawTriangle() {
      ctx.beginPath();
      ctx.moveTo(75, 50);
      ctx.lineTo(100, 75);
      ctx.lineTo(100, 25);
      ctx.fill();
    }
//init a function to drawa square on the canvas
  function drawSquare(){
    ctx.fillRect(25, 25, 100, 100);
    ctx.clearRect(45, 45, 60, 60);
    ctx.strokeRect(50, 50, 50, 50);
  }

  // welcome to objects
  var myCircle = {
    x: 100,
    y: 75,
    radius: 50
};
//init a fucntion to draw a circle on the canvas
  function drawCircle(){
    //ctx.beginPath();
    ctx.arc(myCircle.x, myCircle.y, myCircle.radius, 0, 2 * Math.PI);
    ctx.stroke();
  }

  function main(){
  }

main();