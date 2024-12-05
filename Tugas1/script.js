const changeTextbutton = document.getElementById("changeText");
const changeColorbutton = document.getElementById("changeColor");
const text = document.getElementById("text");

changeTextbutton.addEventListener("click", function () {
  text.textContent = "Hello, Naswa Imutzz!";
});

changeColorbutton.addEventListener("click", function () {
  text.style.color = "blue";
});
