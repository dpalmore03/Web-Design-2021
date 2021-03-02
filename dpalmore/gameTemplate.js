//sources
// https://eloquentjavascript.net/code/chapter/17_canvas.js
// https://developer.mozilla.org/en-US/docs/Web/API/Element/mousemove_event

//initializing GLOBAL variables to create a canvas
let canvasDiv;
let canvas;
let ctx;

// lets us know if game is initialized
let initialized = false;

// setup mouse position variables
let mouseX = 0;
let mouseY = 0;

// object setting mousePos
let mousePos = {
  x: 0,
  y: 0
};

let mouseClicks = {
  x: 0,
  y: 0
};

let mouseClickX = 0;
let mouseClickY = 0;


function init() {
  // create a new div element
  canvasDiv = document.createElement("div");
  canvasDiv.id = "chuck";
  // and give it some content
  canvas = document.createElement('canvas');
  // add the text node to the newly created div
  canvasDiv.appendChild(canvas);
  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("div1");
  document.body.insertBefore(canvasDiv, currentDiv);
  canvas.width = 500;
  canvas.height = 500;
  document.getElementById("chuck").style.width = canvas.width + 'px';
  document.getElementById("chuck").style.height = canvas.height + 'px';
  ctx = canvas.getContext('2d');
  initialized = true;
}

// create an object to hold attributes in order to draw a shape on canvas
// more comments
let oSquare = {
  w: 50,
  h: 50,
  x: 300,
  y: 300,
  // comments not here...
  vx: 0.1,
  vy: 0.1,
  color: 'black'
};

// create a constructor function that allows you to create more of one type of object
function fSquare(w, h, x, y, vx, vy, c) {
  this.w = w;
  this.h = h;
  this.x = x;
  this.y = y;
  this.vx = vx;
  this.vy = vy;
  this.color = c;
  this.draw = function () {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.w, this.h);
      ctx.strokeRect(this.x, this.y, this.w, this.h);
    };
}

// create a JS Class that allow you to create more objects from a 'template' using 'new'
class cSquare {
  constructor(w, h, x, y) {
    this.w = w;
    this.h = h;
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.color = 'black';
  }
  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.w, this.h);
    ctx.strokeRect(this.x, this.y, this.w, this.h);
  }
}

// create new object from existing object oSquare
let newSquare = Object.create(oSquare);

// create instance of constructor FUNCTION fSquare
let oneSquare = new fSquare(25, 25, 0, 0, 0, 0, 'red');
let twoSquare = new fSquare(25, 25, 150, 25, 0, 0, 'green');
let threeSquare = new fSquare(25, 25, 0, 0, 0, 0, 'blue');


// create instance of class cSquare
let anotherSquare = new cSquare(40, 40, 25, 25);



let myCircle = {
  r: 25,
  w: 50,
  h: 50,
  x: 150,
  y: 200,
  // comments not here...
  vx: 0.1,
  vy: 0.1,
  color: 'grey',
  draw: function () {
    ctx.fillStyle = myCircle.color;
    ctx.beginPath();
    ctx.arc(myCircle.x, myCircle.y, myCircle.r, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
  }
};


// gets mouse position when clicked
addEventListener('mousemove', e => {
  mouseX = e.offsetX;
  mouseY = e.offsetY;
  // we're gonna use this
  mousePos = {
    x: mouseX,
    y: mouseY
  };
});

// gets mouse position when clicked
addEventListener('mousedown', mouseClick);

function mouseClick(e) {
  console.log(`Screen X/Y: ${e.screenX}, ${e.screenY}, Client X/Y: ${e.clientX}, ${e.clientY}`);
  mouseClickX = e.clientX;
  mouseClickY = e.clientY;
  mouseClicks = {
    x: mouseClickX,
    y: mouseClickY
  };
}

function collide(a, b, xd, yd) {
  if (a.x <= b.x &&
    b.x <= a.x + a.w &&
    a.y <= b.y &&
    b.y <= a.y + a.h
  ) {
    console.log('collided');
    return true;
  }
}

// updates all elements on canvas
function update(mod) {
  if (collide(oSquare, myCircle)) {
    oSquare.color = 'red';
    myCircle.color = 'blue';
    console.log('circle collided')
  }
  if (collide(oSquare, mousePos)) {
    oSquare.color = 'red';
    oSquare.vx += 1;
  } else {
    oSquare.color = 'orange';
  }
  oSquare.x += oSquare.vx * mod;
  oSquare.y += oSquare.vy * mod;
  if (oSquare.x + oSquare.w >= canvas.width || oSquare.x <= 0) {
    oSquare.vx *= -1;
    oSquare.color = 'blue';
  }
  if (oSquare.y + oSquare.h >= canvas.height || oSquare.y <= 0) {
    oSquare.vy *= -1;
    oSquare.color = 'green';
  }
}

// draws text on canvas
function drawText(color, font, align, base, text, x, y) {
  ctx.fillStyle = color;
  ctx.font = font;
  ctx.textAlign = align;
  ctx.textBaseline = base;
  ctx.fillText(text, x, y);
}

// draws a square, circle, or rectangle
function drawSquare() {
  ctx.fillStyle = oSquare.color;
  ctx.fillRect(oSquare.x, oSquare.y, oSquare.w, oSquare.h);
  ctx.strokeRect(oSquare.x, oSquare.y, oSquare.w, oSquare.h);
}

// function drawCircle() {
//   ctx.fillStyle = myCircle.color;
//   ctx.beginPath();
//   ctx.arc(myCircle.x, myCircle.y, myCircle.r, 0, 2 * Math.PI);
//   ctx.stroke();
//   ctx.fill();
// }

// draws all the stuff on the canvas that you want to draw
function draw() {
  // clears the canvas before drawing
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawText('black', "24px Helvetica", "left", "top", "FPS: " + fps, 400, 0);
  drawText('black', "24px Helvetica", "left", "top", "Delta: " + gDelta, 400, 32);
  drawText('black', "24px Helvetica", "left", "top", "mousepos: " + mouseX + " " + mouseY, 0, 0);
  drawText('black', "24px Helvetica", "left", "top", "mouseclick: " + mouseClickX + " " + mouseClickY, 0, 32);
  drawSquare();
  threeSquare.draw();

  oneSquare.draw();
  twoSquare.draw();
  anotherSquare.draw();
  myCircle.draw();
}

// set variables necessary for game loop
let fps;
let now;
let delta;
let gDelta;
let then = performance.now();

//main game loop
function main() {
  now = performance.now();
  delta = now - then;
  gDelta = (Math.min(delta, 17));
  fps = Math.ceil(1000 / gDelta);
  if (initialized) {
    update(gDelta);
    draw();
  }
  then = now;
  requestAnimationFrame(main);
}
//performance.now measures time in milliseconds
//if (initialized) { update();to draw(); is the animation itself
//Math.ceil gets the fps to the nearest whole number during calculations
//delta=now-then determines time since last frame