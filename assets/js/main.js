const box = document.getElementById("box-js");
const colors = {
  black: "#000",
  red: "#e74c3c",
  blue: "#4a69bd",
  hotPink: "#fd79a8",
};

// !함수의 선언!
// function 함수이름([파라미터]){
//       함수 실행 코드...
// }

function changeBlackColor() {
  box.style.backgroundColor = colors.black;
}

function changeRedColor() {
  box.style.backgroundColor = colors.red;
}

function changeBlueColor() {
  box.style.backgroundColor = colors.blue;
}

function changeHotPinkColor() {
  box.style.backgroundColor = colors.hotPink;
}
