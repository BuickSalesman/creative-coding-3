const rightSquare = document.getElementById("right-square");
const leftSquare = document.getElementById("left-square");
let isSquareRight = false;

rightSquare.addEventListener("click", () => {
  console.log("hello");
  isSquareRight = true;
  checkIsSquareRight();
});

leftSquare.addEventListener("click", () => {
  isSquareRight = false;
  checkIsSquareRight();
});

function checkIsSquareRight() {
  if (isSquareRight === true) {
    console.log("true");
  } else {
    console.log("false");
  }
}
