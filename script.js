const rightSquare = document.getElementById("right-square");
const rightHole = document.getElementById("right-hole");
const leftSquare = document.getElementById("left-square");
const leftHole = document.getElementById("left-hole");
let isSquareRight = false;
let isRightSquareGrabbed = false;
let isLeftSquareGrabbed = false;
let isMouseDown = false;

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
  console.log(`right square grabbed: ${isRightSquareGrabbed}`);
});

rightSquare.addEventListener("mouseup", () => {
  isRightSquareGrabbed = false;
  console.log(`still hoding right square: ${isRightSquareGrabbed}`);
});

leftSquare.addEventListener("mousedown", () => {
  isRightSquareGrabbed = false;
  isLeftSquareGrabbed = true;
  console.log(`left square grabbed: ${isLeftSquareGrabbed}`);
});

leftSquare.addEventListener("mouseup", () => {
  isLeftSquareGrabbed = false;
  console.log(`still hoding left square: ${isLeftSquareGrabbed}`);
});

rightHole.addEventListener("mouseenter", () => {
  if (isLeftSquareGrabbed === true) {
    isLeftSquareGrabbed = false;
    isRightSquareGrabbed = true;
    rightSquare.style.backgroundColor = "white";
    leftSquare.style.backgroundColor = "brown";
  } else if (isMouseDown === true && isLeftSquareGrabbed === false) {
    rightSquare.style.backgroundColor = "green";
    leftSquare.style.backgroundColor = "white";
  }
});

leftHole.addEventListener("mouseenter", () => {
  if (isRightSquareGrabbed === true) {
    isRightSquareGrabbed = false;
    isLeftSquareGrabbed = true;
    rightSquare.style.backgroundColor = "green";
    leftSquare.style.backgroundColor = "white";
  } else if (isMouseDown === true && isRightSquareGrabbed === false) {
    rightSquare.style.backgroundColor = "white";
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
