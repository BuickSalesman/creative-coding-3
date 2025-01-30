const rightSquare = document.getElementById("right-square");
const rightHole = document.getElementById("right-hole");
const leftSquare = document.getElementById("left-square");
const leftHole = document.getElementById("left-hole");
let isSquareRight = false;
let isRightSquareGrabbed = false;
let isLeftSquareGrabbed = false;

checkIsSquareRight();

rightHole.addEventListener("click", () => {
  isSquareRight = true;
  checkIsSquareRight();
});

leftHole.addEventListener("click", () => {
  isSquareRight = false;
  checkIsSquareRight();
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
