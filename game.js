import {
  snakeSpeed,
  update as updateSnake,
  draw as drawSnake,
} from "./snake.js";

// set up the game loop
let lastRenderTime = 0;
const gameBoard = document.getElementById("game-board");

function gameLooper(currentTime) {
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  window.requestAnimationFrame(gameLooper);
  if (secondsSinceLastRender < 1 / snakeSpeed) return;
  lastRenderTime = currentTime;

  update();
  draw();
}

function update() {
  updateSnake();
}

function draw() {
  gameBoard.innerHTML = "";
  drawSnake(gameBoard);
}

window.requestAnimationFrame(gameLooper);
