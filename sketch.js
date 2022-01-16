//Bestuuring en regels

//Je beweegt met je muis

//Je moet de bal tegenhouden zodat je niet af gaat

//Probeer een de hoogste score te halen

// Pong codering

// Random snelheid
var xBall = Math.floor(Math.random() * 300) + 50;
var yBall = 50;
var xSpeed = (10, 10);
var ySpeed = (-8, -4);
var score = 0;
var hoogstescore = 0;
var r = 255;
var g = 255;
var b = 255;

// Canvas
function setup() {
  createCanvas(500, 400);
}

//Background

function draw() {

  // Background
  background(0);

  // Paddle
  fill('#ffffff');
  rect(mouseX, 375, 90, 15);

  //Functions
  move();
  display();
  bounce();
  //resetBall();
  paddle();

  //Score 
  fill('#d9c3f7');
  textSize(24);
  text("Score: " + score, 10, 25);
  text('highscore: '+ hoogstescore,10,50);
}

// Ball Functions
function move() {
  xBall += xSpeed;
  yBall += ySpeed;
}


function bounce() {

  if (xBall < 10 ||
    xBall > 500 - 10) {
    xSpeed *= -1;
  }
  if (yBall < 10 ||
    yBall > 400 - 10) {
    ySpeed *= -1;
  }
  
}


function display() {
  fill(r,g,b);
  ellipse(xBall, yBall, 20, 20);
}

// Bounce off Paddle
function paddle() {
  if(yBall > 390){
      score = 0;
  xBall = 20; yBall = 20;
xSpeed = (10, 10);
ySpeed = (-8, -4);
    r = 255;
    g = 255;
    b = 255;
  }
  if ((xBall > mouseX &&
      xBall < mouseX + 90) &&
    (yBall + 10 >= 375)) {
    xSpeed *= -1.1;
    ySpeed *= -1.1;
    score++;
    r = random(100,255);
    g = random(100,255);
    b = random(100,255);
    if(score > hoogstescore){
      hoogstescore++;
    }
  }
}