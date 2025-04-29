let paddleLeftX = 20;
let paddleLeftY = 200;

let paddleSpeed = 2;
let paddleHeight = 80;
let paddleWidth = 10;

let leftScore = 0;
let highScore = 0;

let ballPosX = 200;
let ballPosY = 200;
let ballSpeedX = 0;
let ballSpeedY = 0;
let ballSize = 10;

let showHighScore = false;
let courtImage;

function preload() {
  courtImage = loadImage('https://s4bsa.github.io/diyps/court.jpg');
}

function setup() {
  createCanvas(400, 400);

  rectMode(CENTER);
  fill(255);
  noStroke();
  textSize(40);
  textAlign(CENTER);

  noLoop();
}

function draw() {
  background(0);
  image(courtImage, 0, 0, width, height); // draw the background image

  fill(255);
  rect(paddleLeftX, paddleLeftY, paddleWidth, paddleHeight);
  
  fill(194, 64, 54);
  rect(width - paddleWidth / 2, height / 2, paddleWidth, height);

  fill(255);
  ellipse(ballPosX, ballPosY, ballSize, ballSize);

  text(leftScore, width / 2, height * 0.1);

  ballPosX += ballSpeedX;
  ballPosY += ballSpeedY;

  let leftCollisionLeft = paddleLeftX - paddleWidth / 2 - ballSize / 2;
  let leftCollisionRight = paddleLeftX + paddleWidth / 2 + ballSize / 2;
  let leftCollisionTop = paddleLeftY - paddleHeight / 2 - ballSize / 2;
  let leftCollisionBottom = paddleLeftY + paddleHeight / 2 + ballSize / 2;

  if (
    ballPosX >= leftCollisionLeft &&
    ballPosX <= leftCollisionRight &&
    ballPosY >= leftCollisionTop &&
    ballPosY <= leftCollisionBottom
  ) {
    ballSpeedX = -ballSpeedX;
    ballSpeedY = (ballPosY - paddleLeftY) / 20;
    leftScore += 1;
  }

  if (ballPosX + ballSize / 2 >= width) {
    ballSpeedX = -ballSpeedX;
  }

  if (ballPosX < 0) {
    if (leftScore > highScore) {
      highScore = leftScore;
      showHighScore = true;
    } else {
      showHighScore = false;
    }
    leftScore = 0;
    resetBall();
  }

  if (ballPosY < 0 || ballPosY > height) {
    ballSpeedY = -ballSpeedY;
  }

  let leftDownPressed = keyIsDown(83);
  let leftUpPressed = keyIsDown(87);
  let leftMove = 0;

  if (leftDownPressed) leftMove += paddleSpeed;
  if (leftUpPressed) leftMove -= paddleSpeed;

  paddleLeftY = constrain(
    paddleLeftY + leftMove,
    paddleHeight / 2,
    height - paddleHeight / 2
  );

  if (!isLooping()) {
    fill(255);
    text('Click to start', width / 2, height / 2 - 20);
    if (showHighScore) {
      textSize(20);
      text(`[new high score: ${highScore}]`, width / 2, height / 2 + 20);
      textSize(40);
    }
  }
}

function resetBall() {
  ballPosX = width / 2;
  ballPosY = height / 2;
  ballSpeedX = random([-3, 3]);
  ballSpeedY = random([-1, 1]);
  noLoop();
}

function mousePressed() {
  if (!isLooping()) {
    resetBall();
    loop();
  }
}
