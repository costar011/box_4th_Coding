const box = document.getElementById("box-js");
const colors = {
  black: "#000",
  red: "#e73c3c",
  blue: "#4a69bd",
  hotpink: "#fd79a8",
  green: "green",
};

// !함수의 선언!
// function 함수이름([파라미터]){
//  함수 실행 코드...
// }

function changeColor1() {
  box.style.backgroundColor = colors.black;
}
function changeColor2() {
  box.style.backgroundColor = colors.red;
}
function changeColor3() {
  box.style.backgroundColor = colors.blue;
}
function changeColor4() {
  box.style.backgroundColor = colors.hotpink;
}
function randomColor() {
  const colors = [
    "black",
    "red",
    "blue",
    "yellow",
    "orange",
    "grey",
    "purple",
    "skyblue",
    "green",
    "indigo",
  ];

  console.log(colors.lenfth);

  const randomNumber = Math.random() * 10;
  const resurt = Math.floor(randomNumber);

  console.log(resurt);

  box.style.backgroundColor = colors[resurt];
}
