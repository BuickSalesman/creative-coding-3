const rightSquare = document.getElementById("right-square");
const rightHole = document.getElementById("right-hole");
const leftSquare = document.getElementById("left-square");
const leftHole = document.getElementById("left-hole");
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

rightSquare.addEventListener("mousedown", () => {
  isLeftSquareGrabbed = false;
  isRightSquareGrabbed = true;
});

rightSquare.addEventListener("mouseup", () => {
  isRightSquareGrabbed = false;
});

leftSquare.addEventListener("mousedown", () => {
  isRightSquareGrabbed = false;
  isLeftSquareGrabbed = true;
});

leftSquare.addEventListener("mouseup", () => {
  isLeftSquareGrabbed = false;
});

rightHole.addEventListener("mouseenter", () => {
  if (isLeftSquareGrabbed === true) {
    timesPassed++;
    isLeftSquareGrabbed = false;
    isRightSquareGrabbed = true;
    rightSquare.style.backgroundColor = "white";
    rightSquare.textContent = `times passed: ${timesPassed}`;
    leftSquare.style.backgroundColor = "brown";
    leftSquare.textContent = null;
  } else if (isMouseDown === true && isLeftSquareGrabbed === false) {
    timesPassed++;

    rightSquare.style.backgroundColor = "green";
    leftSquare.style.backgroundColor = "white";
    leftSquare.textContent = `times passed: ${timesPassed}`;
  }
});

leftHole.addEventListener("mouseenter", () => {
  if (isRightSquareGrabbed === true) {
    timesPassed++;

    isRightSquareGrabbed = false;
    isLeftSquareGrabbed = true;
    rightSquare.style.backgroundColor = "green";
    rightSquare.textContent = null;
    leftSquare.style.backgroundColor = "white";
    leftSquare.textContent = `times passed: ${timesPassed}`;
  } else if (isMouseDown === true && isRightSquareGrabbed === false) {
    rightSquare.style.backgroundColor = "white";
    timesPassed++;

    rightSquare.textContent = `times passed: ${timesPassed}`;
    leftSquare.style.backgroundColor = "brown";
  }
});

function checkIsSquareRight() {
  if (isSquareRight === true) {
    console.log("true");
    rightSquare.style.backgroundColor = "white";
    leftSquare.style.backgroundColor = "brown";
  } else {
    console.log("false");
    rightSquare.style.backgroundColor = "green";
    leftSquare.style.backgroundColor = "white";
  }
}
