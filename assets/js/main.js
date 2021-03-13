const color = {
  black: "#000",
  red: "#e74c3c",
  blue: "#4a69bd",
  hotpink: "#fd79a8",
};

// function 함수이름( [파라미터] ){
//      한수실행코드
// }
// [] : 있어도 되고 없어도 된다.

function changeBlackColor() {
  const box = document.getElementById("box-js");
  box.style.backgroundColor = colors.black;
}

function changeRedColor() {
  alert("red으로 바뀌어라");
}

function changeBlueColor() {
  alert("blue으로 바뀌어라");
}

function changeHotpinkColor() {
  alert("hotpink으로 바뀌어라");
}
