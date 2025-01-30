const rightSquare = document.getElementById("right-square");
const rightHole = document.getElementById("right-hole");
const leftSquare = document.getElementById("left-square");
const leftHole = document.getElementById("left-hole");
let isSquareRight = false;

checkIsSquareRight();

rightHole.addEventListener("click", () => {
  console.log("hello");
  isSquareRight = true;
  checkIsSquareRight();
});

leftHole.addEventListener("click", () => {
  isSquareRight = false;
  checkIsSquareRight();
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
