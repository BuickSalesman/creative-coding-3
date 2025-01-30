const leftSquare = document.getElementById("left-square");
const leftHole = document.getElementById("left-hole");

const rightSquare = document.getElementById("right-square");
const rightHole = document.getElementById("right-hole");

let isSquareRight = false;
let isRightSquareGrabbed = false;
let isLeftSquareGrabbed = false;
let isMouseDown = false;
let timesPassed = 0;

checkIsSquareRight();

document.addEventListener("mousedown", () => {
  isMouseDown = true;
});

document.addEventListener("mouseup", () => {
  isMouseDown = false;
});

leftSquare.addEventListener("mousedown", () => {
  isRightSquareGrabbed = false;
  isLeftSquareGrabbed = true;
});

leftSquare.addEventListener("mouseup", () => {
  isLeftSquareGrabbed = false;
});

rightSquare.addEventListener("mousedown", () => {
  isLeftSquareGrabbed = false;
  isRightSquareGrabbed = true;
});

rightSquare.addEventListener("mouseup", () => {
  isRightSquareGrabbed = false;
});

leftHole.addEventListener("mouseenter", () => {
  if (!isMouseDown) return;

  if (isRightSquareGrabbed === true) {
    timesPassed++;
    isRightSquareGrabbed = false;
    isLeftSquareGrabbed = true;
    rightSquare.textContent = null;
    rightSquare.style.backgroundColor = "green";
    leftSquare.style.backgroundColor = "white";
    leftSquare.textContent = `times passed: ${timesPassed}`;
  } else if (isMouseDown === true && isRightSquareGrabbed === false) {
    timesPassed++;
    rightSquare.style.backgroundColor = "white";
    leftSquare.style.backgroundColor = "brown";
    rightSquare.textContent = `times passed: ${timesPassed}`;
  }
});

rightHole.addEventListener("mouseenter", () => {
  if (!isMouseDown) return;
  if (isLeftSquareGrabbed === true) {
    timesPassed++;
    isLeftSquareGrabbed = false;
    isRightSquareGrabbed = true;
    leftSquare.textContent = null;
    rightSquare.style.backgroundColor = "white";
    leftSquare.style.backgroundColor = "brown";
    rightSquare.textContent = `times passed: ${timesPassed}`;
  } else if (isMouseDown === true && isLeftSquareGrabbed === false) {
    timesPassed++;

    rightSquare.style.backgroundColor = "green";
    leftSquare.style.backgroundColor = "white";
    leftSquare.textContent = `times passed: ${timesPassed}`;
  }
});

function checkIsSquareRight() {
  if (isSquareRight === true) {
    rightSquare.style.backgroundColor = "white";
    leftSquare.style.backgroundColor = "brown";
  } else {
    rightSquare.style.backgroundColor = "green";
    leftSquare.style.backgroundColor = "white";
  }
}
