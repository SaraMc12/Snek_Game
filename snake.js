import { getSnakePosition } from "./movement";

export const snakeSpeed = 2;

const snakeBody = [
  { x: 10, y: 11 },
  { x: 11, y: 11 },
  { x: 12, y: 11 },
  { x: 13, y: 11 },
];
let newSegments = 0;

// update snake segments or child elements to follow the movements of the parent element or the head of the snake
export function update() {
  const snakePosition = getSnakePosition();
  for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = { ...snakeBody[i] };
  }
  //   update the movement of snakes head
  snakeBody[0].x += snakePosition.x;
  snakeBody[0].y += snakePosition.y;
}

export function draw(gameBoard) {
  snakeBody.forEach((segment) => {
    const snakeElement = document.createElement("div");
    snakeElement.style.gridRowStart = segment.y;
    snakeElement.style.gridColumnStart = segment.x;
    snakeElement.classList.add("snake");
    gameBoard.appendChild(snakeElement);
  });
}
