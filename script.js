const board = document.querySelector(".game-board");
const world = document.querySelector(".world");
const piklz = document.querySelector(".player");

const up = document.querySelector(".move-up");
const down = document.querySelector(".move-down");
const left = document.querySelector(".move-left");
const right = document.querySelector(".move-right");

const TILE = 100;

// Change these whenever your island changes size
const MAP_WIDTH = 20;
const MAP_HEIGHT = 20;

let playerX = 0;
let playerY = 0;

function update() {
  // Keep player inside map
  playerX = Math.max(0, Math.min(playerX, MAP_WIDTH - 1));
  playerY = Math.max(0, Math.min(playerY, MAP_HEIGHT - 1));

  // Put Piklz on the map
  piklz.style.left = playerX * TILE + "px";
  piklz.style.top = playerY * TILE + "px";

  // Camera position
  let cameraX = playerX * TILE - board.clientWidth / 2 + TILE / 2;

  let cameraY = playerY * TILE - board.clientHeight / 2 + TILE / 2;

  // Maximum camera movement
  const maxCameraX = MAP_WIDTH * TILE - board.clientWidth;

  const maxCameraY = MAP_HEIGHT * TILE - board.clientHeight;

  // Stop camera at edges
  cameraX = Math.max(0, Math.min(cameraX, maxCameraX));
  cameraY = Math.max(0, Math.min(cameraY, maxCameraY));

  anime({
    targets: world,
    translateX: -cameraX,
    translateY: -cameraY,
    duration: 180,
    easing: "easeOutQuad",
  });
}

// DOWN
down.onclick = () => {
  playerY++;
  piklz.src = "src/PiklzGameDOWN.png";
  update();
};

// UP
up.onclick = () => {
  playerY--;
  piklz.src = "src/PiklzGameUP.png";
  update();
};

// LEFT
left.onclick = () => {
  playerX--;
  piklz.src = "src/PiklzGameLEFT.png";
  update();
};

// RIGHT
right.onclick = () => {
  playerX++;
  piklz.src = "src/PiklzGameRIGHT.png";
  update();
};

update();
